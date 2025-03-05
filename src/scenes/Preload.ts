import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  onLoad() {
    const loadingText = this.add.text(this.sys.canvas.width / 2 - 50, this.sys.canvas.height / 2, "Загрузка...", {
      fontSize: 18,
    });
    const loadingPercent = this.add.text(loadingText.x + 20, loadingText.y + 20, "0");
    this.load.on("progress", function (value: number) {
      loadingPercent.text = `${Math.floor(value * 100)}%`;
    });
  }

  preload() {
    this.onLoad();
    /** Tiles */

    this.load.image("happy-ground", "assets/happy/happy.png");
    this.load.tilemapTiledJSON("happy-ground-tilemap", "assets/happy/happy-ground.json");

    this.load.image("background_1", "assets/happy/background_layer_1.png");
    this.load.image("background_2", "assets/happy/background_layer_2.png");
    // this.load.image("background_3", "assets/happy/background_layer_3.png");
    this.load.image("platform", "assets/happy/objects/platform.png");
    this.load.image("paper", "assets/happy/objects/paper.png");
    this.load.image("star", "assets/happy/objects/star3.png");

    /** Atlases */

    /** girls */
    this.load.atlas("ksenia", "assets/happy/girls/Ksenia/ksenia_idle.png", "assets/happy/girls/Ksenia/ksenia_idle.json");

    this.load.atlas("ksenia_run", "assets/happy/girls/Ksenia/ksenia_run.png", "assets/happy/girls/Ksenia/ksenia_run.json");

    this.load.atlas("ksenia_jump", "assets/happy/girls/Ksenia/ksenia_jump.png", "assets/happy/girls/Ksenia/ksenia_jump.json");

    this.load.atlas("ksenia_down", "assets/happy/girls/Ksenia/ksenia_down.png", "assets/happy/girls/Ksenia/ksenia_down.json");

    /** Elena */
    this.load.atlas("elena_idle", "assets/happy/girls/Elena/elena_idle.png", "assets/happy/girls/Elena/elena_idle.json");

    this.load.atlas("elena_run", "assets/happy/girls/Elena/elena_run.png", "assets/happy/girls/Elena/elena_run.json");

    this.load.atlas("elena_jump", "assets/happy/girls/Elena/elena_jump.png", "assets/happy/girls/Elena/elena_jump.json");

    this.load.atlas("elena_down", "assets/happy/girls/Elena/elena_down.png", "assets/happy/girls/Elena/elena_down.json");

    /** Natasha V */

    this.load.atlas("natalia_v_idle", "assets/happy/girls/NataliaV/natalia_v_idle.png", "assets/happy/girls/NataliaV/natalia_v_idle.json");

    this.load.atlas("natalia_v_run", "assets/happy/girls/NataliaV/natalia_v_run.png", "assets/happy/girls/NataliaV/natalia_v_run.json");

    this.load.atlas("natalia_v_jump", "assets/happy/girls/NataliaV/natalia_v_jump.png", "assets/happy/girls/NataliaV/natalia_v_jump.json");

    this.load.atlas("natalia_v_down", "assets/happy/girls/NataliaV/natalia_v_down.png", "assets/happy/girls/NataliaV/natalia_v_down.json");

    /** Nastya */

    this.load.atlas("nastya_idle", "assets/happy/girls/Nastya/nastya_idle.png", "assets/happy/girls/Nastya/nastya_idle.json");

    this.load.atlas("nastya_run", "assets/happy/girls/Nastya/nastya_run.png", "assets/happy/girls/Nastya/nastya_run.json");

    this.load.atlas("nastya_jump", "assets/happy/girls/Nastya/nastya_jump.png", "assets/happy/girls/Nastya/nastya_jump.json");

    this.load.atlas("nastya_down", "assets/happy/girls/Nastya/nastya_down.png", "assets/happy/girls/Nastya/nastya_down.json");

    /** Anna */

    this.load.atlas("anna_idle", "assets/happy/girls/Anna/anna_idle.png", "assets/happy/girls/Anna/anna_idle.json");

    this.load.atlas("anna_run", "assets/happy/girls/Anna/anna_run.png", "assets/happy/girls/Anna/anna_run.json");

    this.load.atlas("anna_jump", "assets/happy/girls/Anna/anna_jump.png", "assets/happy/girls/Anna/anna_jump.json");

    this.load.atlas("anna_down", "assets/happy/girls/Anna/anna_down.png", "assets/happy/girls/Anna/anna_down.json");

    /** Natalia P */

    this.load.atlas("natalia_p_idle", "assets/happy/girls/NataliaP/natalia_p_idle.png", "assets/happy/girls/NataliaP/natalia_p_idle.json");

    this.load.atlas("natalia_p_run", "assets/happy/girls/NataliaP/natalia_p_run.png", "assets/happy/girls/NataliaP/natalia_p_run.json");

    this.load.atlas("natalia_p_jump", "assets/happy/girls/NataliaP/natalia_p_jump.png", "assets/happy/girls/NataliaP/natalia_p_jump.json");

    this.load.atlas("natalia_p_down", "assets/happy/girls/NataliaP/natalia_p_down.png", "assets/happy/girls/NataliaP/natalia_p_down.json");

    /** objects */

    this.load.atlas("chest", "assets/happy/objects/Chests.png", "assets/happy/objects/Chests.json");
    this.load.atlas("coin", "assets/happy/objects/coin/coin.png", "assets/happy/objects/coin/coin.json");

    /** Images */
    // this.load.image("star", "assets/star.png");

    this.load.image("flare", "assets/happy/white-flare.png");

    this.load.audio("music", "assets/happy/scott-buckley-reverie(chosic.com).mp3");
  }

  create() {
    // this.scene.start("Game");
    this.scene.start("Menu");
  }
}
