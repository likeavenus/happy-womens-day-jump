import Phaser from "phaser";
import { greetings2 } from "./constants";
import { TextBox } from "../containers/TextBox";

export const GIRLS = [
  { name: "Савч", greetings: greetings2.savch.text, key: "savch" },
  { name: "Русиня", greetings: greetings2.rusinya.text, key: "rusinya" },
  {
    name: "Наташа",
    greetings: greetings2.natasha.text,
    key: "natasha",
  },
  {
    name: "Таня",
    greetings: greetings2.tanya.text,
    key: "tanya",
  },
  {
    name: "Карина",
    greetings: greetings2.karina.text,
    key: "karina",
  },
  { name: "Маша", greetings: greetings2.masha.text, key: "masha" },
  { name: "Шу", greetings: greetings2.masha.text, key: "shu" },
  { name: "Катя", greetings: greetings2.katya.text, key: "katya" },
  { name: "Влада", greetings: greetings2.vlada.text, key: "vlada" },
  { name: "Ксюша", greetings: greetings2.ksusha.text, key: "ksusha" },
  { name: "Сашенька", greetings: greetings2.sashenka.text, key: "sashenka" },
  { name: "Александра", greetings: greetings2.alexandra.text, key: "alexandra" },
  { name: "Лиза", greetings: greetings2.liza.text, key: "liza" },
];

export default class Menu extends Phaser.Scene {
  window!: Phaser.GameObjects.Rectangle;
  text!: Phaser.GameObjects.Text;
  state: string = "none";
  private shaders: Phaser.GameObjects.Shader[] = [];

  constructor() {
    super("Menu");
  }

  preload() {
    this.load.glsl("cardShader", "assets/shaders/cardShader.frag");
    this.load.glsl("backgroundShader", "assets/shaders/background.glsl");
  }

  // create() {
  //   this.add.shader(
  //     "backgroundShader",
  //     this.cameras.main.width / 2,
  //     this.cameras.main.height / 2,
  //     this.cameras.main.width,
  //     this.cameras.main.height,
  //     { time: 0 }
  //   );

  //   const centerX = this.cameras.main.width / 2;
  //   const startY = 120; // Начальная позиция первого ряда
  //   const cardSize = 150; // Размер квадратной карточки
  //   const cardWidth = 150;
  //   const cardHeight = 75;

  //   const spacing = 15; // Отступ между карточками и столбцами

  //   this.cards = [];

  //   GIRLS.forEach((girl, index) => {
  //     const column = index % 2; // 0 - левый столбец, 1 - правый
  //     const row = Math.floor(index / 2); // Номер ряда

  //     // Рассчитываем позицию
  //     const x = column === 0 ? centerX - (cardSize + spacing) / 2 : centerX + (cardSize + spacing) / 2;
  //     const y = startY + row * (cardSize / 2 + spacing);

  //     // Создаем квадратную карточку
  //     // const card = this.add.rectangle(x, y, cardWidth, cardSize / 2, 0xffffff, 1);
  //     const card = this.add.rectangle(x, y, cardWidth, cardHeight, 0xffffff, 1);

  //     card.setInteractive();
  //     card.on("pointerdown", () => {
  //       localStorage.setItem("girlKey", girl.key);
  //       localStorage.setItem("greetings", girl.greetings);
  //       this.startGame();
  //     });

  //     // Партиклы для эффекта при наведении
  //     const emitter = this.add.particles(0, 0, "flare", {
  //       speed: 24,
  //       lifespan: 1500,
  //       quantity: 5,
  //       scale: { start: 0.4, end: 0 },
  //       emitting: false,
  //       emitZone: { type: "edge", source: card.getBounds(), quantity: 42 },
  //       duration: 200,
  //     });

  //     card.on("pointerover", () => {
  //       emitter.start();
  //     });

  //     const text = this.add
  //       .text(x, y, `${girl.name}`, {
  //         color: "#ea4386",
  //         fontSize: 18,
  //       })
  //       .setOrigin(0.5);

  //     this.cards.push(card);
  //   });
  // }
  create() {
    this.add.shader(
      "backgroundShader",
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      this.cameras.main.width,
      this.cameras.main.height,
      { time: 0 }
    );

    const screenWidth = window.innerWidth;
    const SMALL_VIEWPORT = 440;
    const isSmallScreen = screenWidth <= SMALL_VIEWPORT;
    console.log(screenWidth);

    const centerX = this.cameras.main.width / 2;
    const startY = 120;
    const startY2 = isSmallScreen ? 40 : 60;
    const cardSize = 150;
    const cardWidth = isSmallScreen ? 110 : 150;
    const cardHeight = isSmallScreen ? 50 : 75;
    const spacing = 15;

    this.cards = [];

    // Создаем перемешанную копию массива
    const shuffledGirls = this.shuffleArray([...GIRLS]);

    shuffledGirls.forEach((girl, index) => {
      const column = index % 2;
      const row = Math.floor(index / 2);

      // Финальная позиция
      const targetX = column === 0 ? centerX - (cardWidth + spacing) / 2 : centerX + (cardWidth + spacing) / 2;
      const targetY = startY2 + row * (cardWidth / 2 + spacing);

      // Начальная позиция за пределами экрана
      const startXDefault = isSmallScreen ? 300 : 500;
      const startYDefault = isSmallScreen ? 300 : 200;

      const startX = targetX + (column === 0 ? -startXDefault : startXDefault);
      const startY = targetY + Phaser.Math.Between(-startYDefault, startYDefault);

      // Создаем невидимую карточку
      const card = this.add.rectangle(startX, startY, cardWidth, cardHeight, 0xffffff, 1);
      card.setAlpha(0);
      card.setScale(0.5);
      card.angle = Phaser.Math.Between(-105, 15);

      // Настройка твинов
      this.tweens.add({
        targets: card,
        x: targetX,
        y: targetY,
        alpha: 1,
        scale: 1,
        angle: 0,
        ease: "Sine.easeOut",
        duration: 800,
        delay: index * 150, // Задержка между анимациями
        onStart: () => {
          // Включаем интерактивность после старта анимации
          card.setInteractive();
          card.on("pointerdown", () => {
            localStorage.setItem("girlKey", girl.key);
            localStorage.setItem("greetings", girl.greetings);
            // this.startGame();
            this.cameras.main.fadeOut(1000);
            this.time.delayedCall(1000, () => {
              this.startGame();
            });
          });

          // Добавляем текст после начала анимации
          const text = this.add
            .text(targetX, targetY, `${girl.name}`, {
              color: "#ea4386",
              fontSize: "18px",
            })
            .setOrigin(0.5)
            .setAlpha(0);

          this.tweens.add({
            targets: text,
            alpha: 1,
            duration: 400,
            ease: "Quad.easeOut",
            delay: 1000,
          });
        },
      });

      const x = column === 0 ? centerX - (cardSize + spacing) / 2 : centerX + (cardSize + spacing) / 2;
      const y = startY + row * (cardSize / 2 + spacing);

      // Партиклы с задержкой
      this.time.delayedCall(index * 150 + 1400, () => {
        const emitter = this.add.particles(0, 0, "flare", {
          speed: 24,
          lifespan: 1500,
          quantity: 5,
          scale: { start: 0.4, end: 0 },
          emitting: false,
          emitZone: { type: "edge", source: card.getBounds(), quantity: 42 },
          duration: 200,
        });

        card.on("pointerover", () => emitter.start());
      });

      this.cards.push(card);
    });
  }

  // Функция для перемешивания массива
  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  startGame = () => {
    this.scene.start("Game");
  };
}
