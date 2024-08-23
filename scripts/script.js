// Adiciona um event listener ao botão de menu, que alterna a classe "open" no elemento com o ID "menu" ao clicar
document.getElementById("btnMenu").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("open");
});

// Define o índice inicial do jogador a ser mostrado
let playerIndex = 1;

// Seleciona todos os elementos com a classe "player"
const player = document.querySelectorAll(".player");

// Define um array de objetos que contém informações sobre os jogadores, como nome, idade, altura, posição e imagem
const players = [
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "bruno-lopes",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "caua-nunes",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "danilo-oliveira",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "davi-reis",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "felipe-bordignon",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "felipe-oliveira",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "guilherme-costa",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "guilherme-macedo",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "luan-lopes",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "manga",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "marcio-reis",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "marcos",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "pablo-almeida",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "reinan",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "remerson-coelho",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "thobias",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "tiozim",
    },
    {
        name: "",
        age: "",
        height: "",
        position: "",
        img: "wendre-lima",
    },
];

// Função para exibir os jogadores na tela
const showPlayers = () => {
    // Define a imagem central como o jogador atual
    player[1].src = `img/players/${players[playerIndex].img}.jpg`;

    // Define a imagem à esquerda como o próximo jogador
    player[0].src = `img/players/${players[playerIndex + 1].img}.jpg`;

    // Define a imagem à direita como o jogador anterior
    player[2].src = `img/players/${players[playerIndex - 1].img}.jpg`;
};

// Função para mudar o jogador exibido ao clicar nos botões de navegação
const changePlayer = (change) => {
    if (change === "sub") {
        // Se "sub" é passado, decrementa o índice do jogador
        playerIndex = playerIndex - 1;

        // Se o índice for menor que 0, volta para o último jogador do array
        if (playerIndex < 0) {
            playerIndex = players.length - 1;
        }

        // Adiciona a animação de deslizamento para a esquerda
        player[2].classList.add("leftPlayer");

        // Remove a animação após 0,5 segundos e mostra os novos jogadores
        setTimeout(() => {
            player[2].classList.remove("leftPlayer");
            showPlayers();
        }, 500);
    } else if (change === "add") {
        // Se "add" é passado, incrementa o índice do jogador
        playerIndex = playerIndex + 1;

        // Se o índice for maior que o tamanho do array, volta para o primeiro jogador
        if (playerIndex > players.length - 1) {
            playerIndex = 0;
        }

        // Adiciona a animação de deslizamento para a direita
        player[0].classList.add("rightPlayer");

        // Remove a animação após 0,5 segundos e mostra os novos jogadores
        setTimeout(() => {
            player[0].classList.remove("rightPlayer");
            showPlayers();
        }, 500);
    }

    // Loga o índice atual do jogador no console
    console.log(playerIndex);
};

// Chama a função para mostrar os jogadores iniciais ao carregar a página
showPlayers();
