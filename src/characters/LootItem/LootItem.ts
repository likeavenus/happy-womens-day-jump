// Класс базового лута
class LootItem extends Phaser.Physics.Matter.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame: string) {
    super(scene.matter.world, x, y, texture, frame);
    this.setDepth(50);
    this.setSensor(true);
    this.setStatic(true);
    scene.add.existing(this);
  }
}

// Класс монетки
export class Coin extends LootItem {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "items", "coin");
    this.play("coin_rotate");
  }
}

// Класс цветка
export class Flower extends LootItem {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "items", "flower");
    // this.play("flower_bloom");
  }
}

// // В основном классе Game:
// export default class Game extends Phaser.Scene {
//   private coinsChanged!: Phaser.GameObjects.Group;
//   private score: number = 0;
//   private scoreText!: Phaser.GameObjects.Text;

//   preload() {
//     this.load.atlas("items", "assets/items.png", "assets/items.json");
//   }

//   create() {
//     // Группа для текстовых эффектов
//     this.coinsChanged = this.add.group();

//     // Текст счета
//     this.scoreText = this.add
//       .text(16, 16, "Score: 0", {
//         fontSize: "24px",
//         color: "#fff",
//         fontFamily: "Arial",
//       })
//       .setScrollFactor(0);

//     // Анимации
//     this.anims.create({
//       key: "coin_rotate",
//       frames: this.anims.generateFrameNames("items", {
//         prefix: "coin_",
//         start: 1,
//         end: 4,
//         zeroPad: 0,
//       }),
//       frameRate: 8,
//       repeat: -1,
//     });

//     this.anims.create({
//       key: "flower_bloom",
//       frames: this.anims.generateFrameNames("items", {
//         prefix: "flower_",
//         start: 1,
//         end: 3,
//         zeroPad: 0,
//       }),
//       frameRate: 6,
//       repeat: -1,
//     });

//     // Создание лута на платформах
//     this.platforms.children.each((platform) => {
//       if (Phaser.Math.Between(1, 100) > 70) {
//         // 30% шанс спавна
//         const isFlower = Phaser.Math.Between(1, 100) > 90; // 10% шанс цветка
//         const x = platform.x + Phaser.Math.Between(-50, 50);
//         const y = platform.y - 50;

//         if (isFlower) {
//           new Flower(this, x, y);
//         } else {
//           new Coin(this, x, y);
//         }
//       }
//       return true;
//     });

//     // Коллизии
//     this.matter.world.on("collisionstart", (event: MatterJS.ICollisionEvent) => {
//       event.pairs.forEach((pair) => {
//         const bodies = [pair.bodyA, pair.bodyB];
//         bodies.forEach((body) => {
//           if (body.gameObject instanceof LootItem) {
//             this.collectItem(body.gameObject);
//           }
//         });
//       });
//     });
//   }

//   private collectItem(item: LootItem): void {
//     let value = 1;
//     let text = "+1";

//     if (item instanceof Flower) {
//       value = 5;
//       text = "+5 🌸";
//     }

//     this.score += value;
//     this.scoreText.setText(`Score: ${this.score}`);
//     this.createFloatingText(item.x, item.y, text);
//     item.destroy();
//   }

//   private createFloatingText(x: number, y: number, text: string): void {
//     const floatingText = this.add.text(x, y, text, {
//       fontSize: "20px",
//       color: item instanceof Coin ? "#FFD700" : "#FF69B4",
//       fontStyle: "bold",
//     });

//     this.coinsChanged.add(floatingText);

//     this.tweens.add({
//       targets: floatingText,
//       y: y - 50,
//       alpha: 0,
//       duration: 1000,
//       ease: "Power2",
//       onComplete: () => floatingText.destroy(),
//     });
//   }
// }
