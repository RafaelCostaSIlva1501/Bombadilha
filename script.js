// Abre e fecha o menu inicial
document.getElementById("btnMenu").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("open");
});

let playerIndex = 1;

const player = document.querySelectorAll(".player");

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

const showPlayers = () => {
    player[1].src = `img/players/${players[playerIndex].img}.jpg`;

    player[0].src = `img/players/${players[playerIndex + 1].img}.jpg`;

    player[2].src = `img/players/${players[playerIndex - 1].img}.jpg`;
};

const changePlayer = (change) => {
    if (change === "sub") {
        playerIndex = playerIndex - 1;

        if (playerIndex < 0) {
            playerIndex = players.length - 1;
        }

        player[2].classList.add("leftPlayer");

        setTimeout(() => {
            player[2].classList.remove("leftPlayer");
            showPlayers();
        }, 500);
    } else if (change === "add") {
        playerIndex = playerIndex + 1;
        if (playerIndex > players.length - 1) {
            playerIndex = 0;
        }

        player[0].classList.add("rightPlayer");

        setTimeout(() => {
            player[0].classList.remove("rightPlayer");
            showPlayers();
        }, 500);
    }

    console.log(playerIndex);
};

showPlayers();
