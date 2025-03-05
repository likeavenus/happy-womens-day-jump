import Phaser from "phaser";
import { greetings } from "./constants";
import { TextBox } from "../containers/TextBox";

// export const GIRLS = [
//   { name: "Савч", greetings: greetings.savch.text, key: "savch" },
//   { name: "Русиня", greetings: greetings.rusinya.text, key: "rusinya" },
//   {
//     name: "Наташа",
//     greetings: greetings.natasha.text,
//     key: "natasha",
//   },
//   {
//     name: "Таня",
//     greetings: greetings.tanya.text,
//     key: "tanya",
//   },
//   {
//     name: "Карина",
//     greetings: greetings.karina.text,
//     key: "karina",
//   },
//   { name: "Маша", greetings: greetings.masha.text, key: "masha" },
//   { name: "Шу", greetings: greetings.masha.text, key: "shu" },
//   { name: "Катя", greetings: greetings.katya.text, key: "katya" },
//   { name: "Влада", greetings: greetings.vlada.text, key: "vlada" },
//   { name: "Ксюша", greetings: greetings.ksusha.text, key: "ksusha" },
//   { name: "Сашенька", greetings: greetings.sashenka.text, key: "sashenka" },
//   { name: "Александра", greetings: greetings.alexandra.text, key: "alexandra" },
//   { name: "Лиза", greetings: greetings.liza.text, key: "liza" },
// ];
export const GIRLS = [
  { name: "Ксения Ротозей", greetings: greetings.ksenia.text, key: "ksenia" },
  { name: "Анна Величко", greetings: greetings.anna.text, key: "anna" },
  {
    name: "Наталья Поветкина",
    greetings: greetings.nataliaP.text,
    key: "natalia_p",
  },
  {
    name: "Анастасия Петросян",
    greetings: greetings.nastya.text,
    key: "nastya",
  },
  {
    name: "Наталья Войлошникова",
    greetings: greetings.nataliaV.text,
    key: "natalia_v",
  },
  { name: "Елена Никифорова", greetings: greetings.elena.text, key: "elena" },
];

const CIRCLE_RADIUS = 240;

export default class Menu extends Phaser.Scene {
  window!: Phaser.GameObjects.Rectangle;
  text!: Phaser.GameObjects.Text;
  state: string = "none";
  constructor() {
    super("Menu");
  }

  create() {
    const centerX = this.cameras.main.width / 2; // Центр экрана по X
    const cardWidth = 400; // Ширина карточки
    const cardHeight = 100; // Высота карточки
    const spacing = 20; // Отступ между карточками
    const startY = 100; // Начальная позиция по Y

    // let textBox = new TextBox(this, 600, 300, 400, 260, greetings.ksenia.text);
    this.cards = [];

    GIRLS.forEach((girl, index) => {
      // const angle = (i / GIRLS.length) * Math.PI * 2;
      // const x = centerX + Math.cos(angle) * CIRCLE_RADIUS;
      // const y = centerY + Math.sin(angle) * CIRCLE_RADIUS;
      const cardY = startY + (cardHeight + spacing) * index; // Позиция карточки по Y
      const card = this.add.rectangle(centerX, cardY, cardWidth, cardHeight, 0xffffff, 1); //

      // const card = this.add.rectangle(x, y + i * 10, spacing + 50, 100, 0xffffff, 1);

      card.setInteractive();
      card.on("pointerdown", () => {
        localStorage.setItem("girlKey", girl.key);
        localStorage.setItem("greetings", girl.greetings);
        this.startGame();
      });

      const emitter = this.add.particles(0, 0, "flare", {
        speed: 24,
        lifespan: 1500,
        quantity: 5,
        scale: { start: 0.4, end: 0 },
        emitting: false,
        emitZone: { type: "edge", source: card.getBounds(), quantity: 42 },
        duration: 200,
      });

      card.on("pointerover", () => {
        emitter.start();
      });

      const text = this.add.text(card.x - card.width / 2 + 16, card.y, girl.name, {
        color: "pink",
      });

      this.cards.push(card);
    });

    // this.startGame();
    // const name = localStorage.getItem("happyName");
    // if (name) {
    //   this.startGame();
    // } else {
    //   const promptName = prompt("Как вас зовут?") as string;
    //   console.log("promptName: ", promptName);
    //   localStorage.setItem("happyName", promptName);
    //   this.startGame();
    // }
  }

  startGame = () => {
    this.scene.start("Game");
  };
}
