export class Petal extends Phaser.Physics.Matter.Sprite {
  private lifeTimer!: Phaser.Time.TimerEvent;
  private rotationTween!: Phaser.Tweens.Tween; // Добавляем ссылку на
  constructor(scene: Phaser.Scene) {
    const camera = scene.cameras.main;
    const x = camera.scrollX + Phaser.Math.Between(-50, 50);
    const y = camera.scrollY - camera.height - Phaser.Math.Between(-400, -500);

    super(scene.matter.world, x, y, "petal");

    // Настройка физического тела
    this.setBody(
      {
        type: "rectangle",
        width: 10,
        height: 10,
      },
      {
        isSensor: true,
        label: "petal",
      }
    );

    this.setScale(2);

    this.setIgnoreGravity(true)
      .setDepth(1000)
      .setRotation(Phaser.Math.DegToRad(Phaser.Math.Between(0, 360)))
      .setAlpha(0.8)
      .setTint(0xd08cbb);

    this.anims.play("petal");

    scene.add.existing(this);

    // Запускаем движение
    this.startMovement();

    this.lifeTimer = this.scene.time.delayedCall(5000, () => this.destroyPetal());
  }

  private startMovement() {
    const speedX = Phaser.Math.Between(-3, 3);
    const speedY = Phaser.Math.Between(2, 5);
    this.setVelocity(speedX, speedY);

    // Сохраняем ссылку на твин
    this.rotationTween = this.scene.tweens.add({
      targets: this,
      angle: this.angle + 360 * (Phaser.Math.Between(0, 1) ? 1 : -1),
      duration: Phaser.Math.Between(3000, 5000),
      repeat: -1,
    });
  }
  //   private startMovement() {
  //     // Движение вниз с небольшими отклонениями
  //     const speedX = Phaser.Math.Between(1, 5);
  //     const speedY = Phaser.Math.Between(5, 10);
  //     this.setVelocity(speedX, speedY);

  //     // Вращение
  //     this.scene.tweens.add({
  //       targets: this,
  //       angle: this.angle + 360 * (Phaser.Math.Between(0, 1) ? 1 : -1),
  //       duration: Phaser.Math.Between(5000, 5000),
  //       repeat: -1,
  //     });

  //     // this.scene.time.delayedCall(5000, this.destroy);
  //   }
  destroy(fromScene?: boolean): void {
    // Гарантированная очистка ресурсов
    if (this.rotationTween) {
      this.rotationTween.stop();
      this.rotationTween.remove();
    }

    if (this.lifeTimer) {
      this.lifeTimer.destroy();
    }

    super.destroy(fromScene);
  }
  //   update() {
  //     // Уничтожаем при выходе за нижнюю границу камеры
  //     const camera = this.scene.cameras.main;
  //     if (this.y < camera.scrollY) {
  //       this.destroy();
  //     }
  //   }

  private destroyPetal() {
    // Останавливаем все анимации перед уничтожением
    if (this.rotationTween) {
      this.rotationTween.stop();
      this.rotationTween.remove();
    }

    this.scene.tweens.add({
      targets: this,
      alpha: 0,
      scaleX: 0,
      scaleY: 0,
      duration: 500,
      onComplete: () => {
        this.setVisible(false).setActive(false).body.enable = false;

        // Явно удаляем объект из группы
        this.destroy(true); // Теперь безопасно
      },
    });
  }
  //   destroy() {
  //     // this.scene.tweens.killTweensOf(this);
  //     this.alpha = 0;
  //     super.destroy(true);
  //   }
}

export class PetalGenerator {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.scene.time.addEvent({
      delay: 200,
      callback: () => new Petal(this.scene),
      loop: true,
    });
  }
}
// export class Petal extends Phaser.Physics.Matter.Sprite {
//   private lifeTimer!: Phaser.Time.TimerEvent;

//   constructor(scene: Phaser.Scene, x: number, y: number) {
//     super(scene.matter.world, x, y, "petal");

//     // Инициализация физического тела
//     const body = this.scene.matter.add.rectangle(0, 0, 10, 10, {
//       isSensor: true,
//       label: "petal",
//     });
//     this.setExistingBody(body);

//     // Базовые настройки
//     this.setScale(2).setAlpha(0).setIgnoreGravity(true).setDepth(1000).setVisible(false).setActive(false);
//     this.anims.play("petal");
//     scene.add.existing(this);
//   }

//   spawn(x: number, y: number) {
//     console.log("spawn");

//     // Активация и анимация появления
//     this.setPosition(x, y)
//       .setVisible(true)
//       .setActive(true)
//       .setAlpha(1)
//       .setRotation(Phaser.Math.DegToRad(Phaser.Math.Between(0, 360)));

//     // Анимация масштабирования
//     // this.scene.tweens.add({
//     //   targets: this,
//     //   scaleX: 0.5,
//     //   scaleY: 0.5,
//     //   duration: 500,
//     //   ease: "Back.out",
//     // });

//     // Запуск движения
//     this.startMovement();

//     // Таймер самоуничтожения
//     this.lifeTimer = this.scene.time.delayedCall(5000, () => this.destroyPetal());
//   }

//   private startMovement() {
//     // Движение вниз с небольшими отклонениями
//     const speedX = Phaser.Math.Between(1, 5);
//     const speedY = Phaser.Math.Between(5, 10);
//     this.setVelocity(speedX, speedY);

//     // Вращение
//     this.scene.tweens.add({
//       targets: this,
//       angle: this.angle + 360 * (Phaser.Math.Between(0, 1) ? 1 : -1),
//       duration: Phaser.Math.Between(5000, 5000),
//       repeat: -1,
//     });

//     // this.scene.time.delayedCall(5000, this.destroy);
//   }
//   //   private startMovement() {
//   //     // Логика движения (как в предыдущей версии)
//   //     const speedX = Phaser.Math.Between(-3, 3);
//   //     const speedY = Phaser.Math.Between(2, 5);
//   //     this.setVelocity(speedX, speedY);

//   //     // Анимация вращения
//   //     this.scene.tweens.add({
//   //       targets: this,
//   //       angle: this.angle + 360 * (Phaser.Math.Between(0, 1) ? 1 : -1),
//   //       duration: Phaser.Math.Between(3000, 5000),
//   //       repeat: -1,
//   //     });
//   //   }

//   private destroyPetal() {
//     console.log("destroyPetal");
//     this.destroy(true);

//     // Анимация исчезновения
//     // this.scene.tweens.add({
//     //   targets: this,
//     //   alpha: 0,
//     //   scaleX: 0,
//     //   scaleY: 0,
//     //   duration: 500,
//     //   onComplete: () => {
//     //     this.setVisible(false).setActive(false).body.enable = false;
//     //   },
//     // });
//   }
// }

// export class PetalGenerator {
//   private petals: Phaser.GameObjects.Group;
//   private spawnTimer: Phaser.Time.TimerEvent;

//   constructor(scene: Phaser.Scene) {
//     this.petals = scene.add.group({
//       classType: Petal,
//       maxSize: 50,
//       runChildUpdate: true,
//       createCallback: (petal) => {
//         const p = petal as Petal;
//         p.body.enable = false;
//       },
//     });

//     this.spawnTimer = scene.time.addEvent({
//       delay: 300,
//       callback: this.spawnPetal,
//       callbackScope: this,
//       loop: true,
//     });
//   }

//   private spawnPetal() {
//     const camera = this.petals.scene.cameras.main;
//     const x = camera.scrollX + Phaser.Math.Between(-50, 50);
//     const y = camera.scrollY - camera.height - Phaser.Math.Between(0, 100);

//     const petal = this.petals.get(x, y) as Petal;
//     if (petal) {
//       petal.body.enable = true;
//       petal.spawn(x, y);
//     }
//   }

//   stop() {
//     this.spawnTimer.destroy();
//     this.petals.clear(true, true);
//   }
// }
