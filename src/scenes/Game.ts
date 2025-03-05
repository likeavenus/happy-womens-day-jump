import Phaser from "phaser";
import Preloader from "./Preload";

import Menu from "./Menu";

import Girl from "../characters/girl/girl";
import MovingPlatform from "../containers/MovingPlatform";
import { TextBox } from "../containers/TextBox";
import Chest from "../characters/chest/chest";
import Intro from "./Intro";

const MIN = Phaser.Math.DegToRad(-180);

class Game extends Phaser.Scene {
  hook!: Phaser.Physics.Matter.Image;
  lineGroup!: Phaser.Physics.Matter.Image[];
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  stars!: Phaser.Physics.Arcade.Group;
  platform!: MovingPlatform;
  platform2!: MovingPlatform;
  platform3!: MovingPlatform;

  private originalWidth: number;
  private originalHeight: number;

  private platforms!: Phaser.GameObjects.Group;
  private maxPlatforms: number = 10; // Максимальное количество платформ на экране
  private platformDistance: number = 400; // Расстояние между платформами
  private lastPlatformY: number = 0; // Y-координата последней платформы созданной

  chest!: Chest;
  starsSummary = 0;
  lizard!: Phaser.Physics.Matter.Sprite;
  isTouchingGround = false;
  level: number = 1;
  loadNextLevel: boolean = false;
  showDialog: boolean = false;
  dialog: any;
  fish!: Phaser.Physics.Matter.Image;
  dialogLevel: number = 0;
  emitter = new Phaser.Events.EventEmitter();
  water!: Phaser.Physics.Matter.Image;
  stick!: Phaser.Physics.Matter.Sprite;
  music!: Phaser.Sound.NoAudioSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;

  private backgrounds: {
    ratioX: number;
    ratioY: number;

    sprite: Phaser.GameObjects.TileSprite;
  }[] = [];
  private velocityX = 10;
  collisionCategory1 = 0b0001;
  collisionCategory2 = 0b0010;
  collisionCategory3 = 0b0100;
  collisionCategory4 = 0b1000;
  collisionWaterCategory = 0b0101;

  constructor() {
    super("Game");
  }
  preload() {
    this.cursors = this.input.keyboard!.createCursorKeys();
  }

  create() {
    this.originalWidth = this.scale.width;
    this.originalHeight = this.scale.height;
    // this.scale.on("resize", this.resize, this);
    // this.resize({ width: this.scale.width, height: this.scale.height });
    this.platforms = this.add.group();

    /** music */
    this.sound.pauseOnBlur = false;
    this.music = this.sound.add("music", {
      volume: 0.2,
      loop: true,
    });
    if (!this.sound.locked) {
      // already unlocked so play
      this.music.play();
    } else {
      // wait for 'unlocked' to fire and then play
      this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
        this.music.play();
      });
    }
    this.game.events.on(Phaser.Core.Events.BLUR, () => {
      console.log("blur event");

      // this.handleLoseFocus();
    });

    document.addEventListener("visibilitychange", () => {
      console.log("visibilitychange");

      if (!document.hidden) {
        return;
      }

      // this.handleLoseFocus();
    });
    /** music end */

    this.tweener = {
      x: MIN,
    };
    // createLizardAnims(this.anims);
    this.GROUND_COLLISION_GROUP = this.matter.world.nextCategory();

    const nameFromStorage = localStorage.getItem("happyName");
    const startCoords = {
      x: 550,
      y: 1945,
    };

    const testCoords = {
      x: 2400,
      y: 1300,
    };
    enum GirlsSpriteKeys {
      Ksenia = "ksenia",
      Elena = "elena",
    }
    const girlKey = localStorage.getItem("girlKey");

    this.lizard = new Girl(this, startCoords.x, startCoords.y, girlKey as string, nameFromStorage as string, {
      label: "girl",
    });

    this.createPlatform(this.scale.width / 2, this.scale.height - 100);

    this.matter.world.on("collisionstart", this.handleCollision, this);

    // Запуск генерации платформ
    this.time.addEvent({
      delay: 1000, // Интервал генерации новых платформ
      callback: this.generatePlatforms,
      callbackScope: this,
      loop: true,
    });

    this.platform = new MovingPlatform(this, this.lizard.x, this.lizard.y + 200, "platform", { label: "platform" }).setPipeline("Light2D");
    this.platform2 = new MovingPlatform(this, 3000, 1200, "platform", {}).setPipeline("Light2D");
    this.platform3 = new MovingPlatform(this, 4000, 1200, "platform", {}).setPipeline("Light2D");
    this.chest = new Chest(this, this.platform3.x + 30, this.platform3.y - 40, "chest");

    // this.platform.moveVertically(2200);
    this.platform2.moveHorizontally(2000, -700);
    // this.cameras.main.zoomTo(0.4);

    this.lizard.setCollisionCategory(this.collisionCategory1);
    this.lizard.setCollidesWith(this.collisionCategory1 | this.collisionCategory2 | this.collisionCategory4);

    this.input.on("pointerdown", (pointer) => {});

    const space = this.input.keyboard.addKey("space");

    space.on("down", () => {});

    this.matter.add.mouseSpring();

    this.cameras.main.startFollow(this.lizard);

    const { width, height } = this.scale;
    const darknessMask = this.add.graphics();
    darknessMask.fillStyle(0x000000, 1);

    this.backgrounds.push(
      {
        ratioX: 0.07,
        ratioY: 0.009,
        sprite: this.add.tileSprite(0, 0, width, height, "background_1").setOrigin(0, 0).setScrollFactor(0, 0).setScale(3.5, 4),
        // .setDepth(0),
      },
      {
        ratioX: 0.09,
        ratioY: 0.02,
        sprite: this.add.tileSprite(0, -120, width, height, "background_2").setOrigin(0, 0).setScrollFactor(0, 0).setScale(3.5, 4),
        // .setDepth(0),
      }
    );

    this.backgrounds.forEach((tileSprite) => {
      darknessMask.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
    });

    const debugLayer = this.add.graphics();

    this.matter.world.on("collisionend", (e, bodyA, bodyB) => {
      if (e.pairs.some((pair) => pair.bodyA.label == "water" && pair.bodyB.label == "hook")) {
        // this.rod.at(-2).inWater = false;
      }
    });

    this.matter.world.on("collisionstart", (e, bodyA, bodyB) => {
      if ((bodyA === this.lizard.body && bodyB === this.chest.body) || (bodyA === this.chest.body && bodyB === this.lizard.body)) {
        this.chest.openChest();
        let textBox;
        const greetings = localStorage.getItem("greetings") as string;
        if (!textBox) {
          let textBox = new TextBox(this, this.chest.x, this.chest.y - 200, 400, 260, greetings);

          this.tweens.add({
            targets: textBox,
            alpha: 1,
            ease: "Bounce", // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 1000,
            repeat: 0, // -1: infinity
            yoyo: false,
          });
        }
      }
    });

    this.emitter.on("lizard-dead", ({ x, y }: { x: number; y: number }) => {
      for (let i = 0; i < 20; i++) {
        this.stars.create(x, y, "star");
      }
    });

    this.lights.enable();

    this.lights.setAmbientColor(0x808080);

    this.events.on("resume", () => {});
    this.light = this.lights.addLight(this.lizard.x, this.lizard.y, 512).setIntensity(2);

    this.matter.world.update60Hz();

    this.cameras.main.setFollowOffset(-30, 80);
  }

  update(time: number, delta: number) {
    for (let i = 0; i < this.backgrounds.length; ++i) {
      const bg = this.backgrounds[i];
      if (bg.sprite) {
        bg.sprite.tilePositionX = this.cameras.main.scrollX * bg.ratioX;
      }
    }

    this.light.x = this.lizard.x;
    this.light.y = this.lizard.y;

    this.cleanPlatforms();
    this.checkPlayerHeight();

    const { left, right, up, space } = this.cursors;

    this.lizard.update(this.cursors);
  }

  private createPlatform(x: number, y: number) {
    const platform = new MovingPlatform(this, x, y, "platform", {});
    this.platforms.add(platform);
    this.lastPlatformY = y; // Обновляем координату последней платформы
  }

  private generatePlatforms() {
    // Генерация платформ, когда игрок достаточно высок
    const playerY = this.lizard.y;

    // Создаем новую платформу, если игрок поднимается выше определённой Y
    if (playerY < this.lastPlatformY - this.platformDistance) {
      const x = Phaser.Math.Between(100, this.scale.width - 100);
      const y = this.lastPlatformY - this.platformDistance;
      this.createPlatform(x, y);
      this.lastPlatformY = y; // обновляем координату последней платформы
    }
  }

  private handleCollision(event: MatterCollisionStart) {
    event.pairs.forEach((pair) => {
      const bodyA = pair.bodyA;
      const bodyB = pair.bodyB;

      // Получаем игровые объекты для проверки меток
      const gameObjectA = bodyA.gameObject;
      const gameObjectB = bodyB.gameObject;

      // Проверяем наличие меток
      const isPlayerA = gameObjectA && gameObjectA.getData("label") === "girl";
      const isPlatformA = gameObjectA && gameObjectA.getData("label") === "platform";
      const isPlayerB = gameObjectB && gameObjectB.getData("label") === "girl";
      const isPlatformB = gameObjectB && gameObjectB.getData("label") === "platform";

      if ((isPlayerA && isPlatformB) || (isPlayerB && isPlatformA)) {
        // Прыжок при столкновении
        if (this.lizard.body.velocity.y > 0) {
          this.lizard.setVelocityY(-15); // Настройте силу прыжка
        }
      }
    });
  }
  private cleanPlatforms() {
    // Удаление платформ, которые выше определённой высоты на экране
    this.platforms.getChildren().forEach((platform) => {
      if (platform.y < this.lizard.y - this.scale.height) {
        platform.destroy();
      }
    });
  }

  private checkPlayerHeight() {
    // Включите настройку камеры следовать за игроком в высоте
    this.cameras.main.setScroll(0, this.lizard.y - 200);
  }

  resize(gameSize: { width: number; height: number }) {
    const width = gameSize.width;
    const height = gameSize.height;

    // Обновление размеров камеры
    this.cameras.resize(width, height);

    // Обновление границ мира и физики
    this.matter.world.setBounds(0, 0, width, height);

    // Масштабирование игровых объектов
    // this.scaleGameObjects(width, height);
  }

  scaleGameObjects(width: number, height: number) {
    // Расчет коэффициента масштабирования
    const scaleX = width / this.originalWidth;
    const scaleY = height / this.originalHeight;
    const scale = Math.min(scaleX, scaleY);

    // Масштабирование и позиционирование лизарда (персонажа)
    if (this.lizard) {
      this.lizard.setScale(scale);
      this.lizard.setPosition(width / 2, height / 2);
    }

    // Масштабирование фона
    if (this.backgrounds) {
      this.backgrounds.forEach((bg) => {
        bg.sprite.setDisplaySize(width, height);
      });
    }

    // Масштабирование других игровых объектов (платформы, сундуки и т.д.)
    if (this.platforms) {
      this.platforms.forEach((platform) => {
        platform.setScale(scale);
        // Обновите позицию платформы, если необходимо
      });
    }
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  canvas: document.querySelector("#phaser") as HTMLCanvasElement,
  fps: {
    limit: 140,
  },

  scale: {
    // mode: Phaser.Scale.MAX_ZOOM,
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "matter",
    matter: {
      // debug: true,
      gravity: {
        y: 1,
      },
    },
  },
  // scene: [Intro, Preloader, Menu, Game],
  scene: [Preloader, Menu, Game],
};

export const game = new Phaser.Game(config);
