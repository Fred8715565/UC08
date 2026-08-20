// URL base da API da Disney (documentação: https://disneyapi.dev/)
const API_URL = "https://api.disneyapi.dev/character";

// Controle de página e total de personagens carregados
let paginaAtual = 1;
const personagensPorPagina = 50;
let totalCarregados = 0;

// Elementos da página
const container = document.getElementById("container");
const contador = document.getElementById("contador");
const paginaTexto = document.getElementById("paginaAtual");
const btnCarregar = document.getElementById("btnCarregar");

// Função que busca os personagens na API
async function carregarPersonagens() {
  // Feedback visual: desabilita o botão enquanto busca os dados
  btnCarregar.disabled = true;
  btnCarregar.textContent = "Carregando...";

  const url = `${API_URL}?page=${paginaAtual}&pageSize=${personagensPorPagina}`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  console.log(dados);

  // Percorre os personagens recebidos e cria um card para cada um
  for (const personagem of dados.data) {
    criarCard(personagem);
  }

  // Atualiza o total de personagens carregados
  totalCarregados += dados.data.length;
  contador.textContent = `${totalCarregados} personagens carregados`;

  // Atualiza a identificação da página e avança para a próxima
  paginaTexto.textContent = `Página ${paginaAtual}`;
  paginaAtual++;

  // Reabilita o botão
  btnCarregar.disabled = false;
  btnCarregar.textContent = "Carregar mais";
}

// Função que cria e insere um card de personagem no container
function criarCard(personagem) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Wrapper mantém a proporção da imagem sempre igual entre os cards
  const fotoWrap = document.createElement("div");
  fotoWrap.classList.add("foto-wrap");

  const imagem = document.createElement("img");
  imagem.src = personagem.imageUrl;
  imagem.alt = personagem.name;
  imagem.loading = "lazy";

  const nome = document.createElement("p");
  nome.textContent = personagem.name;

  fotoWrap.appendChild(imagem);
  card.appendChild(fotoWrap);
  card.appendChild(nome);
  container.appendChild(card);
}

// Evento do botão "Carregar mais"
btnCarregar.addEventListener("click", carregarPersonagens);

// Carrega a primeira página assim que a aplicação abre
carregarPersonagens();