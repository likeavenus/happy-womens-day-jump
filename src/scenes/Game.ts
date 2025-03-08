import Phaser from "phaser";
import Preloader from "./Preload";

import Menu from "./Menu";

import Girl from "../characters/girl/girl";
import MovingPlatform from "../containers/MovingPlatform";
import { TextBox } from "../containers/TextBox";
import Chest from "../characters/chest/chest";
import Intro from "./Intro";
import { COLLISION_CATEGORIES, compliments, greetings2 } from "./constants";
import { createCoinAnims } from "../characters/coin/anims";
import { Bat } from "../characters/bat/bat";
import { PetalGenerator } from "../characters/petal/petal";
import Guide from "./Guide";

const MIN = Phaser.Math.DegToRad(-180);

export const startCoords = {
  x: 550,
  // y: 1945,
  y: 2200,
};

const maximumCoins = 50;

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
  private petalGenerator!: PetalGenerator;
  isGuideActive = true;

  private isMovingLeft: boolean = false;
  private isMovingRight: boolean = false;
  private moveSpeed: number = 5; // Скорость движения
  private halfWidth: number = 0; // Половина ширины экрана

  private bats!: Phaser.GameObjects.Group;
  private platforms!: Phaser.GameObjects.Group;
  private coins!: Phaser.GameObjects.Group;
  private coinCount: number = 0;
  private coinText!: Phaser.GameObjects.Text;

  private maxPlatforms: number = 10; // Максимальное количество платформ на экране
  private platformDistance: number = 300; // Расстояние между платформами
  private lastPlatformY: number = 0; // Y-координата последней платформы созданной
  public firstPlatformY: number = 0; // Y-координата первой платформы созданной

  flowers: Phaser.GameObjects.Group;

  chest!: Chest;
  starsSummary = 0;
  lizard!: Phaser.Physics.Matter.Sprite;
  isTouchingGround = false;
  level: number = 1;
  private coinsChanged!: Phaser.GameObjects.Group;
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
  textBox: TextBox;

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

  private handleTouchInput(pointer: Phaser.Input.Pointer) {
    // Определяем зону касания
    const touchX = pointer.x; // Учитываем скролл камеры

    // Если касание в левой половине экрана
    if (touchX < this.halfWidth) {
      this.isMovingLeft = true;
      this.isMovingRight = false;
    }
    // Если касание в правой половине экрана
    else {
      this.isMovingLeft = false;
      this.isMovingRight = true;
    }
  }

  create() {
    this.coins = this.add.group();
    createCoinAnims(this.anims);
    this.originalWidth = this.scale.width;
    this.originalHeight = this.scale.height;
    this.platforms = this.add.group();
    this.coinsChanged = this.add.group();
    this.flowers = this.add.group();

    this.petalGenerator = new PetalGenerator(this);

    this.bats = this.add.group();
    const spawnBat = () => {
      // const screenHeight = this.cameras.main.height;
      // const scrollY = this.cameras.main.scrollY;

      const spawnSide = Phaser.Math.Between(0, 1); // 0 - слева, 1 - справа
      const speed = 10;
      const x = spawnSide === 0 ? 0 - 200 : this.cameras.main.width + 200;
      const direction = spawnSide === 0 ? 1 : -1;

      const bat = new Bat(this, x, Phaser.Math.Between(this.lizard.y - 1000, this.lizard.y - 1000));
      bat.setData("label", "bat");
      this.bats.add(bat);

      bat.startFlight(direction, speed);

      this.time.delayedCall(10000, () => {
        bat.destroy(true);
      });
    };

    // Спавнить мышь каждые 7-10 секунд
    this.time.addEvent({
      delay: Phaser.Math.Between(7000, 10000),
      // delay: Phaser.Math.Between(1000, 2000),
      callback: spawnBat,
      callbackScope: this,
      loop: true,
    });

    this.halfWidth = this.scale.width / 2;
    this.input.addPointer(1);
    // Обработка начала касания
    this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
      this.handleTouchInput(pointer);
    });

    // Обработка перемещения пальца
    this.input.on("pointermove", (pointer: Phaser.Input.Pointer) => {
      if (pointer.isDown) {
        this.handleTouchInput(pointer);
      }
    });

    // Обработка окончания касания
    this.input.on("pointerup", () => {
      this.isMovingLeft = false;
      this.isMovingRight = false;
    });
    // this.cameras.main.zoomTo(0.3);

    this.coinText = this.add
      .text(20, 20, "Монеты: 0", {
        fontSize: "24px",
        fill: "#FFD700",
        fontFamily: "Arial",
        stroke: "#000",
        strokeThickness: 4,
      })
      .setScrollFactor(0)
      .setDepth(1000);

    this.add.existing(this.coinText);

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

    this.lizard = new Girl(this, startCoords.x, startCoords.y + 1000, girlKey as string, nameFromStorage as string, {
      label: "girl",
    });

    this.create2();

    // console.log(greetings2[nameFromStorage]);

    // this.textBox = new TextBox(this, 170, 500, 200, 420, greetings2[girlKey].text).setDepth(1000);
    this.textBox = new TextBox(
      this,
      this.cameras.main.centerX, // Отступ от левого края экрана
      this.cameras.main.centerY, // Центрирование по вертикали
      300,
      420,
      greetings2[girlKey].text
    )
      .setDepth(1000)
      .setInteractive();
    this.textBox.on("pointerdown", () => {
      console.log("pointerdown");

      this.textBox.hideTextBox();
      this.scene.resume();
    });

    // this.textBox.alpha = 1;

    // this.lizard.setVelocityY(-15);
    this.createPlatform(startCoords.x, startCoords.y + 600);
    this.createPlatform(startCoords.x, startCoords.y + 300);
    this.createPlatform(startCoords.x, startCoords.y);

    // this.createPlatform(startCoords.x, startCoords.y);

    // this.createPlatform(startCoords.x, startCoords.y);

    // this.createPlatform(startCoords.x, startCoords.y);

    // this.createPlatform(Phaser.Math.Between(startCoords.x - 150, startCoords.x + 150), startCoords.y - 200);
    // this.generatePlatforms();
    // this.generatePlatforms();

    this.matter.world.on(
      "collisionstart",
      (event) => {
        this.handleCollision(event);
        this.handleCoinCollision(event);
      },
      this
    );

    const spawnFlowers = (x: number, y: number) => {
      // Создаем спрайт монеты
      const tulip = this.matter.add.sprite(x, y, "tulip", undefined, {
        label: "tulip",
      });
      tulip.setScale(1);
      tulip.setIgnoreGravity(true);
      tulip.setBounce(0.5); // Установите отскок
      tulip.setDepth(100);

      // Установите другие параметры, если необходимо
      tulip.setData("label", "tulip"); // Устанавливаем метаданные (например, для классификации)

      tulip.setCollisionCategory(COLLISION_CATEGORIES.Flower);
      tulip.setCollidesWith([COLLISION_CATEGORIES.Player]);
      // Добавляем монету в группу, если используете группу для монет
      this.flowers.add(tulip); // Предполагается, что у вас есть группа coins
    };

    // Запуск генерации платформ
    this.time.addEvent({
      delay: 500, // Интервал генерации новых платформ
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

    this.time.addEvent({
      // delay: 10000,
      delay: 4000,
      callback: () => spawnFlowers(Phaser.Math.Between(startCoords.x - 150, startCoords.x + 150), this.lastPlatformY - 40),
      callbackScope: this,
      loop: true,
    });

    this.cameras.main.startFollow(this.lizard);
    // this.cameras.main.startFollow(this.lizard, true, 1, 1, 0.5, 0);

    const { width, height } = this.scale;
    const darknessMask = this.add.graphics();
    darknessMask.fillStyle(0x000000, 1);

    // this.backgrounds.push(
    //   {
    //     ratioX: 0.07,
    //     ratioY: 0.009,
    //     sprite: this.add.tileSprite(0, 0, width, height, "background_1").setOrigin(0, 0.5).setScrollFactor(0, 0).setScale(3.5, 4),
    //     // .setDepth(0),
    //   },
    //   {
    //     ratioX: 0.09,
    //     ratioY: 0.02,
    //     sprite: this.add.tileSprite(0, -120, width, height, "background_2").setOrigin(0, 0.5).setScrollFactor(0, 0).setScale(3.5, 4),
    //     // .setDepth(0),
    //   }
    // );
    // this.backgrounds.push(
    //   {
    //     ratioX: 0.05,
    //     ratioY: 0.009,
    //     sprite: this.add
    //       .tileSprite(200, 500, width, height * 2.2, "Back_1")
    //       .setOrigin(0.5)
    //       .setScrollFactor(0, 0)
    //       .setScale(1.1, 1.1),
    //   },
    //   {
    //     ratioX: 0.09,
    //     ratioY: 0.009,
    //     sprite: this.add
    //       .tileSprite(120, 400, width + 150, height * 2, "Clouds_front")
    //       .setScrollFactor(0, 0)
    //       .setScale(1.1, 1.1),
    //   },
    //   {
    //     ratioX: 0.2,
    //     ratioY: 0.02,
    //     sprite: this.add
    //       .tileSprite(170, 600, width + 100, height * 2.2, "Rock_1")
    //       .setOrigin(0.5)
    //       .setScrollFactor(0, 0),
    //   },
    //   {
    //     ratioX: 0.2,
    //     ratioY: 0.02,
    //     sprite: this.add
    //       .tileSprite(170, 600, width + 100, height * 2.2, "Rock_2")
    //       .setOrigin(0.5)
    //       .setScrollFactor(0, 0),
    //   },
    //   {
    //     ratioX: 0.2,
    //     ratioY: 0.02,
    //     sprite: this.add
    //       .tileSprite(170, 600, width + 100, height * 2.2, "Clouds_back")
    //       .setOrigin(0.5)
    //       .setScrollFactor(0, 0),
    //   },
    //   {
    //     ratioX: 0.2,
    //     ratioY: 0.02,
    //     sprite: this.add
    //       .tileSprite(170, 600, width + 100, height * 2.2, "Back_2")
    //       .setOrigin(0.5)
    //       .setScrollFactor(0, 0),
    //   }
    // );

    this.backgrounds.push(
      {
        // Самый дальний слой (небо)
        ratioX: 0.02,
        ratioY: 0.004,
        sprite: this.add
          .tileSprite(0, 600, width * 3, height * 3, "Back_2")
          .setOrigin(0.5)
          .setScrollFactor(0, 0)
          .setDepth(0),
      },
      {
        // Облака переднего плана
        ratioX: 0.02,
        ratioY: 0.025,
        sprite: this.add
          .tileSprite(-200, 600, width * 3, height * 3, "Clouds_front")
          .setScrollFactor(0, 0)
          .setScale(1.1, 1.1)
          .setDepth(1),
      },
      {
        // Ближние скалы

        ratioX: 0.08,
        ratioY: 0.015,
        sprite: this.add
          .tileSprite(-200, 700, width * 4, height * 3, "Rock_2")
          .setOrigin(0.5)
          .setScrollFactor(0, 0)
          .setDepth(2),
      },
      {
        // Облака заднего плана
        ratioX: 0.05,
        ratioY: 0.008,
        sprite: this.add
          .tileSprite(0, 800, width * 3, height * 3, "Clouds_back")
          .setOrigin(0.5)
          .setScrollFactor(0, 0)
          .setDepth(3),
      },
      {
        // Дальние скалы
        ratioX: 0.12,
        ratioY: 0.02,
        sprite: this.add
          .tileSprite(-70, 700, width * 4, height * 3, "Rock_1")
          .setOrigin(0.5)
          .setScrollFactor(0, 0)
          .setDepth(4),
      },

      {
        // Передний план (декорации)
        ratioX: 0.2,
        ratioY: 0.03,
        sprite: this.add
          .tileSprite(0, 860, width * 3, height * 3, "Back_11")
          .setOrigin(0.5)
          .setScrollFactor(0, 0)
          .setScale(1.1, 1.1)
          .setDepth(5),
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

    // this.events.on("resume", () => {});
    this.light = this.lights.addLight(this.lizard.x, this.lizard.y, 512).setIntensity(2);

    this.matter.world.update60Hz();

    // this.cameras.main.setFollowOffset(-30, 80);
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
    this.cleanCoins();
    this.updatePlatformCollisions();
    // this.checkPlayerHeight();

    const { left, right, up, space } = this.cursors;

    this.lizard.update(this.cursors);
    // console.log(this.lizard.y);
    // console.log(this.platforms.getChildren()?.[0]?.y);

    // this.platforms.
    if (this.isMovingLeft) {
      this.lizard.flipX = false;
      this.lizard.setVelocityX(-this.moveSpeed);
    } else if (this.isMovingRight) {
      this.lizard.flipX = true;

      this.lizard.setVelocityX(this.moveSpeed);
    } else {
      // Плавная остановка при отсутствии ввода
      this.lizard.setVelocityX(this.lizard.body.velocity.x * 0.9);
    }

    if (this.coinCount >= maximumCoins) {
      this.textBox.alpha = 1;
      // this.scene.pause();
    }

    this.bats.getChildren().forEach((bat) => {
      if (this.cameras.main.scrollY + 1000 < bat.y) {
        bat.destroy();
        console.log("bat.destroy();");
      }
      // if (bat.x < 0 + 1000 || bat.x > this.cameras.main.width + 1000) {
      //   bat.destroy();
      // }
    });

    // if (this.lizard.y > 3000) {
    //   console.log(this.coinCount);
    //   this.coinCount -= 25;
    // }
    // this.petalGenerator.update();
  }

  private increaseLevel() {
    this.level += 1;
    console.log("level: ", this.level);
  }

  private createPlatform(x: number, y: number) {
    const platform = new MovingPlatform(this, x, y, "platform2", {});
    // if (Phaser.Math.Between(0, 2) > 1.5 && this.level >= 2) {
    //   platform.moveHorizontally(3000, 300);
    // }
    if (Phaser.Math.Between(0, 2) > 1.9) {
      platform.moveHorizontally(Phaser.Math.Between(2500, 3000), Phaser.Math.Between(-300, 300));
    }

    this.platforms.add(platform);
    this.lastPlatformY = y; // Обновляем координату последней платформы
    this.firstPlatformY = this.platforms.getChildren()?.at?.(0).y;
  }

  private generatePlatforms() {
    // Создаем новую платформу, если игрок поднялся выше последней платформы
    let spawnY = 320;
    let spawnY2 = 360;

    const x = Phaser.Math.Between(startCoords.x - 150, startCoords.x + 150);
    const y = this.lastPlatformY - Phaser.Math.Between(spawnY, spawnY2);
    // const y = this.lastPlatformY - 340;

    this.createPlatform(x, y); // Создаем платформу
    this.lastPlatformY = y; // Обновляем последнюю Y-координату
  }

  private updatePlatformCollisions() {
    const isMovingUp = this.lizard.body.velocity.y < 0;
    const isMovingLeft = this.lizard.body.velocity.x < 0; // Проверка движения влево
    const isMovingRight = this.lizard.body.velocity.x > 0; // Проверка движения вправо

    if (!isMovingUp) {
      this.lizard.setCollidesWith([COLLISION_CATEGORIES.Platform, COLLISION_CATEGORIES.Coin, COLLISION_CATEGORIES.Bat, COLLISION_CATEGORIES.Flower]);
    } else {
      this.lizard.setCollidesWith([COLLISION_CATEGORIES.Disabled, COLLISION_CATEGORIES.Coin, COLLISION_CATEGORIES.Bat, COLLISION_CATEGORIES.Flower]);
    }
  }

  private createCoin(x: number, y: number) {
    // Создаем спрайт монеты
    const coin = this.matter.add.sprite(x, y, "coin", undefined, {
      label: "coin",
    }); // 'coin' – это ключ текстуры
    coin.setScale(2);
    coin.setIgnoreGravity(true);
    coin.setBounce(0.5); // Установите отскок
    coin.setDepth(100);

    // Установите другие параметры, если необходимо
    coin.setData("label", "coin"); // Устанавливаем метаданные (например, для классификации)
    coin.anims.play("coin");

    coin.setCollisionCategory(COLLISION_CATEGORIES.Coin);
    coin.setCollidesWith([COLLISION_CATEGORIES.Player]);
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
          const levelMultiplier = this.level > 2 ? this.level * 0.7 : 0;
          this.lizard.setVelocityY(-17 + -levelMultiplier);
        }
      }

      const isBatA = gameObjectA && gameObjectA.getData("label") === "bat";
      const isBatB = gameObjectB && gameObjectB.getData("label") === "bat";

      if ((isPlayerA && isBatB) || (isPlayerB && isBatA)) {
        this.coinCount -= 2;
        this.coinText.setText(`Монеты: ${this.coinCount}`);
        this.cameras.main.shake(200, 0.05);
        if (isBatA) {
          gameObjectA.destroy(true);
        }

        if (isBatB) {
          gameObjectB.destroy(true);
        }
        console.log("this.sys.game.device.os.iOS: ", this.sys.game.device.os.iOS);

        if (this.sys.game.device.os.android || this.sys.game.device.os.iOS) {
          try {
            // Проверка поддержки вибрации
            if (navigator.vibrate) {
              // Вибрация: 200ms сильная + 100ms пауза + 100ms слабая
              navigator.vibrate([200, 100, 100]);
            }
          } catch (e) {
            console.log("Vibration API not supported");
          }
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
        platform.destroy(true); // Удаляем платформу
      }
    });
  }

  private cleanCoins() {
    // Получаем текущую позицию лягушонка относительно высоты экрана

    // Проходим по всем платформам
    this.coins.getChildren().forEach((coin) => {
      // Удаляем платформы, если их верхняя граница ниже видимости
      // Используем platform.y + platform.height, чтобы проверить верхнюю границу
      if (coin.y > this.cameras.main.scrollY + 1100) {
        // console.log("DESTROY PLATFORM:", platform);
        coin.destroy(); // Удаляем платформу
      }
    });
  }

  private createFloatingText(x: number, y: number, text: string): void {
    // const floatingText = this.add.text(x, y, text, {
    //   fontSize: "36px",
    //   color: "#e67be7",
    //   fontStyle: "bold",
    //   wordWrap: { width: 350 },
    //   stroke: "#000000",
    // });
    const floatingText = this.add.text(x, y, text, {
      fontSize: "36px",
      color: "#4a154b", // Тёмно-фиолетовый для контраста
      fontStyle: "bold",
      wordWrap: { width: 350 },
      stroke: "#ffffff", // Белая обводка
      strokeThickness: 6, // Увеличиваем толщину обводки
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: "#000000",
        blur: 3,
        stroke: true,
      },
    });

    floatingText.setDepth(800);
    floatingText.setScrollFactor(0);

    this.coinsChanged.add(floatingText);

    this.tweens.add({
      targets: floatingText,
      y: y - 150,
      alpha: 0,
      duration: 7000,
      ease: "Cubic.easeOut",
      onComplete: () => floatingText.destroy(),
    });
  }

  private handleCoinCollision(event) {
    event.pairs.forEach((pair) => {
      const bodyA = pair.bodyA;
      const bodyB = pair.bodyB;

      // Получаем игровые объекты для проверки меток
      const gameObjectA = bodyA.gameObject;
      const gameObjectB = bodyB.gameObject;

      // Проверяем наличие меток
      const isPlayerA = gameObjectA && gameObjectA.getData("label") === "girl";
      const isCoinA = gameObjectA && gameObjectA.getData("label") === "coin";
      const isPlayerB = gameObjectB && gameObjectB.getData("label") === "girl";
      const isCoinB = gameObjectB && gameObjectB.getData("label") === "coin";

      const coinBody = [bodyA, bodyB].find((body) => body?.gameObject?.getData("label") === "coin");
      const playerBody = [bodyA, bodyB].find((body) => body?.gameObject?.getData("label") === "girl");

      // if ((isPlayerA && isCoinB) || (isPlayerB && isCoinA)) {
      //   this.coins.remove(coin, true, true);
      // }
      if (coinBody && playerBody) {
        const coin = coinBody.gameObject as Phaser.Physics.Matter.Sprite;

        this.coinCount++;
        this.coinText.setText(`Монеты: ${this.coinCount}`);
        if (this.coinCount === 10) {
          this.increaseLevel();
        }

        if (this.coinCount === 20) {
          this.increaseLevel();
        }

        if (this.coinCount === 30) {
          this.increaseLevel();
        }

        coin.destroy(true);
        this.sound.play("grab-coin", { volume: 0.3, detune: Phaser.Math.Between(0, 1200) });
      }

      const tulipBody = [bodyA, bodyB].find((body) => body?.gameObject?.getData("label") === "tulip");

      if (tulipBody && playerBody) {
        const tulip = tulipBody.gameObject as Phaser.Physics.Matter.Sprite;
        this.coinCount += 5;
        this.coinText.setText(`Монеты: ${this.coinCount}`);
        this.createFloatingText(
          this.cameras.main.centerX - 150,
          this.cameras.main.centerY - 250,
          compliments[Phaser.Math.Between(0, compliments.length - 1)]
        );
        tulip.destroy(true);
        this.sound.play("grab-coin", { volume: 0.3, detune: Phaser.Math.Between(0, 1200) });
      }
    });
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  canvas: document.querySelector("#phaser") as HTMLCanvasElement,
  fps: {
    limit: 140,
  },

  scale: {
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
  scene: [Preloader, Guide, Menu, Game],
  // dev
  // scene: [Preloader, Menu, Game],
};

export const game = new Phaser.Game(config);
