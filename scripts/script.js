import { DOM } from "./DOM.js";

let menuON = false;

DOM.btnMenu.forEach((e) => {
  e.addEventListener("click", () => {
    menuON = !menuON;

    DOM.menu.style.width = menuON ? "220px" : "0px";
    DOM.menu.style.padding = menuON ? "20px 20px" : " 20px 0px";
  });
});

const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
};

const player = [
  "bruno-lopes",
  "caua-nunes",
  "danilo-oliveira",
  "davi-reis",
  "felipe-bordignon",
  "felipe-oliveira",
  "guilherme-costa",
  "guilherme-macedo",
  "luan-lopes",
  "manga",
  "marcio-reis",
  "marcos",
  "pablo-almeida",
  "reinan",
  "remerson-coelho",
  "thobias",
  "tiozim",
  "wendre-lima",
];

player.map((e) => {
  const icon = createElement("img");
  icon.src = `../img/players/${e}-icon.jpg`;

  DOM.icons.appendChild(icon);

  icon.addEventListener("click", () => {
    DOM.banner.innerHTML = ""
    const img = createElement("img");
    img.src = `../img/players/${e}.jpg`;
    DOM.banner.appendChild(img);
  });
});
