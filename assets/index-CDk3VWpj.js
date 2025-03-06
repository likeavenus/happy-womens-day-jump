var a=Object.defineProperty,t=(t,s,e)=>((t,s,e)=>s in t?a(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e)(t,"symbol"!=typeof s?s+"":s,e);import{P as s}from"./phaser-Co6Ukw23.js";!function(){const a=document.createElement("link").relList;if(!(a&&a.supports&&a.supports("modulepreload"))){for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver((a=>{for(const s of a)if("childList"===s.type)for(const a of s.addedNodes)"LINK"===a.tagName&&"modulepreload"===a.rel&&t(a)})).observe(document,{childList:!0,subtree:!0})}function t(a){if(a.ep)return;a.ep=!0;const t=function(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),"use-credentials"===a.crossOrigin?t.credentials="include":"anonymous"===a.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(a);fetch(a.href,t)}}();class e extends s.Scene{constructor(){super("preloader")}onLoad(){const a=this.add.text(this.sys.canvas.width/2-50,this.sys.canvas.height/2,"Загрузка...",{fontSize:18}),t=this.add.text(a.x+20,a.y+20,"0");this.load.on("progress",(function(a){t.text=`${Math.floor(100*a)}%`}))}preload(){this.onLoad(),this.load.image("happy-ground","assets/happy/happy.png"),this.load.tilemapTiledJSON("happy-ground-tilemap","assets/happy/happy-ground.json"),this.load.image("background_1","assets/happy/background_layer_1.png"),this.load.image("background_2","assets/happy/background_layer_2.png"),this.load.image("platform","assets/happy/objects/platform.png"),this.load.image("paper","assets/happy/objects/paper.png"),this.load.image("star","assets/happy/objects/star3.png"),this.load.atlas("alexandra_fall","assets/happy/womens/alexandra_fall.png","assets/happy/womens/alexandra_fall.json"),this.load.atlas("alexandra_jump","assets/happy/womens/alexandra_jump.png","assets/happy/womens/alexandra_jump.json"),this.load.atlas("karina_fall","assets/happy/womens/karina_fall.png","assets/happy/womens/karina_fall.json"),this.load.atlas("karina_jump","assets/happy/womens/karina_jump.png","assets/happy/womens/karina_jump.json"),this.load.atlas("katya_fall","assets/happy/womens/katya_fall.png","assets/happy/womens/katya_fall.json"),this.load.atlas("katya_jump","assets/happy/womens/katya_jump.png","assets/happy/womens/katya_jump.json"),this.load.atlas("ksusha_fall","assets/happy/womens/ksusha_fall.png","assets/happy/womens/ksusha_fall.json"),this.load.atlas("ksusha_jump","assets/happy/womens/ksusha_jump.png","assets/happy/womens/ksusha_jump.json"),this.load.atlas("liza_fall","assets/happy/womens/liza_fall.png","assets/happy/womens/liza_fall.json"),this.load.atlas("liza_jump","assets/happy/womens/liza_jump.png","assets/happy/womens/liza_jump.json"),this.load.atlas("masha_fall","assets/happy/womens/masha_fall.png","assets/happy/womens/masha_fall.json"),this.load.atlas("masha_jump","assets/happy/womens/masha_jump.png","assets/happy/womens/masha_jump.json"),this.load.atlas("natasha_fall","assets/happy/womens/natasha_fall.png","assets/happy/womens/natasha_fall.json"),this.load.atlas("natasha_jump","assets/happy/womens/natasha_jump.png","assets/happy/womens/natasha_jump.json"),this.load.atlas("rusinya_fall","assets/happy/womens/rusinya_fall.png","assets/happy/womens/rusinya_fall.json"),this.load.atlas("rusinya_jump","assets/happy/womens/rusinya_jump.png","assets/happy/womens/rusinya_jump.json"),this.load.atlas("sashenka_fall","assets/happy/womens/sashenka_fall.png","assets/happy/womens/sashenka_fall.json"),this.load.atlas("sashenka_jump","assets/happy/womens/sashenka_jump.png","assets/happy/womens/sashenka_jump.json"),this.load.atlas("savch_fall","assets/happy/womens/savch_fall.png","assets/happy/womens/savch_fall.json"),this.load.atlas("savch_jump","assets/happy/womens/savch_jump.png","assets/happy/womens/savch_jump.json"),this.load.atlas("shu_fall","assets/happy/womens/shu_fall.png","assets/happy/womens/shu_fall.json"),this.load.atlas("shu_jump","assets/happy/womens/shu_jump.png","assets/happy/womens/shu_jump.json"),this.load.atlas("tanya_fall","assets/happy/womens/tanya_fall.png","assets/happy/womens/tanya_fall.json"),this.load.atlas("tanya_jump","assets/happy/womens/tanya_jump.png","assets/happy/womens/tanya_jump.json"),this.load.atlas("vlada_fall","assets/happy/womens/vlada_fall.png","assets/happy/womens/vlada_fall.json"),this.load.atlas("vlada_jump","assets/happy/womens/vlada_jump.png","assets/happy/womens/vlada_jump.json"),this.load.atlas("anna_idle","assets/happy/girls/Anna/anna_idle.png","assets/happy/girls/Anna/anna_idle.json"),this.load.atlas("anna_run","assets/happy/girls/Anna/anna_run.png","assets/happy/girls/Anna/anna_run.json"),this.load.atlas("anna_jump","assets/happy/girls/Anna/anna_jump.png","assets/happy/girls/Anna/anna_jump.json"),this.load.atlas("anna_down","assets/happy/girls/Anna/anna_down.png","assets/happy/girls/Anna/anna_down.json"),this.load.atlas("natalia_p_idle","assets/happy/girls/NataliaP/natalia_p_idle.png","assets/happy/girls/NataliaP/natalia_p_idle.json"),this.load.atlas("natalia_p_run","assets/happy/girls/NataliaP/natalia_p_run.png","assets/happy/girls/NataliaP/natalia_p_run.json"),this.load.atlas("natalia_p_jump","assets/happy/girls/NataliaP/natalia_p_jump.png","assets/happy/girls/NataliaP/natalia_p_jump.json"),this.load.atlas("natalia_p_down","assets/happy/girls/NataliaP/natalia_p_down.png","assets/happy/girls/NataliaP/natalia_p_down.json"),this.load.atlas("chest","assets/happy/objects/Chests.png","assets/happy/objects/Chests.json"),this.load.atlas("coin","assets/happy/objects/coin/coin.png","assets/happy/objects/coin/coin.json"),this.load.image("flare","assets/happy/white-flare.png"),this.load.audio("music","assets/happy/scott-buckley-reverie(chosic.com).mp3")}create(){this.scene.start("Menu")}}const i="Ура, ты справилась! От всей души поздравляем с 8 марта и хотим презентовать тебе небольшую приятность ❤️ Напиши вожаку стаи секретное сообщение «Я дурею с этой прикормки» для получения 🎁",l=i,n=i,r=i,o=i,h=i,p=i,m=i,d=i,c=i,f=i,y=i,g=i;var u=(a=>(a[a.Disabled=0]="Disabled",a[a.Platform=1]="Platform",a[a.Player=2]="Player",a[a.Coin=8]="Coin",a))(u||{});const _=[{name:"Савч",greetings:l,key:"savch"},{name:"Русиня",greetings:r,key:"rusinya"},{name:"Наташа",greetings:p,key:"natasha"},{name:"Таня",greetings:n,key:"tanya"},{name:"Карина",greetings:h,key:"karina"},{name:"Маша",greetings:o,key:"masha"},{name:"Шу",greetings:o,key:"shu"},{name:"Катя",greetings:m,key:"katya"},{name:"Влада",greetings:d,key:"vlada"},{name:"Ксюша",greetings:c,key:"ksusha"},{name:"Сашенька",greetings:f,key:"sashenka"},{name:"Александра",greetings:y,key:"alexandra"},{name:"Лиза",greetings:g,key:"liza"}];class j extends s.Scene{constructor(){super("Menu"),t(this,"window"),t(this,"text"),t(this,"state","none"),t(this,"startGame",(()=>{this.scene.start("Game")}))}create(){const a=this.cameras.main.width/2;this.cards=[],_.forEach(((t,s)=>{const e=24+60*s,i=this.add.rectangle(a,e,400,40,16777215,1);i.setInteractive(),i.on("pointerdown",(()=>{localStorage.setItem("girlKey",t.key),localStorage.setItem("greetings",t.greetings),this.startGame()}));const l=this.add.particles(0,0,"flare",{speed:24,lifespan:1500,quantity:5,scale:{start:.4,end:0},emitting:!1,emitZone:{type:"edge",source:i.getBounds(),quantity:42},duration:200});i.on("pointerover",(()=>{l.start()})),this.add.text(i.x-i.width/2+16,i.y-5,`${t.name} 🌺`,{color:"pink",fontSize:22}),this.cards.push(i)}))}}class k extends s.Physics.Matter.Sprite{constructor(a,s,e,i,l,n){var r;super(a.matter.world,s,e,i,n,{label:"girl",frictionAir:.006}),t(this,"direction",3),t(this,"hp",100),t(this,"isTouchingGround",!1),t(this,"text"),t(this,"girlSpriteKey",""),this.setData("label","girl"),this.flipX=!0,this.name=l,this.text=this.scene.add.text(this.x,this.y-20,this.name,{color:"#3807c4",fontFamily:"Arial",fontStyle:"bold",fontSize:22,align:"center"}).setOrigin(.5,.5),this.text.setDepth(11).setAlpha(0),this.text.postFX.addGlow(16777215,6,0,!1,.1,24),this.setRectangle(27,45),this.setOrigin(.5,.55),this.girlSpriteKey=localStorage.getItem("girlKey"),this.setScale(2),this.setFixedRotation(),this.setDepth(7),this.label="girl",this.scene.add.existing(this),(r=this.scene.anims).create({key:"alexandra_jump",frames:r.generateFrameNames("alexandra_jump",{start:0,end:3,prefix:"alexandra_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"alexandra_fall",frames:r.generateFrameNames("alexandra_fall",{start:0,end:3,prefix:"alexandra_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"karina_jump",frames:r.generateFrameNames("karina_jump",{start:0,end:3,prefix:"karina_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"karina_fall",frames:r.generateFrameNames("karina_fall",{start:0,end:3,prefix:"karina_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"katya_jump",frames:r.generateFrameNames("katya_jump",{start:0,end:3,prefix:"katya_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"katya_fall",frames:r.generateFrameNames("katya_fall",{start:0,end:3,prefix:"katya_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"ksusha_jump",frames:r.generateFrameNames("ksusha_jump",{start:0,end:3,prefix:"ksusha_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"ksusha_fall",frames:r.generateFrameNames("ksusha_fall",{start:0,end:3,prefix:"ksusha_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"liza_fall",frames:r.generateFrameNames("liza_fall",{start:0,end:3,prefix:"liza_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"liza_jump",frames:r.generateFrameNames("liza_jump",{start:0,end:3,prefix:"liza_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"masha_fall",frames:r.generateFrameNames("masha_fall",{start:0,end:3,prefix:"masha_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"masha_jump",frames:r.generateFrameNames("masha_jump",{start:0,end:3,prefix:"masha_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"natasha_fall",frames:r.generateFrameNames("natasha_fall",{start:0,end:3,prefix:"natasha_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"natasha_jump",frames:r.generateFrameNames("natasha_jump",{start:0,end:3,prefix:"natasha_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"rusinya_fall",frames:r.generateFrameNames("rusinya_fall",{start:0,end:3,prefix:"rusinya_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"rusinya_jump",frames:r.generateFrameNames("rusinya_jump",{start:0,end:3,prefix:"rusinya_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"sashenka_fall",frames:r.generateFrameNames("sashenka_fall",{start:0,end:3,prefix:"sashenka_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"sashenka_jump",frames:r.generateFrameNames("sashenka_jump",{start:0,end:3,prefix:"sashenka_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"savch_fall",frames:r.generateFrameNames("savch_fall",{start:0,end:3,prefix:"savch_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"savch_jump",frames:r.generateFrameNames("savch_jump",{start:0,end:3,prefix:"savch_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"shu_fall",frames:r.generateFrameNames("shu_fall",{start:0,end:3,prefix:"shu_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"shu_jump",frames:r.generateFrameNames("shu_jump",{start:0,end:3,prefix:"shu_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"tanya_fall",frames:r.generateFrameNames("tanya_fall",{start:0,end:3,prefix:"tanya_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"tanya_jump",frames:r.generateFrameNames("tanya_jump",{start:0,end:3,prefix:"tanya_jump",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"vlada_fall",frames:r.generateFrameNames("vlada_fall",{start:0,end:3,prefix:"vlada_fall",suffix:".png"}),repeat:-1,frameRate:20}),r.create({key:"vlada_jump",frames:r.generateFrameNames("vlada_jump",{start:0,end:3,prefix:"vlada_jump",suffix:".png"}),repeat:-1,frameRate:20}),this.emitter=this.scene.add.particles(0,0,"flare",{speed:24,lifespan:1500,quantity:10,scale:{start:.4,end:0},emitting:!1,emitZone:{type:"edge",source:this.getBounds(),quantity:42},duration:500}),this.emitter.setDepth(7),this.setOnCollide((a=>{this.isTouchingGround=!0,this.emitter.setPosition(this.x,this.y+this.height/2),this.emitter.start()})),this.setCollisionCategory(u.Player),this.setCollidesWith([u.Disabled,u.Coin]),this.setName("girl")}update(a){const{left:t,right:e,up:i,down:l,space:n}=a;this.emitter.copyPosition(this.x,this.y),this.body.velocity.y<0?(this.anims.play(`${this.girlSpriteKey}_jump`,!0),e.isDown?(this.setVelocityX(4),this.flipX=!0):t.isDown&&(this.setVelocityX(-4),this.flipX=!1)):this.body.velocity.y>0?(this.anims.play(`${this.girlSpriteKey}_fall`,!0),e.isDown?(this.setVelocityX(4),this.flipX=!0):t.isDown&&(this.setVelocityX(-4),this.flipX=!1)):t.isDown?(this.setVelocityX(-4),this.flipX=!1,this.anims.play(`${this.girlSpriteKey}_run`,!0)):e.isDown?(this.setVelocityX(4),this.flipX=!0,this.anims.play(`${this.girlSpriteKey}_run`,!0)):this.anims.play(`${this.girlSpriteKey}_idle`,!0),s.Input.Keyboard.JustDown(i)&&this.isTouchingGround&&(this.setVelocityY(-15),this.isTouchingGround=!1),this.text.copyPosition({x:this.x,y:this.y-60}),this.y>3e3&&(this.setPosition(b.x,this.scene.firstPlatformY-200),this.setVelocityY(-10))}}class x extends s.Physics.Matter.Image{constructor(a,s,e,i,l){super(a.matter.world,s,e,i,l),t(this,"startY",0),t(this,"startX",0),this.startX=s,this.startY=e,this.setStatic(!0),this.setDepth(7),this.setFixedRotation(),this.setFriction(1,0,1/0),this.setIgnoreGravity(!0),this.setData("label","platform"),this.setCollisionCategory(u.Platform),this.setCollidesWith(u.Player),this.scene.add.existing(this)}moveVertically(a){this.scene.tweens.addCounter({from:0,to:-900,duration:a,ease:s.Math.Easing.Sine.InOut,repeat:-1,yoyo:!0,onUpdate:(a,t)=>{const s=this.startY+t.value,e=s-this.y;this.y=s,this.setVelocityY(e)}})}moveHorizontally(a,t){this.scene.tweens.addCounter({from:0,to:-t,duration:a,ease:s.Math.Easing.Sine.InOut,repeat:-1,yoyo:!0,onUpdate:(a,t)=>{const s=this.startX+t.value,e=s-this.x;this.x=s,this.setVelocityX(e)}})}}const w=s.Math.DegToRad(-180),b={x:550,y:2200};class v extends s.Scene{constructor(){super("Game"),t(this,"playerController",{blocked:{left:!1,right:!1,bottom:!1},numTouching:{left:0,right:0,bottom:0},sensors:{bottom:null,left:null,right:null}}),t(this,"hook"),t(this,"lineGroup"),t(this,"cursors"),t(this,"stars"),t(this,"platform"),t(this,"platform2"),t(this,"platform3"),t(this,"isMovingLeft",!1),t(this,"isMovingRight",!1),t(this,"moveSpeed",5),t(this,"halfWidth",0),t(this,"platforms"),t(this,"coins"),t(this,"coinCount",0),t(this,"coinText"),t(this,"maxPlatforms",10),t(this,"platformDistance",300),t(this,"lastPlatformY",0),t(this,"firstPlatformY",0),t(this,"chest"),t(this,"starsSummary",0),t(this,"lizard"),t(this,"isTouchingGround",!1),t(this,"level",1),t(this,"loadNextLevel",!1),t(this,"showDialog",!1),t(this,"dialog"),t(this,"fish"),t(this,"dialogLevel",0),t(this,"emitter",new s.Events.EventEmitter),t(this,"water"),t(this,"stick"),t(this,"music"),t(this,"backgrounds",[]),t(this,"velocityX",10),t(this,"collisionCategory1",1),t(this,"collisionCategory2",2),t(this,"collisionCategory3",4),t(this,"collisionCategory4",8),t(this,"collisionWaterCategory",5)}preload(){this.cursors=this.input.keyboard.createCursorKeys()}create2(){const a=s.Physics.Matter.Matter,t=this.lizard.width,e=this.lizard.height;this.lizard.x,this.lizard.y,this.playerController.sensors.bottom=a.Bodies.rectangle(0,e/2,.75*t,5,{isSensor:!0,label:"bottomSensor"}),this.playerController.sensors.left=a.Bodies.rectangle(.45*-t,0,5,.25*e,{isSensor:!0,label:"leftSensor"}),this.playerController.sensors.right=a.Bodies.rectangle(.45*t,0,5,.25*e,{isSensor:!0,label:"rightSensor"}),a.Body.create({parts:[this.lizard.body,this.playerController.sensors.bottom,this.playerController.sensors.left,this.playerController.sensors.right],friction:.01,restitution:.05}),this.matter.world.on("beforeupdate",(()=>{this.playerController.numTouching.left=0,this.playerController.numTouching.right=0,this.playerController.numTouching.bottom=0})),this.matter.world.on("collisionactive",(a=>{const t=this.lizard.body,s=this.playerController.sensors.left,e=this.playerController.sensors.right,i=this.playerController.sensors.bottom;for(let l=0;l<a.pairs.length;l++){const n=a.pairs[l].bodyA,r=a.pairs[l].bodyB;n!==t&&r!==t&&(n===i||r===i?this.playerController.numTouching.bottom+=1:n===s&&r.isStatic||r===s&&n.isStatic?this.playerController.numTouching.left+=1:(n===e&&r.isStatic||r===e&&n.isStatic)&&(this.playerController.numTouching.right+=1))}})),this.matter.world.on("afterupdate",(()=>{this.playerController.blocked.right=this.playerController.numTouching.right>0,this.playerController.blocked.left=this.playerController.numTouching.left>0,this.playerController.blocked.bottom=this.playerController.numTouching.bottom>0}))}handleTouchInput(a){a.x<this.halfWidth?(this.isMovingLeft=!0,this.isMovingRight=!1):(this.isMovingLeft=!1,this.isMovingRight=!0)}create(){var a;this.coins=this.add.group(),(a=this.anims).create({key:"coin",frames:a.generateFrameNames("coin",{start:0,end:4,prefix:"MonedaD",suffix:".png"}),repeat:-1,frameRate:10}),this.originalWidth=this.scale.width,this.originalHeight=this.scale.height,this.platforms=this.add.group(),this.halfWidth=this.scale.width/2,this.input.addPointer(1),this.input.on("pointerdown",(a=>{this.handleTouchInput(a)})),this.input.on("pointermove",(a=>{a.isDown&&this.handleTouchInput(a)})),this.input.on("pointerup",(()=>{this.isMovingLeft=!1,this.isMovingRight=!1})),this.coinText=this.add.text(20,20,"Монеты: 0",{fontSize:"24px",fill:"#FFD700",fontFamily:"Arial",stroke:"#000",strokeThickness:4}).setScrollFactor(0).setDepth(1e3),this.add.existing(this.coinText),this.sound.pauseOnBlur=!1,this.music=this.sound.add("music",{volume:.2,loop:!0}),this.sound.locked?this.sound.once(s.Sound.Events.UNLOCKED,(()=>{this.music.play()})):this.music.play(),this.game.events.on(s.Core.Events.BLUR,(()=>{})),document.addEventListener("visibilitychange",(()=>{console.log("visibilitychange"),document.hidden})),this.tweener={x:w},this.GROUND_COLLISION_GROUP=this.matter.world.nextCategory();const t=localStorage.getItem("happyName");let e;var i;(i=e||(e={})).Ksenia="ksenia",i.Elena="elena";const l=localStorage.getItem("girlKey");this.lizard=new k(this,b.x,b.y,l,t,{label:"girl"}),this.create2(),this.createPlatform(b.x,b.y+200),this.createPlatform(b.x,b.y),this.createPlatform(s.Math.Between(b.x-150,b.x+150),b.y-200),this.generatePlatforms(),this.generatePlatforms(),this.matter.world.on("collisionstart",(a=>{this.handleCollision(a),this.handleCoinCollision(a)}),this),this.time.addEvent({delay:1e3,callback:this.generatePlatforms,callbackScope:this,loop:!0}),this.time.addEvent({delay:1e3,callback:()=>this.createCoin(s.Math.Between(b.x-150,b.x+150),this.lastPlatformY-60),callbackScope:this,loop:!0}),this.cameras.main.startFollow(this.lizard);const{width:n,height:r}=this.scale,o=this.add.graphics();o.fillStyle(0,1),this.backgrounds.push({ratioX:.07,ratioY:.009,sprite:this.add.tileSprite(0,0,n,r,"background_1").setOrigin(0,0).setScrollFactor(0,0).setScale(3.5,4)},{ratioX:.09,ratioY:.02,sprite:this.add.tileSprite(0,-120,n,r,"background_2").setOrigin(0,0).setScrollFactor(0,0).setScale(3.5,4)}),this.backgrounds.forEach((a=>{o.fillRect(0,0,this.cameras.main.width,this.cameras.main.height)})),this.add.graphics(),this.matter.world.on("collisionend",((a,t,s)=>{a.pairs.some((a=>"water"==a.bodyA.label&&"hook"==a.bodyB.label))})),this.lights.enable(),this.lights.setAmbientColor(8421504),this.events.on("resume",(()=>{})),this.light=this.lights.addLight(this.lizard.x,this.lizard.y,512).setIntensity(2),this.matter.world.update60Hz(),this.cameras.main.setFollowOffset(-30,80)}update(a,t){for(let s=0;s<this.backgrounds.length;++s){const a=this.backgrounds[s];a.sprite&&(a.sprite.tilePositionX=this.cameras.main.scrollX*a.ratioX)}this.light.x=this.lizard.x,this.light.y=this.lizard.y,this.cleanPlatforms(),this.updatePlatformCollisions(),this.checkPlayerHeight(),this.cursors,this.lizard.update(this.cursors),this.isMovingLeft?(this.lizard.flipX=!1,this.lizard.setVelocityX(-this.moveSpeed)):this.isMovingRight?(this.lizard.flipX=!0,this.lizard.setVelocityX(this.moveSpeed)):this.lizard.setVelocityX(.9*this.lizard.body.velocity.x)}createPlatform(a,t){var s,e;const i=new x(this,a,t,"platform",{});this.platforms.add(i),this.lastPlatformY=t,this.firstPlatformY=null==(e=null==(s=this.platforms.getChildren())?void 0:s.at)?void 0:e.call(s,0).y}generatePlatforms(){const a=s.Math.Between(b.x-150,b.x+150),t=this.lastPlatformY-s.Math.Between(300,250);this.createPlatform(a,t),this.lastPlatformY=t}updatePlatformCollisions(){const a=this.lizard.body.velocity.y<0;this.lizard.body.velocity.x,this.lizard.body.velocity.x,a?this.lizard.setCollidesWith([u.Disabled,u.Coin]):this.lizard.setCollidesWith([u.Platform,u.Coin])}createCoin(a,t){const s=this.matter.add.sprite(a,t,"coin",void 0,{label:"coin"});s.setScale(2),s.setIgnoreGravity(!0),s.setBounce(.5),s.setData("label","coin"),s.anims.play("coin"),s.setCollisionCategory(u.Coin),s.setCollidesWith([u.Player]),this.coins.add(s)}handleCollision(a){a.pairs.forEach((a=>{const t=a.bodyA,s=a.bodyB,e=t.gameObject,i=s.gameObject,l=e&&"girl"===e.getData("label"),n=e&&"platform"===e.getData("label"),r=i&&"girl"===i.getData("label"),o=i&&"platform"===i.getData("label");(l&&o||r&&n)&&this.lizard.body.velocity.y>0&&this.lizard.setVelocityY(-17)}))}cleanPlatforms(){this.platforms.getChildren().forEach((a=>{a.y>this.cameras.main.scrollY+1100&&(console.log("DESTROY PLATFORM:",a),a.destroy())}))}cleanCoins(){this.coins.getChildren().forEach((a=>{a.y>this.cameras.main.scrollY+1100&&(console.log("DESTROY PLATFORM:",a),a.destroy())}))}checkPlayerHeight(){this.cameras.main.setScroll(0,this.lizard.y-200)}handleCoinCollision(a){a.pairs.forEach((a=>{const t=a.bodyA,s=a.bodyB,e=t.gameObject,i=s.gameObject;e&&e.getData("label"),e&&e.getData("label"),i&&i.getData("label"),i&&i.getData("label");const l=[t,s].find((a=>{var t;return"coin"===(null==(t=null==a?void 0:a.gameObject)?void 0:t.getData("label"))})),n=[t,s].find((a=>{var t;return"girl"===(null==(t=null==a?void 0:a.gameObject)?void 0:t.getData("label"))}));if(l&&n){const a=l.gameObject;this.coinCount++,this.coinText.setText(`Монеты: ${this.coinCount}`),a.destroy(!0)}}))}}const C={type:s.WEBGL,canvas:document.querySelector("#phaser"),fps:{limit:140},scale:{mode:s.Scale.RESIZE,autoCenter:s.Scale.CENTER_BOTH},physics:{default:"matter",matter:{gravity:{y:1}}},scene:[e,j,v]};new s.Game(C);
