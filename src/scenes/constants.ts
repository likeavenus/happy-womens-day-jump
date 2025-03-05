const createLabel = (scene, text) => {
  return scene.rexUI.add.label({
    width: 40, // Minimum width of round-rectangle
    height: 40, // Minimum height of round-rectangle

    background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x5e92f3),

    text: scene.add.text(0, 0, text, {
      fontSize: "24px",
    }),
    name: text,
    space: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  });
};

export function getDialog(scene: Phaser.Scene) {
  let x = window.innerWidth / 2 - 270;
  let y = 600;
  const dialog = scene.rexUI.add
    .dialog({
      x: x,
      y: y,
      width: 500,

      background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 20, "gray"),

      title: createLabel(scene, "Title").setDraggable(),

      toolbar: [
        // createLabel(scene, 'O'),
        createLabel(scene, "X"),
      ],

      leftToolbar: [
        // createLabel(scene, 'A'),
        // createLabel(scene, 'B')
      ],

      content: createLabel(scene, "Content"),

      // description: createLabel(scene, 'Description'),

      choices: [
        // createLabel(scene, 'Choice0'),
        createLabel(scene, "Choice1"),
        createLabel(scene, "Choice2"),
      ],

      actions: [createLabel(scene, "Action0"), createLabel(scene, "Action1")],

      space: {
        left: 20,
        right: 20,
        top: -20,
        bottom: -20,

        title: 25,
        titleLeft: 30,
        content: 25,
        description: 25,
        descriptionLeft: 20,
        descriptionRight: 20,
        choices: 25,

        toolbarItem: 5,
        choice: 15,
        action: 15,
      },

      expand: {
        title: false,
        // content: false,
        // description: false,
        // choices: false,
        // actions: true,
      },

      align: {
        title: "center",
        // content: 'left',
        // description: 'left',
        // choices: 'left',
        actions: "right", // 'center'|'left'|'right'
      },

      click: {
        mode: "release",
      },
    })
    .setDraggable("background") // Draggable-background
    .layout()
    // .drawBounds(scene.add.graphics(), 0xff0000)
    // .popUp(1000)
    .hide()
    .setDepth(1);

  scene.print = scene.add.text(0, 0, "").setDepth(2);
  dialog
    .on("button.over", function (button, groupName, index, pointer, event) {
      button.getElement("background").setStrokeStyle(1, 0xffffff);
    })
    .on("button.out", function (button, groupName, index, pointer, event) {
      button.getElement("background").setStrokeStyle();
    });

  return dialog;
}

const defaultText =
  "Ура, ты справилась! От всей души поздравляем с 8 марта и хотим презентовать тебе небольшую приятность ❤️ Напиши вожаку стаи секретное сообщение «Я дурею с этой прикормки» для получения 🎁";
// export const greetings = {
//   savch: {
//     text: defaultText,
//   },
//   tanya: {
//     text: defaultText,
//   },
//   rusinya: {
//     text: defaultText,
//   },
//   masha: {
//     text: defaultText,
//   },
//   karina: {
//     text: defaultText,
//   },
//   natasha: {
//     text: defaultText,
//   },
//   shu: {
//     text: defaultText,
//   },
//   katya: {
//     text: defaultText,
//   },
//   vlada: {
//     text: defaultText,
//   },
//   ksusha: {
//     text: defaultText,
//   },
//   sashenka: {
//     text: defaultText,
//   },
//   alexandra: {
//     text: defaultText,
//   },
//   liza: {
//     text: defaultText,
//   },
// };

export const greetings = {
  ksenia: {
    text: "С праздником весны, Ксюша! Пусть каждый день наполнен яркими красками радости, успехов и здоровья вам с малышкой!",
  },
  nastya: {
    text: "Дорогая Настя, поздравляю с восьмым марта! Пусть твои таланты всегда находят заслуженное признание, а жизнь бьёт ключом!",
  },
  anna: {
    text: "Счастья, улыбок и вдохновения тебе, Аня! Пусть каждый день приносит новые возможности и достижения, а игры не перестают радовать!",
  },
  elena: {
    text: "С праздником весны, милая Лена! Пусть профессионализм и умение находить решения вдохновляют всех вокруг!",
  },
  nataliaV: {
    text: "Поздравляю вас с 8 марта, дорогая Наташа! Пусть твой труд всегда оценивается и приносит заслуженные награды! И счастья в личной жизни!",
  },
  nataliaP: {
    text: "Светлых эмоций, тепла и радости тебе, Наташа! Пусть каждый день напоминает о твоей важности и ценности!",
  },
};

export enum COLLISION_CATEGORIES {
  Disabled = 0,
  Platform = 1,
  Player = 2,
  Coin = 8,
  // LeftArm = 8,
  // Vulture = 16,
  // Vases = 32,
}
