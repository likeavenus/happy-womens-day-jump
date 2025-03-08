import Phaser from "phaser";
import { createAnims, createKseniaAnims } from "./anims";
import { COLLISION_CATEGORIES } from "../../scenes/constants";
import { startCoords } from "../../scenes/Game";

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export default class Girl extends Phaser.Physics.Matter.Sprite {
  private direction = Direction.RIGHT;
  public hp = 100;
  isTouchingGround = false;
  text!: Phaser.GameObjects.Text;
  girlSpriteKey: string = "";

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, name: string, frame?: string | number) {
    super(scene.matter.world, x, y, texture, frame, {
      label: "girl",
      frictionAir: 0.006,
    });

    this.setData("label", "girl");

    this.flipX = true;

    this.name = name;
    this.text = this.scene.add
      .text(this.x, this.y - 20, this.name, {
        color: "#3807c4",
        fontFamily: "Arial",
        fontStyle: "bold",
        fontSize: 22,
        align: "center",
      })
      .setOrigin(0.5, 0.5);
    this.text.setDepth(11).setAlpha(0);

    const textFx = this.text.postFX.addGlow(0xffffff, 6, 0, false, 0.1, 24);
    this.setRectangle(27, 45);
    this.setOrigin(0.5, 0.55);

    this.girlSpriteKey = localStorage.getItem("girlKey");
    // console.log(this.girlSpriteKey);

    this.setScale(2);
    this.setFixedRotation();
    this.setDepth(20);
    this.label = "girl";
    this.scene.add.existing(this);
    // createKseniaAnims(this.scene.anims);
    createAnims(this.scene.anims);
    // this.anims.play(`${this.girlSpriteKey}_idle`);

    this.emitter = this.scene.add.particles(0, 0, "flare", {
      speed: 24,
      lifespan: 1500,
      quantity: 10,
      scale: { start: 0.4, end: 0 },
      emitting: false,
      emitZone: { type: "edge", source: this.getBounds(), quantity: 42 },
      duration: 500,
    });

    this.emitter.setDepth(7);

    this.setOnCollide((data: MatterJS.ICollisionPair) => {
      this.isTouchingGround = true;
      // console.log(this.isTouchingGround);

      this.emitter.setPosition(this.x, this.y + this.height / 2);
      this.emitter.start();
    });

    // const timer = this.scene.time.addEvent({
    //   delay: 1500, // ms
    //   callback: () => {
    //     this.text.alpha = 0;
    //   },
    // });

    // emitter.start(2000);
    this.setCollisionCategory(COLLISION_CATEGORIES.Player);

    // Установка коллизий с платформами
    // Настроим так, чтобы lizard взаимодействовал с платформами, но не сталкивался снизу
    this.setCollidesWith([COLLISION_CATEGORIES.Disabled, COLLISION_CATEGORIES.Coin, COLLISION_CATEGORIES.Bat, COLLISION_CATEGORIES.Flower]); // будет коллизироваться с платформами
    this.setName("girl");
  }
  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
    const { left, right, up, down, space } = cursors;
    const speed = 4;
    this.emitter.copyPosition(this.x, this.y);
    if (this.body!.velocity.y < 0) {
      this.anims.play(`${this.girlSpriteKey}_jump`, true);
      if (right.isDown) {
        this.setVelocityX(speed);
        this.flipX = true;
      } else if (left.isDown) {
        this.setVelocityX(-speed);
        this.flipX = false;
      }
    } else if (this.body!.velocity.y > 0) {
      this.anims.play(`${this.girlSpriteKey}_fall`, true);
      if (right.isDown) {
        this.setVelocityX(speed);
        this.flipX = true;
      } else if (left.isDown) {
        this.setVelocityX(-speed);
        this.flipX = false;
      }
    } else if (left.isDown) {
      this.setVelocityX(-speed);
      this.flipX = false;
      this.anims.play(`${this.girlSpriteKey}_run`, true);
    } else if (right.isDown) {
      this.setVelocityX(speed);
      this.flipX = true;
      this.anims.play(`${this.girlSpriteKey}_run`, true);
    } else {
      // this.anims.play(`${this.girlSpriteKey}_idle`, true);
    }

    const jumpSpeed = 15;

    // if (Phaser.Input.Keyboard.JustDown(up) && this.isTouchingGround) {
    //   this.setVelocityY(-jumpSpeed);
    //   this.isTouchingGround = false;
    // }

    this.text.copyPosition({
      x: this.x,
      y: this.y - 60,
    });

    if (this.y > 3000) {
      // this.y = 1800;
      this.setPosition(startCoords.x, this.scene.firstPlatformY - 200);
      this.setVelocityY(-10);
    }
  }
}
//   update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
//     const { left, right, up, down, space } = cursors;
//     const speed = 4;
//     this.emitter.copyPosition(this.x, this.y);
//     if (this.body!.velocity.y < 0) {
//       this.anims.play(`${this.girlSpriteKey}_jump`, true);
//       if (right.isDown) {
//         this.setVelocityX(speed);
//         this.flipX = true;
//       } else if (left.isDown) {
//         this.setVelocityX(-speed);
//         this.flipX = false;
//       }
//     } else if (this.body!.velocity.y > 0) {
//       this.anims.play(`${this.girlSpriteKey}_down`, true);
//       if (right.isDown) {
//         this.setVelocityX(speed);
//         this.flipX = true;
//       } else if (left.isDown) {
//         this.setVelocityX(-speed);
//         this.flipX = false;
//       }
//     } else if (left.isDown) {
//       this.setVelocityX(-speed);
//       this.flipX = false;
//       this.anims.play(`${this.girlSpriteKey}_run`, true);
//     } else if (right.isDown) {
//       this.setVelocityX(speed);
//       this.flipX = true;
//       this.anims.play(`${this.girlSpriteKey}_run`, true);
//     } else {
//       this.anims.play(`${this.girlSpriteKey}_idle`, true);
//     }

//     const jumpSpeed = 15;

//     if (Phaser.Input.Keyboard.JustDown(up) && this.isTouchingGround) {
//       this.setVelocityY(-jumpSpeed);
//       this.isTouchingGround = false;
//     }

//     this.text.copyPosition({
//       x: this.x,
//       y: this.y - 60,
//     });

//     if (this.y > 3000) {
//       // this.y = 1800;
//       this.setPosition(startCoords.x, this.scene.firstPlatformY - 200);
//       this.setVelocityY(-10);
//     }
//   }
// }
