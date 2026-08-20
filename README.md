# Mundo Disney — Integração com API

## Autor

* **Nome:** Frederico
* **Ano:** 2026

## 1. Identificação do projeto

* **Nome do projeto:** Meu Disney
* **Instituição de ensino:** Senac
* **Unidade curricular:** UC8 - Desenvolver Aplicações Mobile
* **Professor(a):** Rafaela Pessin

---

## 2. Sobre o projeto

> Descreva brevemente uma descrição do projeto desenvolvido.> Aplicação web responsiva (otimizada para mobile e desktop) que consome a API oficial da Disney para exibir uma galeria interativa de personagens com paginação dinâmica.

## 3. Estrutura do projeto

Apresente a organização dos arquivos e pastas do seu projeto.

**Exemplo:**

```text
mundo-disney/
│
├── index.html
|
├── css
│   └── style.css
├── js
│   └── script.js
└── README.md
```

### Descrição dos arquivos

| Arquivo      | Descrição                                                        |
| ------------ | ---------------------------------------------------------------- |
| `index.html` |Estrutura principal da página com o container e botões de controle.|
| `style.css`  |Estilização responsiva com CSS Grid e regras mobile para renderizar os cards sem sobras nas imagens.|
| `script.js`  |Lógica assíncrona com fetch para requisição na API, manipulação do DOM e tratamento de eventos.|
| `README.md`  |Documentação técnica do projeto.|

> **Caso seu projeto possua outras pastas ou arquivos, apresente-os também na estrutura acima.**

---

## 💻 4. Tecnologias utilizadas

Liste as tecnologias utilizadas no desenvolvimento do projeto.

* Item 1 HTML5
* Item 2 CSS3 (CSS Grid, Flexbox e Media Queries)
* Item 3 JavaScript ES6+ (Async/Await, Fetch API, DOM)

---

## 5. API utilizada

### Nome da API

**disneyapi.dev**

### Endpoint utilizado

```text
[https://api.disneyapi.dev/character](https://api.disneyapi.dev/character)
```

### Para que a API foi utilizada?

> A API foi utilizada para buscar dinamicamente os dados de personagens da Disney e exibi-los em cards na interface do usuário conforme o botão de carregar mais é acionado.

### Quais informações foram consumidas?

> Escreva aqui: Nomes dos personagens (name), URLs das fotos oficiais (imageUrl), número total de dados por página e metadados de paginação.

---

##  6. Como executar o projeto

Explique passo a passo como outra pessoa pode executar seu projeto em outra máquina.

### Pré-requisitos Nenhum software adicional é necessário. Basta um navegador moderno (Google Chrome, Edge, Firefox ou Safari)

Informe se é necessário instalar algum programa ou ferramenta para executar o seu projeto em outr máquina

### Passo a passo

* Passo 1 Faça o download ou clone os arquivos do repositório em seu computador.
* Passo 2 Acesse a pasta raiz da aplicação (mundo-disney/).
* Passo 3 Dê um duplo clique no arquivo index.html ou abra-o por meio de um servidor local (como a extensão Live Server do VS Code).

---

## 7. Como funciona a integração

Explique de forma objetiva e em até 10 passos como sua aplicação se comunica com a API.

1. A aplicação é inicializada e dispara a função carregarPersonagens().
2. A URL de requisição é montada utilizando a API_URL junto aos parâmetros page e pageSize.
3. É realizada uma chamada assíncrona utilizando fetch(url).
4. A aplicação aguarda a resposta e faz a conversão dos dados recebidos para o formato JSON (resposta.json()).
5. A função itera pela lista de objetos contida na propriedade dados.data.
6. Para cada personagem, a função criarCard(personagem) cria dinamicamente elementos HTML (div, img, p).
7. O atributo src da imagem e o texto da tag de parágrafo são preenchidos com os dados da API.
8. Os cards finalizados são inseridos dentro do container principal da página (#container).
9. As variáveis de controle de estado (totalCarregados e paginaAtual) são incrementadas para atualizar os contadores em tela.
10. O evento de clique do botão btnCarregar aciona o mesmo fluxo, buscando as páginas seguintes sem recarregar o navegador.

## 8. Desafios encontrados

Registre pelo menos um problema ou dificuldade que você encontrou durante o desenvolvimento e como resolveu

### Desafios encontrados

**Problema:**

> 1.Incompatibilidade visual dos cards entre monitores de PC e telas pequenas de celulares, gerando caixas gigantescas em dispositivos móveis.
> 2.Espaço bege vazio (fundo da div) aparecendo logo abaixo das fotos dos personagens devido à disparidade entre o tamanho fixo da imagem e a altura do card.

**Como identifiquei o problema:**

> 1.Testando a interface na ferramenta de inspeção do navegador em modo de emulação mobile.
> 2.Visualizando os cards na tela e percebendo o vão bege entre a borda da foto e o rodapé do card com o nome.

**Como resolvi:**

> 1.Reestruturei o layout utilizando CSS Grid com repeat(auto-fill, minmax(...)) e apliquei @media queries para travar em 2 colunas no celular.
> 2.Apliquei object-fit: cover e defini uma altura fixa com display: block nas imagens para forçá-las a preencher todo o topo do card

---

## 9. Aprendizados

> [Durante o desenvolvimento deste projeto, aprendi a consumir APIs RESTful de forma assíncrona usando async/await e a estruturar layouts dinâmicos e adaptáveis com CSS Grid sem quebrar a proporção das imagens.]

---