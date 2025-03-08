import Phaser from "phaser";
import { COLLISION_CATEGORIES } from "../../scenes/constants";

export class Bat extends Phaser.Physics.Matter.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene.matter.world, x, y, "bat", "bat0.png");
    this.setScale(1);
    this.setDepth(50);
    this.setIgnoreGravity(true);
    this.setCollisionCategory(COLLISION_CATEGORIES.Bat);
    this.setCollidesWith([COLLISION_CATEGORIES.Player]);
    this.setFixedRotation();
    scene.add.existing(this);

    // Добавляем анимацию полета
    scene.anims.create({
      key: "bat",
      frames: [
        { key: "bat", frame: "bat0.png" },
        { key: "bat", frame: "bat1.png" },
        { key: "bat", frame: "bat2.png" },
        { key: "bat", frame: "bat3.png" },
      ],
      frameRate: 8,
      repeat: -1,
    });

    this.play("bat");
  }

  //   startFlight(direction: number, speed: number) {
  //     const distance = 200; // сколькå пикселей летучая мышь должна летать влево-вправо

  //     // Настраиваем начальное направление
  //     this.flipX = direction > 0 ? false : true;

  //     // Создаём анимацию полёта с помощью tween
  //     this.scene.tweens.add({
  //       targets: this,
  //       x: `+=${direction * distance}`, // или x: `-=${distance}`, если direction отрицательный
  //       duration: (distance / speed) * 1000, // Скорость перемещения
  //       ease: "Sine.easeInOut", // Плавность анимации
  //       yoyo: true, // Возвращение
  //       repeat: -1, // Бесконечный повтор
  //       onYoyo: () => {
  //         // Необходимость смены направления
  //         this.flipX = !this.flipX;
  //       },
  //     });
  //   }
  startFlight(direction: number, speed: number) {
    this.flipX = direction > 0 ? false : true;

    this.setVelocityX(direction * speed);
  }
}
