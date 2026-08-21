// sw.js - Service Worker do Meu Disney

const CACHE_NAME = 'meu-disney-v1';

// Arquivos essenciais para o app abrir mesmo offline
const ARQUIVOS_ESSENCIAIS = [
  '/Disney_Personagens/',
  '/Disney_Personagens/index.html',
  '/Disney_Personagens/css/style.css',
  '/Disney_Personagens/js/script.js',
  '/Disney_Personagens/manifest.json',
  '/Disney_Personagens/img/disney-icon.png'
];

// Instalação: guarda os arquivos essenciais no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARQUIVOS_ESSENCIAIS);
    })
  );
  self.skipWaiting();
});

// Ativação: remove caches antigos de versões anteriores
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((nomes) => {
      return Promise.all(
        nomes
          .filter((nome) => nome !== CACHE_NAME)
          .map((nome) => caches.delete(nome))
      );
    })
  );
  self.clients.claim();
});

// Fetch: tenta buscar da rede primeiro, cai pro cache se offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((resposta) => {
        // Atualiza o cache com a versão mais nova, quando possível
        const respostaClone = resposta.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, respostaClone);
        });
        return resposta;
      })
      .catch(() => {
        // Sem internet: tenta servir do cache
        return caches.match(event.request);
      })
  );
});
