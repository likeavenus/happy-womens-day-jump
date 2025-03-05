var t=Object.defineProperty,e=(e,a,s)=>((e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s)(e,"symbol"!=typeof a?a+"":a,s);import{P as a}from"./phaser-Co6Ukw23.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const a of t)if("childList"===a.type)for(const t of a.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();class s extends a.Scene{constructor(){super("preloader")}onLoad(){const t=this.add.text(this.sys.canvas.width/2-50,this.sys.canvas.height/2,"Загрузка...",{fontSize:18}),e=this.add.text(t.x+20,t.y+20,"0");this.load.on("progress",(function(t){e.text=`${Math.floor(100*t)}%`}))}preload(){this.onLoad(),this.load.image("happy-ground","assets/happy/happy.png"),this.load.tilemapTiledJSON("happy-ground-tilemap","assets/happy/happy-ground.json"),this.load.image("background_1","assets/happy/background_layer_1.png"),this.load.image("background_2","assets/happy/background_layer_2.png"),this.load.image("platform","assets/happy/objects/platform.png"),this.load.image("paper","assets/happy/objects/paper.png"),this.load.image("star","assets/happy/objects/star3.png"),this.load.atlas("ksenia","assets/happy/girls/Ksenia/ksenia_idle.png","assets/happy/girls/Ksenia/ksenia_idle.json"),this.load.atlas("ksenia_run","assets/happy/girls/Ksenia/ksenia_run.png","assets/happy/girls/Ksenia/ksenia_run.json"),this.load.atlas("ksenia_jump","assets/happy/girls/Ksenia/ksenia_jump.png","assets/happy/girls/Ksenia/ksenia_jump.json"),this.load.atlas("ksenia_down","assets/happy/girls/Ksenia/ksenia_down.png","assets/happy/girls/Ksenia/ksenia_down.json"),this.load.atlas("elena_idle","assets/happy/girls/Elena/elena_idle.png","assets/happy/girls/Elena/elena_idle.json"),this.load.atlas("elena_run","assets/happy/girls/Elena/elena_run.png","assets/happy/girls/Elena/elena_run.json"),this.load.atlas("elena_jump","assets/happy/girls/Elena/elena_jump.png","assets/happy/girls/Elena/elena_jump.json"),this.load.atlas("elena_down","assets/happy/girls/Elena/elena_down.png","assets/happy/girls/Elena/elena_down.json"),this.load.atlas("natalia_v_idle","assets/happy/girls/NataliaV/natalia_v_idle.png","assets/happy/girls/NataliaV/natalia_v_idle.json"),this.load.atlas("natalia_v_run","assets/happy/girls/NataliaV/natalia_v_run.png","assets/happy/girls/NataliaV/natalia_v_run.json"),this.load.atlas("natalia_v_jump","assets/happy/girls/NataliaV/natalia_v_jump.png","assets/happy/girls/NataliaV/natalia_v_jump.json"),this.load.atlas("natalia_v_down","assets/happy/girls/NataliaV/natalia_v_down.png","assets/happy/girls/NataliaV/natalia_v_down.json"),this.load.atlas("nastya_idle","assets/happy/girls/Nastya/nastya_idle.png","assets/happy/girls/Nastya/nastya_idle.json"),this.load.atlas("nastya_run","assets/happy/girls/Nastya/nastya_run.png","assets/happy/girls/Nastya/nastya_run.json"),this.load.atlas("nastya_jump","assets/happy/girls/Nastya/nastya_jump.png","assets/happy/girls/Nastya/nastya_jump.json"),this.load.atlas("nastya_down","assets/happy/girls/Nastya/nastya_down.png","assets/happy/girls/Nastya/nastya_down.json"),this.load.atlas("anna_idle","assets/happy/girls/Anna/anna_idle.png","assets/happy/girls/Anna/anna_idle.json"),this.load.atlas("anna_run","assets/happy/girls/Anna/anna_run.png","assets/happy/girls/Anna/anna_run.json"),this.load.atlas("anna_jump","assets/happy/girls/Anna/anna_jump.png","assets/happy/girls/Anna/anna_jump.json"),this.load.atlas("anna_down","assets/happy/girls/Anna/anna_down.png","assets/happy/girls/Anna/anna_down.json"),this.load.atlas("natalia_p_idle","assets/happy/girls/NataliaP/natalia_p_idle.png","assets/happy/girls/NataliaP/natalia_p_idle.json"),this.load.atlas("natalia_p_run","assets/happy/girls/NataliaP/natalia_p_run.png","assets/happy/girls/NataliaP/natalia_p_run.json"),this.load.atlas("natalia_p_jump","assets/happy/girls/NataliaP/natalia_p_jump.png","assets/happy/girls/NataliaP/natalia_p_jump.json"),this.load.atlas("natalia_p_down","assets/happy/girls/NataliaP/natalia_p_down.png","assets/happy/girls/NataliaP/natalia_p_down.json"),this.load.atlas("chest","assets/happy/objects/Chests.png","assets/happy/objects/Chests.json"),this.load.atlas("coin","assets/happy/objects/coin/coin.png","assets/happy/objects/coin/coin.json"),this.load.image("flare","assets/happy/white-flare.png"),this.load.audio("music","assets/happy/scott-buckley-reverie(chosic.com).mp3")}create(){this.scene.start("Menu")}}var i=(t=>(t[t.Disabled=0]="Disabled",t[t.Platform=1]="Platform",t[t.Player=2]="Player",t[t.Coin=8]="Coin",t))(i||{});const n=[{name:"Ксения Ротозей",greetings:"С праздником весны, Ксюша! Пусть каждый день наполнен яркими красками радости, успехов и здоровья вам с малышкой!",key:"ksenia"},{name:"Анна Величко",greetings:"Счастья, улыбок и вдохновения тебе, Аня! Пусть каждый день приносит новые возможности и достижения, а игры не перестают радовать!",key:"anna"},{name:"Наталья Поветкина",greetings:"Светлых эмоций, тепла и радости тебе, Наташа! Пусть каждый день напоминает о твоей важности и ценности!",key:"natalia_p"},{name:"Анастасия Петросян",greetings:"Дорогая Настя, поздравляю с восьмым марта! Пусть твои таланты всегда находят заслуженное признание, а жизнь бьёт ключом!",key:"nastya"},{name:"Наталья Войлошникова",greetings:"Поздравляю вас с 8 марта, дорогая Наташа! Пусть твой труд всегда оценивается и приносит заслуженные награды! И счастья в личной жизни!",key:"natalia_v"},{name:"Елена Никифорова",greetings:"С праздником весны, милая Лена! Пусть профессионализм и умение находить решения вдохновляют всех вокруг!",key:"elena"}];class r extends a.Scene{constructor(){super("Menu"),e(this,"window"),e(this,"text"),e(this,"state","none"),e(this,"startGame",(()=>{this.scene.start("Game")}))}create(){const t=this.cameras.main.width/2;this.cards=[],n.forEach(((e,a)=>{const s=100+120*a,i=this.add.rectangle(t,s,400,100,16777215,1);i.setInteractive(),i.on("pointerdown",(()=>{localStorage.setItem("girlKey",e.key),localStorage.setItem("greetings",e.greetings),this.startGame()}));const n=this.add.particles(0,0,"flare",{speed:24,lifespan:1500,quantity:5,scale:{start:.4,end:0},emitting:!1,emitZone:{type:"edge",source:i.getBounds(),quantity:42},duration:200});i.on("pointerover",(()=>{n.start()})),this.add.text(i.x-i.width/2+16,i.y,e.name,{color:"pink"}),this.cards.push(i)}))}}class l extends a.Physics.Matter.Sprite{constructor(t,a,s,n,r,l){var o;super(t.matter.world,a,s,n,l,{label:"girl",frictionAir:.006}),e(this,"direction",3),e(this,"hp",100),e(this,"isTouchingGround",!1),e(this,"text"),e(this,"girlSpriteKey",""),this.setData("label","girl"),this.flipX=!0,this.name=r,this.text=this.scene.add.text(this.x,this.y-20,this.name,{color:"#3807c4",fontFamily:"Arial",fontStyle:"bold",fontSize:22,align:"center"}).setOrigin(.5,.5),this.text.setDepth(11).setAlpha(0),this.text.postFX.addGlow(16777215,6,0,!1,.1,24),this.setRectangle(27,45),this.setOrigin(.5,.43),this.girlSpriteKey=localStorage.getItem("girlKey"),this.setScale(2),this.setFixedRotation(),this.setDepth(7),this.label="girl",this.scene.add.existing(this),(o=this.scene.anims).create({key:"ksenia_idle",frames:o.generateFrameNames("ksenia",{start:0,end:4,prefix:"ksenia_idle",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"ksenia_run",frames:o.generateFrameNames("ksenia_run",{start:0,end:7,prefix:"ksenia_run",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"ksenia_jump",frames:o.generateFrameNames("ksenia_jump",{start:0,end:3,prefix:"Char1_Jump-Up",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"ksenia_down",frames:o.generateFrameNames("ksenia_down",{start:0,end:3,prefix:"Char1_Jump-Down",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"elena_idle",frames:o.generateFrameNames("elena_idle",{start:0,end:4,prefix:"Char2_Idle",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"elena_run",frames:o.generateFrameNames("elena_run",{start:0,end:7,prefix:"Char2_Run",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"elena_jump",frames:o.generateFrameNames("elena_jump",{start:0,end:3,prefix:"Char2_Jump-Up",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"elena_down",frames:o.generateFrameNames("elena_down",{start:0,end:3,prefix:"Char2_Jump-Down",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"natalia_v_idle",frames:o.generateFrameNames("natalia_v_idle",{start:0,end:4,prefix:"Char3_Idle",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"natalia_v_run",frames:o.generateFrameNames("natalia_v_run",{start:0,end:7,prefix:"Char3_Run",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"natalia_v_jump",frames:o.generateFrameNames("natalia_v_jump",{start:0,end:3,prefix:"Char3_Jump-Up",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"natalia_v_down",frames:o.generateFrameNames("natalia_v_down",{start:0,end:3,prefix:"Char3_Jump-Down",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"nastya_idle",frames:o.generateFrameNames("nastya_idle",{start:0,end:4,prefix:"Char4_Idle",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"nastya_run",frames:o.generateFrameNames("nastya_run",{start:0,end:7,prefix:"Char4_Run",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"nastya_jump",frames:o.generateFrameNames("nastya_jump",{start:0,end:3,prefix:"Char4_Jump-Up",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"nastya_down",frames:o.generateFrameNames("nastya_down",{start:0,end:3,prefix:"Char4_Jump-Down",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"anna_idle",frames:o.generateFrameNames("anna_idle",{start:0,end:4,prefix:"Char5_Idle",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"anna_run",frames:o.generateFrameNames("anna_run",{start:0,end:7,prefix:"Char5_Run",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"anna_jump",frames:o.generateFrameNames("anna_jump",{start:0,end:3,prefix:"Char5_Jump-Up",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"anna_down",frames:o.generateFrameNames("anna_down",{start:0,end:3,prefix:"Char5_Jump-Down",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"natalia_p_idle",frames:o.generateFrameNames("natalia_p_idle",{start:0,end:4,prefix:"Char6_Idle",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"natalia_p_run",frames:o.generateFrameNames("natalia_p_run",{start:0,end:7,prefix:"Char6_Run",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"natalia_p_jump",frames:o.generateFrameNames("natalia_p_jump",{start:0,end:3,prefix:"Char6_Jump-Up",suffix:".png"}),repeat:-1,frameRate:10}),o.create({key:"natalia_p_down",frames:o.generateFrameNames("natalia_p_down",{start:0,end:3,prefix:"Char6_Jump-Down",suffix:".png"}),repeat:-1,frameRate:10}),this.anims.play(`${this.girlSpriteKey}_idle`),this.emitter=this.scene.add.particles(0,0,"flare",{speed:24,lifespan:1500,quantity:10,scale:{start:.4,end:0},emitting:!1,emitZone:{type:"edge",source:this.getBounds(),quantity:42},duration:500}),this.emitter.setDepth(7),this.setOnCollide((t=>{this.isTouchingGround=!0,this.emitter.setPosition(this.x,this.y+this.height/2),this.emitter.start()})),this.setCollisionCategory(i.Player),this.setCollidesWith([i.Disabled,i.Coin]),this.setName("girl")}update(t){const{left:e,right:s,up:i,down:n,space:r}=t;this.emitter.copyPosition(this.x,this.y),this.body.velocity.y<0?(this.anims.play(`${this.girlSpriteKey}_jump`,!0),s.isDown?(this.setVelocityX(4),this.flipX=!0):e.isDown&&(this.setVelocityX(-4),this.flipX=!1)):this.body.velocity.y>0?(this.anims.play(`${this.girlSpriteKey}_down`,!0),s.isDown?(this.setVelocityX(4),this.flipX=!0):e.isDown&&(this.setVelocityX(-4),this.flipX=!1)):e.isDown?(this.setVelocityX(-4),this.flipX=!1,this.anims.play(`${this.girlSpriteKey}_run`,!0)):s.isDown?(this.setVelocityX(4),this.flipX=!0,this.anims.play(`${this.girlSpriteKey}_run`,!0)):this.anims.play(`${this.girlSpriteKey}_idle`,!0),a.Input.Keyboard.JustDown(i)&&this.isTouchingGround&&(this.setVelocityY(-15),this.isTouchingGround=!1),this.text.copyPosition({x:this.x,y:this.y-60}),this.y>3e3&&(this.setPosition(p.x,this.scene.firstPlatformY-200),this.setVelocityY(-10))}}class o extends a.Physics.Matter.Image{constructor(t,a,s,n,r){super(t.matter.world,a,s,n,r),e(this,"startY",0),e(this,"startX",0),this.startX=a,this.startY=s,this.setStatic(!0),this.setDepth(7),this.setFixedRotation(),this.setFriction(1,0,1/0),this.setIgnoreGravity(!0),this.setData("label","platform"),this.setCollisionCategory(i.Platform),this.setCollidesWith(i.Player),this.scene.add.existing(this)}moveVertically(t){this.scene.tweens.addCounter({from:0,to:-900,duration:t,ease:a.Math.Easing.Sine.InOut,repeat:-1,yoyo:!0,onUpdate:(t,e)=>{const a=this.startY+e.value,s=a-this.y;this.y=a,this.setVelocityY(s)}})}moveHorizontally(t,e){this.scene.tweens.addCounter({from:0,to:-e,duration:t,ease:a.Math.Easing.Sine.InOut,repeat:-1,yoyo:!0,onUpdate:(t,e)=>{const a=this.startX+e.value,s=a-this.x;this.x=a,this.setVelocityX(s)}})}}const h=a.Math.DegToRad(-180),p={x:550,y:2200};class d extends a.Scene{constructor(){super("Game"),e(this,"playerController",{blocked:{left:!1,right:!1,bottom:!1},numTouching:{left:0,right:0,bottom:0},sensors:{bottom:null,left:null,right:null}}),e(this,"hook"),e(this,"lineGroup"),e(this,"cursors"),e(this,"stars"),e(this,"platform"),e(this,"platform2"),e(this,"platform3"),e(this,"isMovingLeft",!1),e(this,"isMovingRight",!1),e(this,"moveSpeed",5),e(this,"halfWidth",0),e(this,"platforms"),e(this,"coins"),e(this,"coinCount",0),e(this,"coinText"),e(this,"maxPlatforms",10),e(this,"platformDistance",300),e(this,"lastPlatformY",0),e(this,"firstPlatformY",0),e(this,"chest"),e(this,"starsSummary",0),e(this,"lizard"),e(this,"isTouchingGround",!1),e(this,"level",1),e(this,"loadNextLevel",!1),e(this,"showDialog",!1),e(this,"dialog"),e(this,"fish"),e(this,"dialogLevel",0),e(this,"emitter",new a.Events.EventEmitter),e(this,"water"),e(this,"stick"),e(this,"music"),e(this,"backgrounds",[]),e(this,"velocityX",10),e(this,"collisionCategory1",1),e(this,"collisionCategory2",2),e(this,"collisionCategory3",4),e(this,"collisionCategory4",8),e(this,"collisionWaterCategory",5)}preload(){this.cursors=this.input.keyboard.createCursorKeys()}create2(){const t=a.Physics.Matter.Matter,e=this.lizard.width,s=this.lizard.height;this.lizard.x,this.lizard.y,this.playerController.sensors.bottom=t.Bodies.rectangle(0,s/2,.75*e,5,{isSensor:!0,label:"bottomSensor"}),this.playerController.sensors.left=t.Bodies.rectangle(.45*-e,0,5,.25*s,{isSensor:!0,label:"leftSensor"}),this.playerController.sensors.right=t.Bodies.rectangle(.45*e,0,5,.25*s,{isSensor:!0,label:"rightSensor"}),t.Body.create({parts:[this.lizard.body,this.playerController.sensors.bottom,this.playerController.sensors.left,this.playerController.sensors.right],friction:.01,restitution:.05}),this.matter.world.on("beforeupdate",(()=>{this.playerController.numTouching.left=0,this.playerController.numTouching.right=0,this.playerController.numTouching.bottom=0})),this.matter.world.on("collisionactive",(t=>{const e=this.lizard.body,a=this.playerController.sensors.left,s=this.playerController.sensors.right,i=this.playerController.sensors.bottom;for(let n=0;n<t.pairs.length;n++){const r=t.pairs[n].bodyA,l=t.pairs[n].bodyB;r!==e&&l!==e&&(r===i||l===i?this.playerController.numTouching.bottom+=1:r===a&&l.isStatic||l===a&&r.isStatic?this.playerController.numTouching.left+=1:(r===s&&l.isStatic||l===s&&r.isStatic)&&(this.playerController.numTouching.right+=1))}})),this.matter.world.on("afterupdate",(()=>{this.playerController.blocked.right=this.playerController.numTouching.right>0,this.playerController.blocked.left=this.playerController.numTouching.left>0,this.playerController.blocked.bottom=this.playerController.numTouching.bottom>0}))}handleTouchInput(t){t.x<this.halfWidth?(this.isMovingLeft=!0,this.isMovingRight=!1):(this.isMovingLeft=!1,this.isMovingRight=!0)}create(){var t;this.coins=this.add.group(),(t=this.anims).create({key:"coin",frames:t.generateFrameNames("coin",{start:0,end:4,prefix:"MonedaD",suffix:".png"}),repeat:-1,frameRate:10}),this.originalWidth=this.scale.width,this.originalHeight=this.scale.height,this.platforms=this.add.group(),this.halfWidth=this.scale.width/2,this.input.addPointer(1),this.input.on("pointerdown",(t=>{this.handleTouchInput(t)})),this.input.on("pointermove",(t=>{t.isDown&&(this.handleTouchInput(t),console.log("pointer:",t.x))})),this.input.on("pointerup",(()=>{this.isMovingLeft=!1,this.isMovingRight=!1})),this.coinText=this.add.text(20,20,"Монеты: 0",{fontSize:"24px",fill:"#FFD700",fontFamily:"Arial",stroke:"#000",strokeThickness:4}).setScrollFactor(0).setDepth(1e3),this.add.existing(this.coinText),this.sound.pauseOnBlur=!1,this.music=this.sound.add("music",{volume:.2,loop:!0}),this.sound.locked?this.sound.once(a.Sound.Events.UNLOCKED,(()=>{this.music.play()})):this.music.play(),this.game.events.on(a.Core.Events.BLUR,(()=>{})),document.addEventListener("visibilitychange",(()=>{console.log("visibilitychange"),document.hidden})),this.tweener={x:h},this.GROUND_COLLISION_GROUP=this.matter.world.nextCategory();const e=localStorage.getItem("happyName");let s;var i;(i=s||(s={})).Ksenia="ksenia",i.Elena="elena";const n=localStorage.getItem("girlKey");this.lizard=new l(this,p.x,p.y,n,e,{label:"girl"}),this.create2(),this.createPlatform(p.x,p.y+200),this.createPlatform(p.x,p.y),this.createPlatform(a.Math.Between(p.x-150,p.x+150),p.y-200),this.generatePlatforms(),this.generatePlatforms(),this.matter.world.on("collisionstart",(t=>{this.handleCollision(t),this.handleCoinCollision(t)}),this),this.time.addEvent({delay:1e3,callback:this.generatePlatforms,callbackScope:this,loop:!0}),this.time.addEvent({delay:1e3,callback:()=>this.createCoin(a.Math.Between(p.x-150,p.x+150),this.lastPlatformY-60),callbackScope:this,loop:!0}),this.cameras.main.startFollow(this.lizard);const{width:r,height:o}=this.scale,d=this.add.graphics();d.fillStyle(0,1),this.backgrounds.push({ratioX:.07,ratioY:.009,sprite:this.add.tileSprite(0,0,r,o,"background_1").setOrigin(0,0).setScrollFactor(0,0).setScale(3.5,4)},{ratioX:.09,ratioY:.02,sprite:this.add.tileSprite(0,-120,r,o,"background_2").setOrigin(0,0).setScrollFactor(0,0).setScale(3.5,4)}),this.backgrounds.forEach((t=>{d.fillRect(0,0,this.cameras.main.width,this.cameras.main.height)})),this.add.graphics(),this.matter.world.on("collisionend",((t,e,a)=>{t.pairs.some((t=>"water"==t.bodyA.label&&"hook"==t.bodyB.label))})),this.lights.enable(),this.lights.setAmbientColor(8421504),this.events.on("resume",(()=>{})),this.light=this.lights.addLight(this.lizard.x,this.lizard.y,512).setIntensity(2),this.matter.world.update60Hz(),this.cameras.main.setFollowOffset(-30,80)}update(t,e){for(let a=0;a<this.backgrounds.length;++a){const t=this.backgrounds[a];t.sprite&&(t.sprite.tilePositionX=this.cameras.main.scrollX*t.ratioX)}this.light.x=this.lizard.x,this.light.y=this.lizard.y,this.cleanPlatforms(),this.updatePlatformCollisions(),this.checkPlayerHeight(),this.cursors,this.lizard.update(this.cursors),this.isMovingLeft?(this.lizard.flipX=!1,this.lizard.setVelocityX(-this.moveSpeed)):this.isMovingRight?(this.lizard.flipX=!0,this.lizard.setVelocityX(this.moveSpeed)):this.lizard.setVelocityX(.9*this.lizard.body.velocity.x)}createPlatform(t,e){var a,s;const i=new o(this,t,e,"platform",{});this.platforms.add(i),this.lastPlatformY=e,this.firstPlatformY=null==(s=null==(a=this.platforms.getChildren())?void 0:a.at)?void 0:s.call(a,0).y}generatePlatforms(){const t=a.Math.Between(p.x-150,p.x+150),e=this.lastPlatformY-a.Math.Between(300,250);this.createPlatform(t,e),this.lastPlatformY=e}updatePlatformCollisions(){const t=this.lizard.body.velocity.y<0;this.lizard.body.velocity.x,this.lizard.body.velocity.x,t?this.lizard.setCollidesWith([i.Disabled,i.Coin]):this.lizard.setCollidesWith([i.Platform,i.Coin])}createCoin(t,e){const a=this.matter.add.sprite(t,e,"coin",void 0,{label:"coin"});a.setScale(2),a.setIgnoreGravity(!0),a.setBounce(.5),a.setData("label","coin"),a.anims.play("coin"),a.setCollisionCategory(i.Coin),a.setCollidesWith([i.Player]),this.coins.add(a)}handleCollision(t){t.pairs.forEach((t=>{const e=t.bodyA,a=t.bodyB,s=e.gameObject,i=a.gameObject,n=s&&"girl"===s.getData("label"),r=s&&"platform"===s.getData("label"),l=i&&"girl"===i.getData("label"),o=i&&"platform"===i.getData("label");(n&&o||l&&r)&&this.lizard.body.velocity.y>0&&this.lizard.setVelocityY(-17)}))}cleanPlatforms(){this.platforms.getChildren().forEach((t=>{t.y>this.cameras.main.scrollY+1100&&(console.log("DESTROY PLATFORM:",t),t.destroy())}))}cleanCoins(){this.coins.getChildren().forEach((t=>{t.y>this.cameras.main.scrollY+1100&&(console.log("DESTROY PLATFORM:",t),t.destroy())}))}checkPlayerHeight(){this.cameras.main.setScroll(0,this.lizard.y-200)}handleCoinCollision(t){t.pairs.forEach((t=>{const e=t.bodyA,a=t.bodyB,s=e.gameObject,i=a.gameObject;s&&s.getData("label"),s&&s.getData("label"),i&&i.getData("label"),i&&i.getData("label");const n=[e,a].find((t=>{var e;return"coin"===(null==(e=null==t?void 0:t.gameObject)?void 0:e.getData("label"))})),r=[e,a].find((t=>{var e;return"girl"===(null==(e=null==t?void 0:t.gameObject)?void 0:e.getData("label"))}));if(n&&r){const t=n.gameObject;this.coinCount++,this.coinText.setText(`Монеты: ${this.coinCount}`),t.destroy(!0)}}))}}const c={type:a.WEBGL,canvas:document.querySelector("#phaser"),fps:{limit:140},scale:{mode:a.Scale.RESIZE,autoCenter:a.Scale.CENTER_BOTH},physics:{default:"matter",matter:{gravity:{y:1}}},scene:[s,r,d]};new a.Game(c);
