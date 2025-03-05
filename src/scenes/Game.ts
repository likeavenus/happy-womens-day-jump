import Phaser from "phaser";
import Preloader from "./Preload";

import Menu from "./Menu";

import Girl from "../characters/girl/girl";
import MovingPlatform from "../containers/MovingPlatform";
import { TextBox } from "../containers/TextBox";
import Chest from "../characters/chest/chest";
import Intro from "./Intro";
import { COLLISION_CATEGORIES } from "./constants";
import { createCoinAnims } from "../characters/coin/anims";

const MIN = Phaser.Math.DegToRad(-180);

export const startCoords = {
  x: 550,
  // y: 1945,
  y: 2200,
};

class Game extends Phaser.Scene {
  playerController = {
    blocked: {
      left: false,
      right: false,
      bottom: false,
    },
    numTouching: {
      left: 0,
      right: 0,
      bottom: 0,
    },
    sensors: {
      bottom: null,
      left: null,
      right: null,
    },
  };
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
  private coins!: Phaser.GameObjects.Group;
  private maxPlatforms: number = 10; // Максимальное количество платформ на экране
  private platformDistance: number = 300; // Расстояние между платформами
  private lastPlatformY: number = 0; // Y-координата последней платформы созданной
  public firstPlatformY: number = 0; // Y-координата первой платформы созданной

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

  create2() {
    const M = Phaser.Physics.Matter.Matter;
    const w = this.lizard.width;
    const h = this.lizard.height;

    const originalX = this.lizard.x;
    const originalY = this.lizard.y;

    // Сенсоры для определения блокировки
    this.playerController.sensors.bottom = M.Bodies.rectangle(0, h / 2, w * 0.75, 5, {
      isSensor: true,
      label: "bottomSensor",
    });

    this.playerController.sensors.left = M.Bodies.rectangle(-w * 0.45, 0, 5, h * 0.25, {
      isSensor: true,
      label: "leftSensor",
    });

    this.playerController.sensors.right = M.Bodies.rectangle(w * 0.45, 0, 5, h * 0.25, {
      isSensor: true,
      label: "rightSensor",
    });

    const compoundBody = M.Body.create({
      parts: [this.lizard.body, this.playerController.sensors.bottom, this.playerController.sensors.left, this.playerController.sensors.right],
      friction: 0.01,
      restitution: 0.05,
    });

    // this.lizard.setExistingBody(compoundBody).setFixedRotation();
    // M.Body.setPosition(compoundBody, { x: startCoords.x, y: startCoords.y });

    // this.lizard.setExistingBody(compoundBody).setFixedRotation().setPosition(originalX, originalY);

    // Обработка коллизий
    this.matter.world.on("beforeupdate", () => {
      this.playerController.numTouching.left = 0;
      this.playerController.numTouching.right = 0;
      this.playerController.numTouching.bottom = 0;
    });

    this.matter.world.on("collisionactive", (event) => {
      const playerBody = this.lizard.body;
      const left = this.playerController.sensors.left;
      const right = this.playerController.sensors.right;
      const bottom = this.playerController.sensors.bottom;

      for (let i = 0; i < event.pairs.length; i++) {
        const bodyA = event.pairs[i].bodyA;
        const bodyB = event.pairs[i].bodyB;

        if (bodyA === playerBody || bodyB === playerBody) {
          continue;
        } else if (bodyA === bottom || bodyB === bottom) {
          this.playerController.numTouching.bottom += 1;
        } else if ((bodyA === left && bodyB.isStatic) || (bodyB === left && bodyA.isStatic)) {
          this.playerController.numTouching.left += 1;
        } else if ((bodyA === right && bodyB.isStatic) || (bodyB === right && bodyA.isStatic)) {
          this.playerController.numTouching.right += 1;
        }
      }
    });

    this.matter.world.on("afterupdate", () => {
      this.playerController.blocked.right = this.playerController.numTouching.right > 0;
      this.playerController.blocked.left = this.playerController.numTouching.left > 0;
      this.playerController.blocked.bottom = this.playerController.numTouching.bottom > 0;
    });
  }

  create() {
    this.coins = this.add.group();
    createCoinAnims(this.anims);
    this.originalWidth = this.scale.width;
    this.originalHeight = this.scale.height;
    // this.scale.on("resize", this.resize, this);
    // this.resize({ width: this.scale.width, height: this.scale.height });
    this.platforms = this.add.group();
    // this.initializePlatforms();
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
    this.create2();

    // this.lizard.setVelocityY(-15);
    this.createPlatform(startCoords.x, startCoords.y + 200);
    this.createPlatform(startCoords.x, startCoords.y);
    this.createPlatform(Phaser.Math.Between(startCoords.x - 150, startCoords.x + 150), startCoords.y - 200);
    this.generatePlatforms();
    this.generatePlatforms();

    this.matter.world.on("collisionstart", this.handleCollision, this);

    // Запуск генерации платформ
    this.time.addEvent({
      delay: 1000, // Интервал генерации новых платформ
      callback: this.generatePlatforms,
      callbackScope: this,
      loop: true,
    });

    this.time.addEvent({
      delay: 1000, // Интервал генерации новых платформ
      callback: () => this.createCoin(Phaser.Math.Between(startCoords.x - 150, startCoords.x + 150), this.lastPlatformY - 60),
      callbackScope: this,
      loop: true,
    });

    this.input.on("pointerdown", (pointer) => {});

    const space = this.input.keyboard.addKey("space");

    space.on("down", () => {});

    // this.matter.add.mouseSpring();

    this.cameras.main.startFollow(this.lizard);
    // this.cameras.main.startFollow(this.lizard, true, 1, 1, 0.5, 0);

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
    this.updatePlatformCollisions();
    this.checkPlayerHeight();

    const { left, right, up, space } = this.cursors;

    this.lizard.update(this.cursors);
    // console.log(this.lizard.y);
    // console.log(this.platforms.getChildren()?.[0]?.y);

    // this.platforms.
  }

  private createPlatform(x: number, y: number) {
    const platform = new MovingPlatform(this, x, y, "platform", {});
    this.platforms.add(platform);
    this.lastPlatformY = y; // Обновляем координату последней платформы
    this.firstPlatformY = this.platforms.getChildren()?.at?.(0).y;
  }

  private generatePlatforms() {
    // Создаем новую платформу, если игрок поднялся выше последней платформы
    const x = Phaser.Math.Between(startCoords.x - 150, startCoords.x + 150);
    const y = this.lastPlatformY - Phaser.Math.Between(300, 250); // Устанавливаем Y-координату для новой платформы
    this.createPlatform(x, y); // Создаем платформу
    this.lastPlatformY = y; // Обновляем последнюю Y-координату
  }

  private updatePlatformCollisions() {
    const isMovingUp = this.lizard.body.velocity.y < 0;
    const isMovingLeft = this.lizard.body.velocity.x < 0; // Проверка движения влево
    const isMovingRight = this.lizard.body.velocity.x > 0; // Проверка движения вправо

    if (!isMovingUp) {
      this.lizard.setCollidesWith([COLLISION_CATEGORIES.Platform]);
    } else {
      this.lizard.setCollidesWith([COLLISION_CATEGORIES.Disabled]);
    }
  }

  private createCoin(x: number, y: number) {
    // Создаем спрайт монеты
    const coin = this.matter.add.sprite(x, y, "coin"); // 'coin' – это ключ текстуры
    coin.setScale(2);
    coin.setIgnoreGravity(true);
    coin.setBounce(0.5); // Установите отскок
    coin.setCollisionCategory(0x0004); // Задайте категорию коллизии для монет
    coin.setCollidesWith([0x0002]); // Они будут сталкиваться с лягушонком (персонажем)
    // Установите другие параметры, если необходимо
    coin.setData("label", "coin"); // Устанавливаем метаданные (например, для классификации)
    coin.anims.play("coin");
    // Добавляем монету в группу, если используете группу для монет
    this.coins.add(coin); // Предполагается, что у вас есть группа coins
  }

  private handleCollision(event) {
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
          this.lizard.setVelocityY(-17); // Настройте силу прыжка
        }
      }
    });
  }

  private cleanPlatforms() {
    // Получаем текущую позицию лягушонка относительно высоты экрана

    // Проходим по всем платформам
    this.platforms.getChildren().forEach((platform) => {
      // Удаляем платформы, если их верхняя граница ниже видимости
      // Используем platform.y + platform.height, чтобы проверить верхнюю границу
      if (platform.y > this.cameras.main.scrollY + 1100) {
        console.log("DESTROY PLATFORM:", platform);
        platform.destroy(); // Удаляем платформу
      }
    });
  }

  private cleanCoins() {
    // Получаем текущую позицию лягушонка относительно высоты экрана

    // Проходим по всем платформам
    this.coins.getChildren().forEach((platform) => {
      // Удаляем платформы, если их верхняя граница ниже видимости
      // Используем platform.y + platform.height, чтобы проверить верхнюю границу
      if (platform.y > this.cameras.main.scrollY + 1100) {
        console.log("DESTROY PLATFORM:", platform);
        platform.destroy(); // Удаляем платформу
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
