const painelLog = document.getElementById('log-painel');

function registrarLog(mensagem) {

    const novaLinha = document.createElement('div');
    novaLinha.textContent = `[${new Date().toLocaleTimeString()}] ${mensagem}`;
    painelLog.appendChild(novaLinha);

};

//EVENTOS DE MOUSE
const btnClique = document.getElementById('btn-clique');
const areaMouse = document.getElementById('area-mouse');

btnClique.addEventListener('click', function () {
    registrarLog('Ta clicado!');

});

//EVENTOS DE MOUSE: MOUSEENTER
areaMouse.addEventListener('mouseenter', function () {
    areaMouse.style.backgroundColor = '#00FF00';
    areaMouse.textContent = 'Passou o mouse sobre a área!';
    registrarLog('Passou o mouse sobre a área!');
});

//EVENTO DE TECLADO: KEYDOWN
const campoTeclado = document.getElementById('campo-teclado');
campoTeclado.addEventListener('keydown', function (evento) {
    registrarLog("[Tecla Presionada] Teclado Evento 'keydown' ativado.");
});

//EVENTO DE TECLADO: KEYUP
campoTeclado.addEventListener('keyup', function (evento) {
    registrarLog("[Tecla Solta] Evento 'keyup' ativado.");

});

// ENVETO DE FORULARIO: ENVIO
const meuFormulario = document.getElementById('meu-formulario');
const campoInput = document.getElementById('campo-input');

campoInput.addEventListener('input', function () {
    registrarLog(`[INPUT] Formulário: Evento 'input' dispararda! -> Valor atual:"${campoInput.value}"`);
});

//EVENTO DE FORMULÁRIO: SUBMIT
// Evento deformulário: submit(acesso ao evento de envio via id do formulário)
meuFormulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Evita o envio do formulário para fins de demonstração
    registrarLog(`[FORMULÁRIO] Formulário: Evento 'submit' disparado!`);
});


const campoEnvio = document.getElementById('campo-envio');
campoEnvio.addEventListener('click', function(evento) {
    evento.preventDefault(); // Evita o envio do formulário para fins de demonstração
    registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");
});