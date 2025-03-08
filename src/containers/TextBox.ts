// import Phaser from "phaser";

// export class TextBox extends Phaser.GameObjects.Container {
//   private rectangle: Phaser.GameObjects.Rectangle;
//   private text: Phaser.GameObjects.Text;
//   paper!: Phaser.GameObjects.Image;

//   constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, text: string) {
//     super(scene, x, y);

//     const screenWidth = scene.cameras.main.width;
//     const screenHeight = scene.cameras.main.height;
//     // this.paper = this.scene.add.image(x, y, "paper");
//     this.paper = new Phaser.GameObjects.Image(scene, 0, 0, "paper");
//     // this.paper.setScale(1, 0.5);
//     this.add(this.paper);

//     // Создание белого прямоугольника
//     // this.rectangle = new Phaser.GameObjects.Rectangle(
//     //   scene,
//     //   0,
//     //   0,
//     //   width,
//     //   height,
//     //   0xffffff
//     // );
//     // this.rectangle.setStrokeStyle(2, 0x000000);
//     // this.add(this.rectangle);
//     this.setSize(width, height);

//     // Создание текста с отступом от границ прямоугольника
//     this.text = new Phaser.GameObjects.Text(scene, this.x, this.y, text, {
//       color: "#000000",
//       wordWrap: { width: width + 32 },
//       fontSize: 24,
//     });
//     this.add(this.text);

//     // Расположение текста в центре прямоугольника
//     this.text.setPosition(this.width / 2 - width - 10, this.height / 2 - this.height + 36);

//     this.setDepth(100);
//     this.setScrollFactor(0);
//     this.alpha = 0;

//     scene.add.existing(this);
//   }
// }
import Phaser from "phaser";

export class TextBox extends Phaser.GameObjects.Container {
  private rectangle: Phaser.GameObjects.Rectangle;
  private text: Phaser.GameObjects.Text;
  private button: Phaser.GameObjects.Text;
  paper!: Phaser.GameObjects.Image;

  constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, text: string) {
    super(scene, x, y);
    this.scene = scene;

    const screenWidth = scene.cameras.main.width;
    const screenHeight = scene.cameras.main.height;

    this.paper = new Phaser.GameObjects.Image(scene, 0, 0, "paper");
    this.add(this.paper);

    this.setSize(width, height);

    this.text = new Phaser.GameObjects.Text(scene, this.x, this.y, text, {
      color: "#000000",
      wordWrap: { width: width + 32 },
      fontSize: 24,
    });
    this.add(this.text);

    this.text.setPosition(this.width / 2 - width - 10, this.height / 2 - this.height + 36);

    this.setDepth(100);
    this.setScrollFactor(0);
    this.alpha = 0;
    // this.setInteractive().on("pointerdown", () => this.hideTextBox());
    scene.add.existing(this);

    // // Создание кнопки
    // this.button = new Phaser.GameObjects.Text(scene, 0, height / 2 - 20, "Продолжить", {
    //   fontSize: "20px",
    //   fill: "#ffffff",
    //   backgroundColor: "#007bff",
    //   padding: { x: 10, y: 5 },
    //   align: "center",
    // })
    //   .setInteractive()
    //   .setDepth(100);
    // this.button.on("pointerdown", () => this.hideTextBox());

    // this.add(this.button);

    // // Начальная позиция кнопки — за пределами контейнера текста
    // this.button.setPosition(0, this.height / 2 + 20);

    // // Запуск анимации появления кнопки
    // scene.tweens.add({
    //   targets: this.button,
    //   y: this.height / 2 - 50, // Позиция внизу контейнера
    //   alpha: 1,
    //   ease: "Power1",
    //   duration: 1000,
    // });
  }

  // Функция скрытия TextBox и продолжения игры
  hideTextBox() {
    this.destroy();
  }
}
// import Phaser from "phaser";

// export class TextBox extends Phaser.GameObjects.Container {
//   private rectangle: Phaser.GameObjects.Rectangle;
//   private text: Phaser.GameObjects.Text;
//   private button: Phaser.GameObjects.Text;
//   paper!: Phaser.GameObjects.Image;

//   constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, text: string) {
//     super(scene, x, y);

//     const screenWidth = scene.cameras.main.width;
//     const screenHeight = scene.cameras.main.height;

//     this.paper = new Phaser.GameObjects.Image(scene, 0, 0, "paper");
//     this.add(this.paper);

//     this.setSize(width, height);

//     this.text = new Phaser.GameObjects.Text(scene, this.x, this.y, text, {
//       color: "#000000",
//       wordWrap: { width: width + 32 },
//       fontSize: 24,
//     });
//     this.add(this.text);

//     this.text.setPosition(this.width / 2 - width - 10, this.height / 2 - this.height + 36);

//     this.setDepth(100);
//     this.setScrollFactor(0);
//     this.alpha = 0;

//     this.setInteractive({ useHandCursor: true })
//     .on("pointerdown", () => this.hideTextBox());

//     scene.add.existing(this);

//     // Создание кнопки
//     // this.button = new Phaser.GameObjects.Text(scene, width / 2, height / 2 + 20, "Продолжить", {
//     //   fontSize: "20px",
//     //   fill: "#ffffff",
//     //   backgroundColor: "#007bff",
//     //   padding: { x: 10, y: 5 },
//     //   align: "center",
//     // });

//     // this.add(this.button);

//     // Запуск анимации появления кнопки
//     // scene.tweens.add({
//     //   targets: this.button,
//     //   alpha: 1,
//     //   ease: "Power1",
//     //   duration: 1000,
//     // });
//   }

//   // Функция скрытия TextBox и продолжения игры
//   hideTextBox() {
//     console.log();

//     this.scene.tweens.add({
//       targets: this,
//       alpha: 0,
//       duration: 500,
//       onComplete: () => {
//         this.destroy(); // Удаляем TextBox после завершения анимации
//       },
//     });
//   }
// }
