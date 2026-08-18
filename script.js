// ====================================================================================================================================================================================
// FASE 1: Alterar o texto dentro da caixinha
// COMPORTAMENTO: 
// --> A tela inicia com o texto “O JavaScript pode alterar o conteúdo de um elemento HTML”. 
// --> Ao clicar no botão “Alterar texto” o texto deve ser alterado para “Olá, JavaScript! O texto foi trocado!”. 
// --> O botão “Resetar” volta o resultado para o texto inicial.
// ====================================================================================================================================================================================

document.getElementById("botao-alterar-texto").addEventListener("click", alterarConteudo);
document.getElementById("botao-resetar-demo1").addEventListener("click", resetarConteudo);

// Guardamos o texto original em uma constante para poder usá-lo depois na função de resetar,
// assim não precisamos digitar o texto duas vezes no código.
const TEXTO_ORIGINAL_DEMO1 = "O JavaScript pode alterar o conteúdo de um elemento HTML.";

function alterarConteudo() {
  // Pegamos o elemento <p id="demo1"> pelo seu id
  const paragrafo = document.getElementById("demo1");
  // Trocamos o conteúdo de texto dele pelo novo texto pedido
  paragrafo.textContent = "Olá, JavaScript! O texto foi trocado!";
}

function resetarConteudo() {
  // Pegamos o mesmo parágrafo e devolvemos o texto original guardado na constante
  const paragrafo = document.getElementById("demo1");
  paragrafo.textContent = TEXTO_ORIGINAL_DEMO1;
}


// ====================================================================================================================================================================================
// FASE 2: LIGAR E DESLIGAR LÂMPADA
// COMPORTAMENTO: 
// --> A tela inicia com a lâmpada desligada. 
// --> Ao clicar no botão “Ligar a luz” a lâmpada deve ligar.
// --> Quando clicar em “Desligar a luz” a lâmpada deve desligar.
// ====================================================================================================================================================================================
document.getElementById("botao-ligar").addEventListener("click", ligarLampada);
document.getElementById("botao-desligar").addEventListener("click", desligarLampada);

function ligarLampada() {
  // O HTML tem dois SVGs sobrepostos: um da lâmpada apagada (lamp-off) e outro da acesa (lamp-on).
  // Para "ligar" a lâmpada, escondemos o SVG apagado e mostramos o SVG aceso.
  const lampadaApagada = document.getElementById("lamp-off");
  const lampadaAcesa = document.getElementById("lamp-on");
  const status = document.getElementById("lamp-status");

  lampadaApagada.style.display = "none";
  lampadaAcesa.style.display = "block";

  // Também atualizamos o texto que informa o status da lâmpada
  status.textContent = "Lâmpada ligada";
}

function desligarLampada() {
  // Fazemos o processo inverso: mostramos o SVG apagado e escondemos o aceso
  const lampadaApagada = document.getElementById("lamp-off");
  const lampadaAcesa = document.getElementById("lamp-on");
  const status = document.getElementById("lamp-status");

  lampadaApagada.style.display = "block";
  lampadaAcesa.style.display = "none";

  status.textContent = "Lâmpada desligada";
}


// ====================================================================================================================================================================================
// FASE 3: Alterar os estilos do texto
// COMPORTAMENTO: 
// --> A tela inicia com o texto “O JavaScript pode alterar o estilo visual de qualquer elemento”, sem nenhum estilo aplicado.
// --> Ao clicar no botão “Aumentar fonte”, o tamanho da letra deve aumentar para 25px.
// --> Ao clicar no botão “Mudar cor”, a cor do texto deve ficar verde. Ao clicar no botão “Negrito”, o texto fica em negrito.
// --> Ao clicar no botão “Fundo”, é aplicado um fundo com transparência no texto. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA AUMENTAR TAMANHO DA FONTE, MUDAR A COR, APLICAR NEGRITO, APLICAR FUNDO E RESETAR A DEMONSTRAÇÃO DO BOX 3 <<<
// ====================================================================================================================================================================================

function aumentarFonte() {
  // escreva a sua solução aqui
  
}


function mudarCor() {
  // escreva a sua solução aqui
}


function aplicarNegrito() {
  // escreva a sua solução aqui
}


function aplicarFundo() {
  // escreva a sua solução aqui
}


function resetarDemonstracao() {
  // escreva a sua solução aqui
}



// ====================================================================================================================================================================================
// FASE 4: Ocultar o texto
// COMPORTAMENTO: 
// --> A tela inicia com o texto “Este parágrafo vai sumir quando você clicar no botão abaixo.”.
// --> Ao clicar no botão “Ocultar elemento”, o texto deve sumir. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA OCULTAR ELEMENTO E MOSTRAR ELEMENTO DO BOX 4 <<<
// ======================================================================================================================================================================================

function ocultarElemento() {
  // escreva a sua solução aqui
}


function mostrarElemento() {
  // escreva a sua solução aqui
}



// ====================================================================================================================================================================================
// FASE 5: Exibir o texto
// COMPORTAMENTO: 
// --> A tela inicia com um texto oculto. 
// --> Ao clicar no botão “Revelar elemento”, o texto deve aparecer. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA MOSTRAR TEXTO E OCULTAR TEXTO DO BOX 5 <<<
// ====================================================================================================================================================================================

function exibirTexto() {
  // escreva a sua solução aqui
}


function esconderTexto() {
  //  escreva a sua solução aqui
}



// ====================================================================================================================================================================================
// FASE 6: Iniciar a aplicação
// COMPORTAMENTO:
// --> O index.html será executado 
// --> Em seguida, a linha "document.addEventListener('DOMContentLoaded', iniciarAplicacao);" vai chamar a função iniciarAplicacao()
// --> A função será executada e dentro dela terá outras chamadas de função (as que você criou ali em cima - FASE 1 a 5)
// --> Essas chamadas de função devem executar as funções que você programou na sua página

// >>> CRIE A FUNÇÃO PARA INICIAR A APLICAÇÃO, QUE SERÁ CHAMADA PELA LINHA document.addEventListener('DOMContentLoaded', iniciarAplicacao); <<<
// ====================================================================================================================================================================================

function iniciarAplicacao() {
  // --------------------------------------------------------
  // FASE 1: Configure e chame as funções que irão alterar 
  // e resetar o texto dentro da caixinha
  // --------------------------------------------------------




  // --------------------------------------------------------
  // FASE 2: Configure e chame as funções que irão ligar e
  // desligar a lâmpada
  // --------------------------------------------------------

  


  // --------------------------------------------------------
  // FASE 3: Configure e chame as funções que irão alterar
  // os estilos do texto
  // --------------------------------------------------------

  


  // --------------------------------------------------------
  // FASE 4: Configure e chame as funções que irão ocultar e
  // mostrar o elemento
  // --------------------------------------------------------

  


  // --------------------------------------------------------
  // FASE 5: Configure e chame as funções que irão ocultar e
  // mostrar o texto
  // -------------------------------------------------------
  
  


}
document.addEventListener('DOMContentLoaded', iniciarAplicacao);