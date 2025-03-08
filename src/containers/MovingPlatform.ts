import Phaser from "phaser";
import { COLLISION_CATEGORIES } from "../scenes/constants";

export default class MovingPlatform extends Phaser.Physics.Matter.Image {
  startY = 0;
  startX = 0;
  private verticalTween: Phaser.Tweens.Tween | null = null;
  private horizontalTween: Phaser.Tweens.Tween | null = null;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, options) {
    super(scene.matter.world, x, y, texture, options);
    this.startX = x;
    this.startY = y;
    this.setStatic(true);
    this.setDepth(7);
    this.setFixedRotation();
    this.setFriction(1, 0, Infinity);
    this.setIgnoreGravity(true);
    this.setData("label", "platform");

    this.setCollisionCategory(COLLISION_CATEGORIES.Platform);

    this.setCollidesWith(COLLISION_CATEGORIES.Player);

    this.scene.add.existing(this);
  }

  moveVertically(duration: number) {
    this.scene.tweens.addCounter({
      from: 0,
      to: -900,
      duration: duration,
      ease: Phaser.Math.Easing.Sine.InOut,
      repeat: -1,
      yoyo: true,
      onUpdate: (tween, target) => {
        const y = this.startY + target.value;
        const dy = y - this.y;
        this.y = y;
        this.setVelocityY(dy);
      },
    });
  }
  moveHorizontally(duration: number, to: number) {
    this.horizontalTween = this.scene.tweens.addCounter({
      from: 0,
      to: to - this.startX,
      duration,
      ease: Phaser.Math.Easing.Sine.InOut,
      repeat: -1,
      yoyo: true,
      onUpdate: (tween, { value }) => {
        if (!this.scene || !this.body) return; // Проверка на существование
        const x = this.startX + value;
        this.setPosition(x, this.y);
      },
      onComplete: () => {
        this.horizontalTween = null; // Очистка ссылки на Tween
      },
    });
  }

  destroy() {
    // Останавливаем анимации перед удалением объекта
    if (this.verticalTween) {
      this.verticalTween.stop();
      this.verticalTween = null;
    }
    if (this.horizontalTween) {
      this.horizontalTween.stop();
      this.horizontalTween = null;
    }

    // Вызываем родительский метод destroy
    super.destroy();
  }
  // moveHorizontally(duration: number, to: number) {
  //   this.scene.tweens.addCounter({
  //     from: 0,
  //     to: to - this.startX,
  //     duration,
  //     ease: Phaser.Math.Easing.Sine.InOut,
  //     repeat: -1,
  //     yoyo: true,
  //     onUpdate: (tween, { value }) => {
  //       if (this && this?.y) {
  //         const x = this.startX + value;
  //         console.log(this);
  //         this.setPosition(x, this.y); // Используйте setPosition вместо прямого присваивания
  //       }
  //     },

  //   });
  // }

  // moveHorizontally(duration: number, to: number) {
  //   this.scene.tweens.addCounter({
  //     from: this.x,
  //     to: to,
  //     duration: duration,
  //     ease: Phaser.Math.Easing.Sine.InOut,
  //     repeat: -1,
  //     yoyo: true,
  //     onUpdate: (tween, target) => {
  //       const x = this.startX + target.value;
  //       const dx = x - this.x;
  //       this.x = x;
  //       this.setVelocityX(dx);
  //     },
  //   });
  // }
}
