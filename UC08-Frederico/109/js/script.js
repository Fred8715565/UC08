const painelLog = document.getElementById('log-painel');

function registrarlLog(mensagem) {

    const novaLinha = document.createElement('div');
    novaLinha.textContent = `[${new Date().toLocaleTimeString()}] ${mensagem}`
    ;
    painelLog.appendChild(novaLinha);

};

//EVENTOS DE MOUSE
const btnClique = document.getElementById('btn-clique');
const areaMouse = document.getElementById('area-mouse');

btnClique.addEventListener('click', function()  {
    registrarlLog('Ta clicado!');

});

//EVENTOS DE MOUSE: MOUSEENTER
areaMouse.addEventListener('mouseenter', function()  {
    areaMouse.style.backgroundColor = '#00FF00';
    areaMouse.textContent = 'Passou o mouse sobre a área!';
    registrarlLog('Passou o mouse sobre a área!');
});

//EVENTO DE TECLADO: KEYDOWN
const campoTeclado = document.getElementById('campo-teclado');
campoTeclado.addEventListener('keydown', function(evento) {
    registrarlLog("[Tecla Presionada] Teclado Evento 'keydown' ativado.");
});

//EVENTO DE TECLADO: KEYUP
campoTeclado.addEventListener('keyup', function(evento) {
    registrarlLog("[Tecla Solta] Evento 'keyup' ativado.");
    
});