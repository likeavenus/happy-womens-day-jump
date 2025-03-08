import Phaser from "phaser";

export const createAnims = (anims: Phaser.Animations.AnimationManager) => {
  anims.create({
    key: "alexandra_jump",
    frames: anims.generateFrameNames("alexandra_jump", {
      start: 0,
      end: 3,
      prefix: "alexandra_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "alexandra_fall",
    frames: anims.generateFrameNames("alexandra_fall", {
      start: 0,
      end: 3,
      prefix: "alexandra_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "karina_jump",
    frames: anims.generateFrameNames("karina_jump", {
      start: 0,
      end: 3,
      prefix: "karina_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "karina_fall",
    frames: anims.generateFrameNames("karina_fall", {
      start: 0,
      end: 3,
      prefix: "karina_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "katya_jump",
    frames: anims.generateFrameNames("katya_jump", {
      start: 0,
      end: 3,
      prefix: "katya_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "katya_fall",
    frames: anims.generateFrameNames("katya_fall", {
      start: 0,
      end: 3,
      prefix: "katya_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "ksusha_jump",
    frames: anims.generateFrameNames("ksusha_jump", {
      start: 0,
      end: 3,
      prefix: "ksusha_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "ksusha_fall",
    frames: anims.generateFrameNames("ksusha_fall", {
      start: 0,
      end: 3,
      prefix: "ksusha_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "liza_fall",
    frames: anims.generateFrameNames("liza_fall", {
      start: 0,
      end: 3,
      prefix: "liza_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "liza_jump",
    frames: anims.generateFrameNames("liza_jump", {
      start: 0,
      end: 3,
      prefix: "liza_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "masha_fall",
    frames: anims.generateFrameNames("masha_fall", {
      start: 0,
      end: 3,
      prefix: "masha_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "masha_jump",
    frames: anims.generateFrameNames("masha_jump", {
      start: 0,
      end: 3,
      prefix: "masha_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "natasha_fall",
    frames: anims.generateFrameNames("natasha_fall", {
      start: 0,
      end: 3,
      prefix: "natasha_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "natasha_jump",
    frames: anims.generateFrameNames("natasha_jump", {
      start: 0,
      end: 3,
      prefix: "natasha_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "rusinya_fall",
    frames: anims.generateFrameNames("rusinya_fall", {
      start: 0,
      end: 3,
      prefix: "rusinya_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "rusinya_jump",
    frames: anims.generateFrameNames("rusinya_jump", {
      start: 0,
      end: 3,
      prefix: "rusinya_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "sashenka_fall",
    frames: anims.generateFrameNames("sashenka_fall", {
      start: 0,
      end: 3,
      prefix: "sashenka_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "sashenka_jump",
    frames: anims.generateFrameNames("sashenka_jump", {
      start: 0,
      end: 3,
      prefix: "sashenka_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "savch_fall",
    frames: anims.generateFrameNames("savch_fall", {
      start: 0,
      end: 3,
      prefix: "savch_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "savch_jump",
    frames: anims.generateFrameNames("savch_jump", {
      start: 0,
      end: 3,
      prefix: "savch_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "shu_fall",
    frames: anims.generateFrameNames("shu_fall", {
      start: 0,
      end: 3,
      prefix: "shu_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "shu_jump",
    frames: anims.generateFrameNames("shu_jump", {
      start: 0,
      end: 3,
      prefix: "shu_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "tanya_fall",
    frames: anims.generateFrameNames("tanya_fall", {
      start: 0,
      end: 3,
      prefix: "tanya_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "tanya_jump",
    frames: anims.generateFrameNames("tanya_jump", {
      start: 0,
      end: 3,
      prefix: "tanya_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "vlada_fall",
    frames: anims.generateFrameNames("vlada_fall", {
      start: 0,
      end: 3,
      prefix: "vlada_fall",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "vlada_jump",
    frames: anims.generateFrameNames("vlada_jump", {
      start: 0,
      end: 3,
      prefix: "vlada_jump",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "petal",
    frames: anims.generateFrameNames("petal", {
      start: 0,
      end: 3,
      prefix: "petal",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });
};

export const createKseniaAnims = (anims: Phaser.Animations.AnimationManager) => {
  anims.create({
    key: "ksenia_idle",
    frames: anims.generateFrameNames("ksenia", {
      start: 0,
      end: 4,
      prefix: "ksenia_idle",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "ksenia_run",
    frames: anims.generateFrameNames("ksenia_run", {
      start: 0,
      end: 7,
      prefix: "ksenia_run",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "ksenia_jump",
    frames: anims.generateFrameNames("alexandra_jump", {
      start: 0,
      end: 3,
      prefix: "Char1_Jump-Up",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  anims.create({
    key: "ksenia_down",
    frames: anims.generateFrameNames("ksenia_down", {
      start: 0,
      end: 3,
      prefix: "Char1_Jump-Down",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 20,
  });

  /** Elena */

  anims.create({
    key: "elena_idle",
    frames: anims.generateFrameNames("elena_idle", {
      start: 0,
      end: 4,
      prefix: "Char2_Idle",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "elena_run",
    frames: anims.generateFrameNames("elena_run", {
      start: 0,
      end: 7,
      prefix: "Char2_Run",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "elena_jump",
    frames: anims.generateFrameNames("elena_jump", {
      start: 0,
      end: 3,
      prefix: "Char2_Jump-Up",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "elena_down",
    frames: anims.generateFrameNames("elena_down", {
      start: 0,
      end: 3,
      prefix: "Char2_Jump-Down",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  /** Nat V */
  anims.create({
    key: "natalia_v_idle",
    frames: anims.generateFrameNames("natalia_v_idle", {
      start: 0,
      end: 4,
      prefix: "Char3_Idle",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "natalia_v_run",
    frames: anims.generateFrameNames("natalia_v_run", {
      start: 0,
      end: 7,
      prefix: "Char3_Run",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "natalia_v_jump",
    frames: anims.generateFrameNames("natalia_v_jump", {
      start: 0,
      end: 3,
      prefix: "Char3_Jump-Up",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "natalia_v_down",
    frames: anims.generateFrameNames("natalia_v_down", {
      start: 0,
      end: 3,
      prefix: "Char3_Jump-Down",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  /** Nastya */
  anims.create({
    key: "nastya_idle",
    frames: anims.generateFrameNames("nastya_idle", {
      start: 0,
      end: 4,
      prefix: "Char4_Idle",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "nastya_run",
    frames: anims.generateFrameNames("nastya_run", {
      start: 0,
      end: 7,
      prefix: "Char4_Run",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "nastya_jump",
    frames: anims.generateFrameNames("nastya_jump", {
      start: 0,
      end: 3,
      prefix: "Char4_Jump-Up",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "nastya_down",
    frames: anims.generateFrameNames("nastya_down", {
      start: 0,
      end: 3,
      prefix: "Char4_Jump-Down",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  /** Anna */
  anims.create({
    key: "anna_idle",
    frames: anims.generateFrameNames("anna_idle", {
      start: 0,
      end: 4,
      prefix: "Char5_Idle",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "anna_run",
    frames: anims.generateFrameNames("anna_run", {
      start: 0,
      end: 7,
      prefix: "Char5_Run",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "anna_jump",
    frames: anims.generateFrameNames("anna_jump", {
      start: 0,
      end: 3,
      prefix: "Char5_Jump-Up",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "anna_down",
    frames: anims.generateFrameNames("anna_down", {
      start: 0,
      end: 3,
      prefix: "Char5_Jump-Down",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  /** Natalia P */
  anims.create({
    key: "natalia_p_idle",
    frames: anims.generateFrameNames("natalia_p_idle", {
      start: 0,
      end: 4,
      prefix: "Char6_Idle",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "natalia_p_run",
    frames: anims.generateFrameNames("natalia_p_run", {
      start: 0,
      end: 7,
      prefix: "Char6_Run",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "natalia_p_jump",
    frames: anims.generateFrameNames("natalia_p_jump", {
      start: 0,
      end: 3,
      prefix: "Char6_Jump-Up",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "natalia_p_down",
    frames: anims.generateFrameNames("natalia_p_down", {
      start: 0,
      end: 3,
      prefix: "Char6_Jump-Down",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });
};
