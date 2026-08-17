// ===== REFERÊNCIAS AOS ELEMENTOS DO HTML =====
const btn = document.getElementById('btn-gravador');       // Botão principal de gravar
const status = document.getElementById('status-gravacao'); // Texto que mostra o status atual
const playerAudio = document.getElementById('player-audio'); // Elemento <audio> (fica escondido, só toca o som)
const btnOuvir = document.getElementById('btn-ouvir');      // Botão customizado de play/pause

// ===== VARIÁVEIS DE CONTROLE DA GRAVAÇÃO =====
let mediaRecorder;   // Vai guardar o objeto responsável por gravar o áudio
let audioChunks = []; // Lista que guarda os pedaços de áudio capturados durante a gravação
let stream;           // Vai guardar o fluxo de áudio vindo do microfone do usuário

// ===== FUNÇÃO: PEDIR PERMISSÃO DO MICROFONE =====
// Abre o popup do navegador perguntando se pode usar o microfone
async function pedirPermissaoMicrofone() {
    try {
        // getUserMedia retorna o "stream" (fluxo ao vivo) do microfone, se autorizado
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
        // Cai aqui se o usuário negar a permissão ou o navegador não suportar
        status.innerText = 'Status: Permissão de microfone negada';
        console.error('Erro ao acessar o microfone:', err);
    }
}

// ===== FUNÇÃO: INICIAR A GRAVAÇÃO =====
async function iniciarGravacao() {
    // Se ainda não temos o microfone liberado, pede a permissão primeiro
    if (!stream) {
        await pedirPermissaoMicrofone();
    }

    // Se mesmo assim não conseguiu o stream (permissão negada), interrompe a função
    if (!stream) return;

    // Limpa os pedaços de áudio de uma gravação anterior, começando do zero
    audioChunks = [];

    // Esconde o botão de ouvir enquanto uma nova gravação está sendo feita
    btnOuvir.style.display = 'none';

    // Cria o gravador conectado ao fluxo de áudio do microfone
    mediaRecorder = new MediaRecorder(stream);

    // Evento disparado toda vez que um novo pedaço de áudio fica pronto
    mediaRecorder.addEventListener('dataavailable', (event) => {
        // Só guarda o pedaço se ele realmente tiver conteúdo (size > 0)
        if (event.data.size > 0) {
            audioChunks.push(event.data);
        }
    });

    // Evento disparado quando a gravação é finalizada (mediaRecorder.stop())
    mediaRecorder.addEventListener('stop', () => {
        // Junta todos os pedaços de áudio em um único arquivo (Blob)
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });

        // Cria uma URL temporária para esse arquivo, usável pelo navegador
        const audioUrl = URL.createObjectURL(audioBlob);

        // Define essa URL como fonte do elemento <audio>
        playerAudio.src = audioUrl;

        // Mostra o botão de ouvir (estava escondido até aqui) e reseta o texto dele
        btnOuvir.style.display = 'inline-block';
        btnOuvir.innerText = '▶️ Ouvir áudio';
    });

    // Começa a gravação de fato
    mediaRecorder.start();
}

// ===== FUNÇÃO: PARAR A GRAVAÇÃO =====
function pararGravacao() {
    // Só tenta parar se existir um gravador e ele não estiver já inativo
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop(); // Isso dispara o evento 'stop' configurado acima
    }
}

// ===== CLIQUE NO BOTÃO DE OUVIR (play/pause customizado) =====
btnOuvir.addEventListener('click', () => {
    if (playerAudio.paused) {
        // Se o áudio estava pausado, toca e atualiza o texto do botão
        playerAudio.play();
        btnOuvir.innerText = '⏸️ Pausar';
    } else {
        // Se estava tocando, pausa e volta o texto original
        playerAudio.pause();
        btnOuvir.innerText = '▶️ Ouvir áudio';
    }
});

// Quando o áudio termina de tocar sozinho (chega ao fim), reseta o texto do botão
playerAudio.addEventListener('ended', () => {
    btnOuvir.innerText = '▶️ Ouvir áudio';
});

// ===== EVENTOS DE GRAVAÇÃO — TOQUE (CELULAR) =====

// Dedo tocou o botão: começa a gravar
btn.addEventListener('touchstart', (evento) => {
    evento.preventDefault(); // Evita zoom/seleção de texto sem querer no celular
    btn.style.backgroundColor = '#e74c3c'; // Muda a cor pra vermelho (modo gravando)
    btn.innerText = '🔴 Gravando... Não solte!';
    status.innerText = 'Status: Capturando áudio...';
    iniciarGravacao();
});

// Dedo saiu do botão: para de gravar
btn.addEventListener('touchend', (evento) => {
    evento.preventDefault();
    btn.style.backgroundColor = '#3498db'; // Volta a cor original (azul)
    btn.innerText = '🎤 Clique e Segure para Gravar';
    status.innerText = 'Status: Gravação concluída!';
    pararGravacao();
});

// ===== EVENTOS DE GRAVAÇÃO — MOUSE (COMPUTADOR) =====

// Botão do mouse pressionado: começa a gravar
btn.addEventListener('mousedown', () => {
    btn.style.backgroundColor = '#e74c3c';
    btn.innerText = '🔴 Gravando... Não solte!';
    status.innerText = 'Status: Capturando áudio...';
    iniciarGravacao();
});

// Botão do mouse solto: para de gravar
btn.addEventListener('mouseup', () => {
    btn.style.backgroundColor = '#3498db';
    btn.innerText = '🎤 Clique e Segure para Gravar';
    status.innerText = 'Status: Gravação concluída!';
    pararGravacao();
});