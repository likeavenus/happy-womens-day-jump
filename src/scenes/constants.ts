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

export const compliments: string[] = [
  "Ты такая красивая, что даже монетки сами падают!",
  "Умница, ты уже собрала больше монеток, чем у нас в кошельке!",
  "С таким талантом ты можешь собрать все сокровища мира!",
  "Твоя улыбка светлее всех монет вместе взятых!",
  "Ты просто звезда этой игры!",
  "Ты так ловко прыгаешь, что мы боимся, как бы ты не улетела в космос!",
  "С тобой даже игра становится волшебной!",
  "Ты сегодня сияешь ярче, чем все наши лампочки!",
  "Ты — наша королева прыжков!",
  "Вожак стаи восхищается твоей смелостью!",
  "Ты настолько крутая, что монетки бросаются тебе в ноги!",
  "Ты собираешь монеты быстрее, чем мы завариваем чай!",
  "Ты вдохновляешь нас на подвиги!",
  "Ты точно знаешь, как сделать день лучше!",
  "Твой стиль игры — просто огонь!",
  "Вожак стаи зовет тебя своей лучшей охотницей за монетками!",
  "Ты делаешь игру еще интереснее!",
  "Ты как солнечный лучик в нашем сером дне!",
  "Ты умеешь превращать игру в праздник!",
  "Ты заставляешь нас гордиться нашей стаей!",
  "Вау! Покорила сердца всей стаи своими прыжками!",
  "Ауф! Ты не просто играешь, ты творишь магию!",
  "Вожак стаи заявляет: ты — лучший игрок дня!",
  "Ты приносишь радость везде, где появляешься!",
  "Ты обладаешь невероятной грацией и легкостью!",
  "Ты заряжаешь нас энергией своим азартом!",
  "Ты словно воплощение весны в этой игре!",
  "Вожак стаи клянется: ты — самая очаровательный игрок дня!",
  "Ты делаешь мир вокруг себя ярче!",
  "Ты — наше сокровище, которое мы нашли в этой игре!",
  "Я бы с тобой попрыгал за монетками!",
  "Вечно бы смотрел как ты прыгаешь! Умница!",
  "Ты — весенний ветер, который приносит радость и тепло!",
  "Сегодня твой день, и мы радуемся вместе с тобой!",
  "Ты расцветаешь ярче любых цветов!",
  "В этот чудесный день ты сияешь особенно ярко!",
  "Ты — символ весны и красоты!",
  "Вожак стаи поздравляет тебя с праздником и желает море счастья!",
  "Ты — настоящее весеннее чудо!",
  "В этот день хочется пожелать тебе столько же радости, сколько монеток ты уже собрала!",
  "Ты украшаешь этот день своим присутствием!",
  "Ты — весна в наших сердцах!",
  "Вожак стаи шлет тебе весенние поцелуи и добрые пожелания!",
];

const defaultText =
  "Ура, ты справилась! От всей души поздравляем с 8 марта и хотим презентовать тебе небольшую приятность ❤️ Напиши вожаку стаи секретное сообщение «Я дурею с этой прикормки» для получения 🎁. Что бы продолжить игру, нажми на экран!";
export const greetings2 = {
  savch: {
    text: defaultText,
  },
  tanya: {
    text: defaultText,
  },
  rusinya: {
    text: defaultText,
  },
  masha: {
    text: defaultText,
  },
  karina: {
    text: defaultText,
  },
  natasha: {
    text: defaultText,
  },
  shu: {
    text: defaultText,
  },
  katya: {
    text: defaultText,
  },
  vlada: {
    text: defaultText,
  },
  ksusha: {
    text: defaultText,
  },
  sashenka: {
    text: defaultText,
  },
  alexandra: {
    text: defaultText,
  },
  liza: {
    text: defaultText,
  },
};

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
  Bat = 16,
  Flower = 32,
  // LeftArm = 8,
  // Vulture = 16,
  // Vases = 32,
}
