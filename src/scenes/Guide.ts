// import Phaser from "phaser";

// export default class Guide extends Phaser.Scene {
//   constructor() {
//     super({ key: "Guide" });
//   }

//   create() {
//     const { width, height } = this.cameras.main;
//     const centerX = width / 2;
//     const panelHeight = height * 0.4; // Высота нижней панели

//     // Фон
//     this.add.rectangle(0, 0, width, height, 0xffe4e1).setOrigin(0);

//     // Основной текст (верхняя часть экрана)
//     const mainText = this.add
//       .text(
//         centerX,
//         20,
//         `Привет, посланница весны!\n\n` +
//           `Эта игра создана специально для самых прелестных леди на свете. Правила её предельно просты:\n` +
//           `выбирай персонажа, прыгай-крутись влево и вправо\n` +
//           `главное в стекло не попади, собирай монетки и цветы,\n` +
//           `остерегайся жутких летучих мышей.\n\n` +
//           `Собери минимум 50 монет, чтобы приблизить наступление тепла!\n` +
//           `А дальше всё поймешь ;)\n\n` +
//           `Успехов, принцесса!\n\n` +
//           `С любовью и обожанием, Твой Вожак🌷🐺`,
//         {
//           font: "18px Arial",
//           color: "#8b4513",
//           align: "center",
//           wordWrap: { width: width - 40 },
//         }
//       )
//       .setOrigin(0.5, 0);

//     // Рассчитываем позицию для нижней панели
//     const panelY = mainText.y + mainText.height + 20;

//     // Разделительная линия
//     this.add.rectangle(centerX, panelY, 2, panelHeight, 0xffffff).setOrigin(0.5, 0);

//     // Левая панель
//     const leftPanel = this.add
//       .rectangle(0, panelY, centerX, panelHeight, 0x000000, 0)
//       .setOrigin(0, 0)
//       .setInteractive()
//       .on("pointerdown", () => this.startGame());

//     this.add
//       .text(centerX / 2, panelY + panelHeight / 2, "Жми на левую сторону экрана\nчто бы лететь влево ◀", {
//         font: "20px Arial",
//         color: "#2f4f4f",
//         align: "center",
//         wordWrap: { width: centerX - 40 },
//       })
//       .setOrigin(0.5);

//     // Правая панель
//     const rightPanel = this.add
//       .rectangle(centerX, panelY, centerX, panelHeight, 0x000000, 0)
//       .setOrigin(0, 0)
//       .setInteractive()
//       .on("pointerdown", () => this.startGame());

//     this.add
//       .text(centerX * 1.5, panelY + panelHeight / 2, "Жми на правую сторону экрана\nчто бы лететь вправо ▶", {
//         font: "20px Arial",
//         color: "#2f4f4f",
//         align: "center",
//         wordWrap: { width: centerX - 40 },
//       })
//       .setOrigin(0.5);

//     // Анимация
//     this.tweens.add({
//       targets: [mainText, leftPanel, rightPanel],
//       alpha: { from: 0, to: 1 },
//       y: { from: -height, to: mainText.y, value: mainText.y },
//       duration: 800,
//       ease: "Power2",
//     });
//   }

//   private startGame() {
//     this.cameras.main.fadeOut(1000);
//     this.time.delayedCall(1100, () => {
//       this.scene.start("Game");
//     });
//   }
// }
import Phaser from "phaser";

export default class Guide extends Phaser.Scene {
  private startButton!: Phaser.GameObjects.Rectangle;
  private buttonText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: "Guide" });
  }

  create() {
    const { width, height } = this.cameras.main;
    const centerX = width / 2;

    const mainText = this.add
      .text(
        centerX,
        20,
        `Привет, посланница весны!\n\n` +
          `Эта игра создана специально для самых прелестных леди на свете. Правила её предельно просты:\n` +
          `выбирай персонажа, прыгай-крутись влево и вправо\n` +
          `г̶л̶а̶в̶н̶о̶е̶ ̶в̶ ̶с̶т̶е̶к̶л̶о̶ ̶н̶е̶ ̶п̶о̶п̶а̶д̶и̶, собирай монетки и цветы,\n` +
          `остерегайся жутких летучих мышей.\n\n` +
          `Собери минимум 50 монет, чтобы приблизить наступление тепла!\n` +
          `А дальше всё поймешь ;)\n\n` +
          `Успехов, принцесса!\n\n` +
          `С любовью и обожанием, Твой Вожак🌷🐺`,
        {
          font: "16px Arial",
          color: "#8b4513",
          align: "left",
          wordWrap: { width: width - 40 },
        }
      )
      .setOrigin(0.5, 0)
      .setDepth(10);

    const panelY = mainText.y + mainText.height - 40;
    const panelHeight = height * 0.4;

    const leftText = this.add
      .text(centerX / 2, panelY + panelHeight / 2 - 40, "Жми на левую сторону экрана\nчтобы лететь влево ◀", {
        font: "15px Arial",
        color: "#2f4f4f",
        align: "center",
        wordWrap: { width: centerX - 40 },
      })
      .setOrigin(0.5)
      .setDepth(10);

    const rightText = this.add
      .text(centerX * 1.5, panelY + panelHeight / 2 - 40, "Жми на правую сторону экрана\nчтобы лететь вправо ▶", {
        font: "15px Arial",
        color: "#2f4f4f",
        align: "center",
        wordWrap: { width: centerX - 40 },
      })
      .setOrigin(0.5)
      .setDepth(10);

    this.add
      .graphics({
        x: centerX * 1.5,
        y: panelY + panelHeight / 2 - 40,
        fillStyle: {
          color: 0x2f4f4f,
        },
      })
      .setDepth(10);

    // Анимация
    this.tweens.add({
      targets: [mainText],
      alpha: { from: 0, to: 1 },
      y: { from: -height, to: mainText.y, value: mainText.y },
      duration: 800,
      ease: "Power2",
    });

    // Фон
    this.add.rectangle(0, 0, width, height, 0xffe4e1).setOrigin(0);

    // Основной текст
    // const mainText = this.add
    //   .text(centerX, 20, `Привет, посланница весны!\n\n` + `Эта игра создана специально для самых прелестных леди на свете...`, {
    //     /* сохранение стилей из предыдущего кода */
    //   })
    //   .setOrigin(0.5, 0);

    // Создание кнопки
    this.createStartButton(width, height);
    console.log(this.cameras.main.worldView.x);

    // Анимация появления
    this.tweens.add({
      targets: [this.startButton, this.buttonText],
      //   y: height - 150,
      y: this.cameras.main.height - this.startButton.height * 3 + 30,
      duration: 800,
      ease: "Back.out",
    });
  }

  private createStartButton(width: number, height: number) {
    const buttonWidth = 300;
    const buttonHeight = 60;
    const buttonRadius = 15;
    const buttonColor = 0xff69b4; // Розовый цвет
    const hoverColor = 0xff1493; // Темнее розовый

    // Графическое тело кнопки
    this.startButton = this.add
      .rectangle(
        width / 2,
        height + 100, // Начальная позиция за экраном
        buttonWidth,
        buttonHeight,
        buttonColor
      )
      .setDepth(1)
      .setInteractive()
      .setOrigin(0.5)
      .on("pointerdown", () => this.startGame());

    // Текст кнопки
    this.buttonText = this.add
      .text(width / 2, height + 100, "Начать волшебство ✨", {
        font: "24px Arial",
        color: "#ffffff",
        align: "center",
        stroke: "#000000",
        strokeThickness: 2,
      })
      .setOrigin(0.5)
      .setDepth(2);

    // Эффект тени
    this.add.rectangle(width / 2, height + 100 + 5, buttonWidth, buttonHeight, 0x000000, 0.2).setOrigin(0.5);
  }

  private startGame() {
    // Анимация исчезновения
    this.tweens.add({
      targets: [this.startButton, this.buttonText],
      alpha: 0,
      duration: 500,
      ease: "Power2",
    });

    // Затемнение экрана и переход
    this.cameras.main.fadeOut(1000);
    this.time.delayedCall(1100, () => {
      this.scene.start("Menu");
      this.scene.stop();
    });
  }
}
