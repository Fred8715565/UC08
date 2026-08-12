// as const btn e status são variáveis constantes
const btn = document.getElementById('btn-gravador');
const status = document.getElementById('status-gravacao');

// quando o botão for clicado, ele muda a cor e o texto
btn.addEventListener('mousedown', () => {
// muda a cor do botão para vermelho e o texto para "Gravando..."
    btn.style.backgroundColor = '#e74c3c';
// muda o texto do botão para "Gravando... Não solte!" e o status para "Capturando áudio..."
    btn.innerText = '🔴 Gravando... Não solte!';
// muda o texto do status para "Capturando áudio..."
    status.innerText = 'Status: Capturando áudio...';
});

// quando o botão for solto, ele muda a cor e o texto
btn.addEventListener('mouseup', () => {
// muda a cor do botão para azul e o texto para "Clique e Segure para Gravar"
    btn.style.backgroundColor = '#3498db';
// muda o texto do botão para "Clique e Segure para Gravar" e o status para "Gravação concluída e enviada!"
    btn.innerText = '🎤 Clique e Segure para Gravar';
// muda o texto do status para "Gravação concluída e enviada!"
    status.innerText = 'Status: Gravação concluída e enviada!';
});
