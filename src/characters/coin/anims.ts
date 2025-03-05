export const createCoinAnims = (anims: Phaser.Animations.AnimationManager) => {
  anims.create({
    key: "coin",
    frames: anims.generateFrameNames("coin", {
      start: 0,
      end: 4,
      prefix: "MonedaD",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });
};
