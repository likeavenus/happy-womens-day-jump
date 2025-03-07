var t=Object.defineProperty,e=(e,a,s)=>((e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s)(e,"symbol"!=typeof a?a+"":a,s);import{P as a}from"./phaser-Co6Ukw23.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const a of t)if("childList"===a.type)for(const t of a.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();class s extends a.Scene{constructor(){super("preloader")}onLoad(){const t=this.add.text(this.sys.canvas.width/2-50,this.sys.canvas.height/2,"Загрузка...",{fontSize:18}),e=this.add.text(t.x+20,t.y+20,"0");this.load.on("progress",(function(t){e.text=`${Math.floor(100*t)}%`}))}preload(){this.onLoad(),this.load.image("happy-ground","assets/happy/happy.png"),this.load.tilemapTiledJSON("happy-ground-tilemap","assets/happy/happy-ground.json"),this.load.image("background_1","assets/happy/background_layer_1.png"),this.load.image("background_2","assets/happy/background_layer_2.png"),this.load.image("background_3","assets/happy/bg8.png"),this.load.image("background_4","assets/happy/Back_1.png"),this.load.image("background_5","assets/happy/Back_2.png"),this.load.image("platform","assets/happy/objects/platform.png"),this.load.image("paper","assets/happy/objects/paper.png"),this.load.image("star","assets/happy/objects/star3.png"),this.load.image("tulip","assets/happy/objects/tulip/tulip.png"),this.load.atlas("bat","assets/happy/bat/bat.png","assets/happy/bat/bat.json"),this.load.atlas("petal","assets/happy/objects/petal/petal.png","assets/happy/objects/petal/petal.json"),this.load.atlas("alexandra_fall","assets/happy/womens/alexandra_fall.png","assets/happy/womens/alexandra_fall.json"),this.load.atlas("alexandra_jump","assets/happy/womens/alexandra_jump.png","assets/happy/womens/alexandra_jump.json"),this.load.atlas("karina_fall","assets/happy/womens/karina_fall.png","assets/happy/womens/karina_fall.json"),this.load.atlas("karina_jump","assets/happy/womens/karina_jump.png","assets/happy/womens/karina_jump.json"),this.load.atlas("katya_fall","assets/happy/womens/katya_fall.png","assets/happy/womens/katya_fall.json"),this.load.atlas("katya_jump","assets/happy/womens/katya_jump.png","assets/happy/womens/katya_jump.json"),this.load.atlas("ksusha_fall","assets/happy/womens/ksusha_fall.png","assets/happy/womens/ksusha_fall.json"),this.load.atlas("ksusha_jump","assets/happy/womens/ksusha_jump.png","assets/happy/womens/ksusha_jump.json"),this.load.atlas("liza_fall","assets/happy/womens/liza_fall.png","assets/happy/womens/liza_fall.json"),this.load.atlas("liza_jump","assets/happy/womens/liza_jump.png","assets/happy/womens/liza_jump.json"),this.load.atlas("masha_fall","assets/happy/womens/masha_fall.png","assets/happy/womens/masha_fall.json"),this.load.atlas("masha_jump","assets/happy/womens/masha_jump.png","assets/happy/womens/masha_jump.json"),this.load.atlas("natasha_fall","assets/happy/womens/natasha_fall.png","assets/happy/womens/natasha_fall.json"),this.load.atlas("natasha_jump","assets/happy/womens/natasha_jump.png","assets/happy/womens/natasha_jump.json"),this.load.atlas("rusinya_fall","assets/happy/womens/rusinya_fall.png","assets/happy/womens/rusinya_fall.json"),this.load.atlas("rusinya_jump","assets/happy/womens/rusinya_jump.png","assets/happy/womens/rusinya_jump.json"),this.load.atlas("sashenka_fall","assets/happy/womens/sashenka_fall.png","assets/happy/womens/sashenka_fall.json"),this.load.atlas("sashenka_jump","assets/happy/womens/sashenka_jump.png","assets/happy/womens/sashenka_jump.json"),this.load.atlas("savch_fall","assets/happy/womens/savch_fall.png","assets/happy/womens/savch_fall.json"),this.load.atlas("savch_jump","assets/happy/womens/savch_jump.png","assets/happy/womens/savch_jump.json"),this.load.atlas("shu_fall","assets/happy/womens/shu_fall.png","assets/happy/womens/shu_fall.json"),this.load.atlas("shu_jump","assets/happy/womens/shu_jump.png","assets/happy/womens/shu_jump.json"),this.load.atlas("tanya_fall","assets/happy/womens/tanya_fall.png","assets/happy/womens/tanya_fall.json"),this.load.atlas("tanya_jump","assets/happy/womens/tanya_jump.png","assets/happy/womens/tanya_jump.json"),this.load.atlas("vlada_fall","assets/happy/womens/vlada_fall.png","assets/happy/womens/vlada_fall.json"),this.load.atlas("vlada_jump","assets/happy/womens/vlada_jump.png","assets/happy/womens/vlada_jump.json"),this.load.atlas("chest","assets/happy/objects/Chests.png","assets/happy/objects/Chests.json"),this.load.atlas("coin","assets/happy/objects/coin/coin.png","assets/happy/objects/coin/coin.json"),this.load.image("flare","assets/happy/white-flare.png"),this.load.audio("music","assets/happy/scott-buckley-reverie(chosic.com).mp3"),this.load.audio("grab-coin","assets/happy/grab-coin.wav")}create(){this.scene.start("Menu")}}const i=["Ты такая красивая, что даже монетки сами падают!","Умница, ты уже собрала больше монеток, чем у нас в кошельке!","С таким талантом ты можешь собрать все сокровища мира!","Твоя улыбка светлее всех монет вместе взятых!","Ты просто звезда этой игры!","Ты так ловко прыгаешь, что мы боимся, как бы ты не улетела в космос!","С тобой даже игра становится волшебной!","Ты сегодня сияешь ярче, чем все наши лампочки!","Ты — наша королева прыжков!","Вожак стаи восхищается твоей смелостью!","Ты настолько крутая, что монетки бросаются тебе в ноги!","Ты собираешь монеты быстрее, чем мы завариваем чай!","Ты вдохновляешь нас на подвиги!","Ты точно знаешь, как сделать день лучше!","Твой стиль игры — просто огонь!","Вожак стаи зовет тебя своей лучшей охотницей за монетками!","Ты делаешь игру еще интереснее!","Ты как солнечный лучик в нашем сером дне!","Ты умеешь превращать игру в праздник!","Ты заставляешь нас гордиться нашей стаей!","Вау! Покорила сердца всей стаи своими прыжками!","Ауф! Ты не просто играешь, ты творишь магию!","Вожак стаи заявляет: ты — лучший игрок дня!","Ты приносишь радость везде, где появляешься!","Ты обладаешь невероятной грацией и легкостью!","Ты заряжаешь нас энергией своим азартом!","Ты словно воплощение весны в этой игре!","Вожак стаи клянется: ты — самая очаровательный игрок дня!","Ты делаешь мир вокруг себя ярче!","Ты — наше сокровище, которое мы нашли в этой игре!","Я бы с тобой попрыгал за монетками!","Вечно бы смотрел как ты прыгаешь! Умница!","Ты — весенний ветер, который приносит радость и тепло!","Сегодня твой день, и мы радуемся вместе с тобой!","Ты расцветаешь ярче любых цветов!","В этот чудесный день ты сияешь особенно ярко!","Ты — символ весны и красоты!","Вожак стаи поздравляет тебя с праздником и желает море счастья!","Ты — настоящее весеннее чудо!","В этот день хочется пожелать тебе столько же радости, сколько монеток ты уже собрала!","Ты украшаешь этот день своим присутствием!","Ты — весна в наших сердцах!","Вожак стаи шлет тебе весенние поцелуи и добрые пожелания!"],r="Ура, ты справилась! От всей души поздравляем с 8 марта и хотим презентовать тебе небольшую приятность ❤️ Напиши вожаку стаи секретное сообщение «Я дурею с этой прикормки» для получения 🎁",n={savch:{text:r},tanya:{text:r},rusinya:{text:r},masha:{text:r},karina:{text:r},natasha:{text:r},shu:{text:r},katya:{text:r},vlada:{text:r},ksusha:{text:r},sashenka:{text:r},alexandra:{text:r},liza:{text:r}};var l=(t=>(t[t.Disabled=0]="Disabled",t[t.Platform=1]="Platform",t[t.Player=2]="Player",t[t.Coin=8]="Coin",t[t.Bat=16]="Bat",t[t.Flower=32]="Flower",t))(l||{});const o=[{name:"Савч",greetings:n.savch.text,key:"savch"},{name:"Русиня",greetings:n.rusinya.text,key:"rusinya"},{name:"Наташа",greetings:n.natasha.text,key:"natasha"},{name:"Таня",greetings:n.tanya.text,key:"tanya"},{name:"Карина",greetings:n.karina.text,key:"karina"},{name:"Маша",greetings:n.masha.text,key:"masha"},{name:"Шу",greetings:n.masha.text,key:"shu"},{name:"Катя",greetings:n.katya.text,key:"katya"},{name:"Влада",greetings:n.vlada.text,key:"vlada"},{name:"Ксюша",greetings:n.ksusha.text,key:"ksusha"},{name:"Сашенька",greetings:n.sashenka.text,key:"sashenka"},{name:"Александра",greetings:n.alexandra.text,key:"alexandra"},{name:"Лиза",greetings:n.liza.text,key:"liza"}];class h extends a.Scene{constructor(){super("Menu"),e(this,"window"),e(this,"text"),e(this,"state","none"),e(this,"shaders",[]),e(this,"startGame",(()=>{this.scene.start("Guide")}))}preload(){this.load.glsl("cardShader","assets/shaders/cardShader.frag"),this.load.glsl("backgroundShader","assets/shaders/background.glsl")}create(){this.add.shader("backgroundShader",this.cameras.main.width/2,this.cameras.main.height/2,this.cameras.main.width,this.cameras.main.height,{time:0});const t=this.cameras.main.width/2;this.cards=[],this.shuffleArray([...o]).forEach(((e,s)=>{const i=s%2,r=Math.floor(s/2),n=0===i?t-82.5:t+82.5,l=60+90*r,o=n+(0===i?-500:500),h=l+a.Math.Between(-200,200),p=this.add.rectangle(o,h,150,75,16777215,1);p.setAlpha(0),p.setScale(.5),p.angle=a.Math.Between(-105,15),this.tweens.add({targets:p,x:n,y:l,alpha:1,scale:1,angle:0,ease:"Sine.easeOut",duration:800,delay:150*s,onStart:()=>{p.setInteractive(),p.on("pointerdown",(()=>{localStorage.setItem("girlKey",e.key),localStorage.setItem("greetings",e.greetings),this.cameras.main.fadeOut(1e3),this.time.delayedCall(1e3,(()=>{this.startGame()}))}));const t=this.add.text(n,l,`${e.name}`,{color:"#ea4386",fontSize:"18px"}).setOrigin(.5).setAlpha(0);this.tweens.add({targets:t,alpha:1,duration:400,ease:"Quad.easeOut",delay:1e3})}}),this.time.delayedCall(150*s+1400,(()=>{const t=this.add.particles(0,0,"flare",{speed:24,lifespan:1500,quantity:5,scale:{start:.4,end:0},emitting:!1,emitZone:{type:"edge",source:p.getBounds(),quantity:42},duration:200});p.on("pointerover",(()=>t.start()))})),this.cards.push(p)}))}shuffleArray(t){for(let e=t.length-1;e>0;e--){const a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}return t}}class p extends a.Physics.Matter.Sprite{constructor(t,a,s,i,r,n){var o;super(t.matter.world,a,s,i,n,{label:"girl",frictionAir:.006}),e(this,"direction",3),e(this,"hp",100),e(this,"isTouchingGround",!1),e(this,"text"),e(this,"girlSpriteKey",""),this.setData("label","girl"),this.flipX=!0,this.name=r,this.text=this.scene.add.text(this.x,this.y-20,this.name,{color:"#3807c4",fontFamily:"Arial",fontStyle:"bold",fontSize:22,align:"center"}).setOrigin(.5,.5),this.text.setDepth(11).setAlpha(0),this.text.postFX.addGlow(16777215,6,0,!1,.1,24),this.setRectangle(27,45),this.setOrigin(.5,.55),this.girlSpriteKey=localStorage.getItem("girlKey"),this.setScale(2),this.setFixedRotation(),this.setDepth(20),this.label="girl",this.scene.add.existing(this),(o=this.scene.anims).create({key:"alexandra_jump",frames:o.generateFrameNames("alexandra_jump",{start:0,end:3,prefix:"alexandra_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"alexandra_fall",frames:o.generateFrameNames("alexandra_fall",{start:0,end:3,prefix:"alexandra_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"karina_jump",frames:o.generateFrameNames("karina_jump",{start:0,end:3,prefix:"karina_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"karina_fall",frames:o.generateFrameNames("karina_fall",{start:0,end:3,prefix:"karina_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"katya_jump",frames:o.generateFrameNames("katya_jump",{start:0,end:3,prefix:"katya_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"katya_fall",frames:o.generateFrameNames("katya_fall",{start:0,end:3,prefix:"katya_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"ksusha_jump",frames:o.generateFrameNames("ksusha_jump",{start:0,end:3,prefix:"ksusha_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"ksusha_fall",frames:o.generateFrameNames("ksusha_fall",{start:0,end:3,prefix:"ksusha_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"liza_fall",frames:o.generateFrameNames("liza_fall",{start:0,end:3,prefix:"liza_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"liza_jump",frames:o.generateFrameNames("liza_jump",{start:0,end:3,prefix:"liza_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"masha_fall",frames:o.generateFrameNames("masha_fall",{start:0,end:3,prefix:"masha_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"masha_jump",frames:o.generateFrameNames("masha_jump",{start:0,end:3,prefix:"masha_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"natasha_fall",frames:o.generateFrameNames("natasha_fall",{start:0,end:3,prefix:"natasha_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"natasha_jump",frames:o.generateFrameNames("natasha_jump",{start:0,end:3,prefix:"natasha_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"rusinya_fall",frames:o.generateFrameNames("rusinya_fall",{start:0,end:3,prefix:"rusinya_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"rusinya_jump",frames:o.generateFrameNames("rusinya_jump",{start:0,end:3,prefix:"rusinya_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"sashenka_fall",frames:o.generateFrameNames("sashenka_fall",{start:0,end:3,prefix:"sashenka_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"sashenka_jump",frames:o.generateFrameNames("sashenka_jump",{start:0,end:3,prefix:"sashenka_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"savch_fall",frames:o.generateFrameNames("savch_fall",{start:0,end:3,prefix:"savch_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"savch_jump",frames:o.generateFrameNames("savch_jump",{start:0,end:3,prefix:"savch_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"shu_fall",frames:o.generateFrameNames("shu_fall",{start:0,end:3,prefix:"shu_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"shu_jump",frames:o.generateFrameNames("shu_jump",{start:0,end:3,prefix:"shu_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"tanya_fall",frames:o.generateFrameNames("tanya_fall",{start:0,end:3,prefix:"tanya_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"tanya_jump",frames:o.generateFrameNames("tanya_jump",{start:0,end:3,prefix:"tanya_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"vlada_fall",frames:o.generateFrameNames("vlada_fall",{start:0,end:3,prefix:"vlada_fall",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"vlada_jump",frames:o.generateFrameNames("vlada_jump",{start:0,end:3,prefix:"vlada_jump",suffix:".png"}),repeat:-1,frameRate:20}),o.create({key:"petal",frames:o.generateFrameNames("petal",{start:0,end:3,prefix:"petal",suffix:".png"}),repeat:-1,frameRate:10}),this.emitter=this.scene.add.particles(0,0,"flare",{speed:24,lifespan:1500,quantity:10,scale:{start:.4,end:0},emitting:!1,emitZone:{type:"edge",source:this.getBounds(),quantity:42},duration:500}),this.emitter.setDepth(7),this.setOnCollide((t=>{this.isTouchingGround=!0,this.emitter.setPosition(this.x,this.y+this.height/2),this.emitter.start()})),this.setCollisionCategory(l.Player),this.setCollidesWith([l.Disabled,l.Coin,l.Bat,l.Flower]),this.setName("girl")}update(t){const{left:e,right:a,up:s,down:i,space:r}=t;this.emitter.copyPosition(this.x,this.y),this.body.velocity.y<0?(this.anims.play(`${this.girlSpriteKey}_jump`,!0),a.isDown?(this.setVelocityX(4),this.flipX=!0):e.isDown&&(this.setVelocityX(-4),this.flipX=!1)):this.body.velocity.y>0?(this.anims.play(`${this.girlSpriteKey}_fall`,!0),a.isDown?(this.setVelocityX(4),this.flipX=!0):e.isDown&&(this.setVelocityX(-4),this.flipX=!1)):e.isDown?(this.setVelocityX(-4),this.flipX=!1,this.anims.play(`${this.girlSpriteKey}_run`,!0)):a.isDown&&(this.setVelocityX(4),this.flipX=!0,this.anims.play(`${this.girlSpriteKey}_run`,!0)),this.text.copyPosition({x:this.x,y:this.y-60}),this.y>3e3&&(this.setPosition(x.x,this.scene.firstPlatformY-200),this.setVelocityY(-10))}}class d extends a.Physics.Matter.Image{constructor(t,a,s,i,r){super(t.matter.world,a,s,i,r),e(this,"startY",0),e(this,"startX",0),e(this,"verticalTween",null),e(this,"horizontalTween",null),this.startX=a,this.startY=s,this.setStatic(!0),this.setDepth(7),this.setFixedRotation(),this.setFriction(1,0,1/0),this.setIgnoreGravity(!0),this.setData("label","platform"),this.setCollisionCategory(l.Platform),this.setCollidesWith(l.Player),this.scene.add.existing(this)}moveVertically(t){this.scene.tweens.addCounter({from:0,to:-900,duration:t,ease:a.Math.Easing.Sine.InOut,repeat:-1,yoyo:!0,onUpdate:(t,e)=>{const a=this.startY+e.value,s=a-this.y;this.y=a,this.setVelocityY(s)}})}moveHorizontally(t,e){this.horizontalTween=this.scene.tweens.addCounter({from:0,to:e-this.startX,duration:t,ease:a.Math.Easing.Sine.InOut,repeat:-1,yoyo:!0,onUpdate:(t,{value:e})=>{if(!this.scene||!this.body)return;const a=this.startX+e;this.setPosition(a,this.y)},onComplete:()=>{this.horizontalTween=null}})}destroy(){this.verticalTween&&(this.verticalTween.stop(),this.verticalTween=null),this.horizontalTween&&(this.horizontalTween.stop(),this.horizontalTween=null),super.destroy()}}class m extends a.GameObjects.Container{constructor(t,s,i,r,n,l){super(t,s,i),e(this,"rectangle"),e(this,"text"),e(this,"paper"),t.cameras.main.width,t.cameras.main.height,this.paper=new a.GameObjects.Image(t,0,0,"paper"),this.add(this.paper),this.setSize(r,n),this.text=new a.GameObjects.Text(t,this.x,this.y,l,{color:"#000000",wordWrap:{width:r+32},fontSize:24}),this.add(this.text),this.text.setPosition(this.width/2-r-10,this.height/2-this.height+36),this.setDepth(100),this.setScrollFactor(0),this.alpha=0,t.add.existing(this)}}class c extends a.Physics.Matter.Sprite{constructor(t,e,a){super(t.matter.world,e,a,"bat","bat0.png"),this.setScale(1),this.setDepth(50),this.setIgnoreGravity(!0),this.setCollisionCategory(l.Bat),this.setCollidesWith([l.Player]),this.setFixedRotation(),t.add.existing(this),t.anims.create({key:"bat",frames:[{key:"bat",frame:"bat0.png"},{key:"bat",frame:"bat1.png"},{key:"bat",frame:"bat2.png"},{key:"bat",frame:"bat3.png"}],frameRate:8,repeat:-1}),this.play("bat")}startFlight(t,e){this.flipX=!(t>0),this.setVelocityX(t*e)}}class g extends Phaser.Physics.Matter.Sprite{constructor(t){const e=t.cameras.main,a=e.scrollX+Phaser.Math.Between(-50,50),s=e.scrollY-e.height-Phaser.Math.Between(0,100);super(t.matter.world,a,s,"petal"),this.setBody({type:"rectangle",width:10,height:10},{isSensor:!0,label:"petal"}),this.setScale(2),this.setIgnoreGravity(!0).setDepth(1e3).setRotation(Phaser.Math.DegToRad(Phaser.Math.Between(0,360))).setAlpha(.8),this.anims.play("petal"),t.add.existing(this),this.startMovement()}startMovement(){const t=Phaser.Math.Between(1,5),e=Phaser.Math.Between(5,10);this.setVelocity(t,e),this.scene.tweens.add({targets:this,angle:this.angle+360*(Phaser.Math.Between(0,1)?1:-1),duration:Phaser.Math.Between(5e3,5e3),repeat:-1}),this.scene.time.delayedCall(5e3,this.destroy)}update(){const t=this.scene.cameras.main;this.y<t.scrollY&&this.destroy()}destroy(){this.alpha=0,super.destroy(!0)}}class u{constructor(t){e(this,"scene"),this.scene=t,this.scene.time.addEvent({delay:300,callback:()=>new g(this.scene),loop:!0})}}class y extends a.Scene{constructor(){super({key:"Guide"}),e(this,"startButton"),e(this,"buttonText")}create(){const{width:t,height:e}=this.cameras.main,a=t/2,s=this.add.text(a,20,"Привет, посланница весны!\n\nЭта игра создана специально для самых прелестных леди на свете. Правила её предельно просты:\nвыбирай персонажа, прыгай-крутись влево и вправо\nглавное в стекло не попади, собирай монетки и цветы,\nостерегайся жутких летучих мышей.\n\nСобери минимум 50 монет, чтобы приблизить наступление тепла!\nА дальше всё поймешь ;)\n\nУспехов, принцесса!\n\nС любовью и обожанием, Твой Вожак🌷🐺",{font:"18px Arial",color:"#8b4513",align:"center",wordWrap:{width:t-40}}).setOrigin(.5,0).setDepth(10),i=s.y+s.height+20,r=.4*e;this.add.text(a/2,i+r/2,"Жми на левую сторону экрана\nчто бы лететь влево ◀",{font:"20px Arial",color:"#2f4f4f",align:"center",wordWrap:{width:a-40}}).setOrigin(.5).setDepth(10),this.add.text(1.5*a,i+r/2,"Жми на правую сторону экрана\nчто бы лететь вправо ▶",{font:"20px Arial",color:"#2f4f4f",align:"center",wordWrap:{width:a-40}}).setOrigin(.5).setDepth(10),this.tweens.add({targets:[s],alpha:{from:0,to:1},y:{from:-e,to:s.y,value:s.y},duration:800,ease:"Power2"}),this.add.rectangle(0,0,t,e,16770273).setOrigin(0),this.createStartButton(t,e),this.tweens.add({targets:[this.startButton,this.buttonText],y:e-150,duration:800,ease:"Back.out"})}createStartButton(t,e){this.startButton=this.add.rectangle(t/2,e+100,300,60,16738740).setDepth(1).setInteractive().setOrigin(.5).on("pointerdown",(()=>this.startGame())),this.buttonText=this.add.text(t/2,e+100,"Начать волшебство ✨",{font:"24px Arial",color:"#ffffff",align:"center",stroke:"#000000",strokeThickness:2}).setOrigin(.5).setDepth(2),this.add.rectangle(t/2,e+100+5,300,60,0,.2).setOrigin(.5)}startGame(){this.tweens.add({targets:[this.startButton,this.buttonText],alpha:0,duration:500,ease:"Power2"}),this.cameras.main.fadeOut(1e3),this.time.delayedCall(1100,(()=>{this.scene.start("Game"),this.scene.stop()}))}}const f=a.Math.DegToRad(-180),x={x:550,y:2200};class _ extends a.Scene{constructor(){super("Game"),e(this,"playerController",{blocked:{left:!1,right:!1,bottom:!1},numTouching:{left:0,right:0,bottom:0},sensors:{bottom:null,left:null,right:null}}),e(this,"hook"),e(this,"lineGroup"),e(this,"cursors"),e(this,"stars"),e(this,"platform"),e(this,"platform2"),e(this,"platform3"),e(this,"petalGenerator"),e(this,"isGuideActive",!0),e(this,"isMovingLeft",!1),e(this,"isMovingRight",!1),e(this,"moveSpeed",5),e(this,"halfWidth",0),e(this,"bats"),e(this,"platforms"),e(this,"coins"),e(this,"coinCount",0),e(this,"coinText"),e(this,"maxPlatforms",10),e(this,"platformDistance",300),e(this,"lastPlatformY",0),e(this,"firstPlatformY",0),e(this,"flowers"),e(this,"chest"),e(this,"starsSummary",0),e(this,"lizard"),e(this,"isTouchingGround",!1),e(this,"level",1),e(this,"coinsChanged"),e(this,"loadNextLevel",!1),e(this,"showDialog",!1),e(this,"dialog"),e(this,"fish"),e(this,"dialogLevel",0),e(this,"emitter",new a.Events.EventEmitter),e(this,"water"),e(this,"stick"),e(this,"music"),e(this,"backgrounds",[]),e(this,"velocityX",10),e(this,"collisionCategory1",1),e(this,"collisionCategory2",2),e(this,"collisionCategory3",4),e(this,"collisionCategory4",8),e(this,"collisionWaterCategory",5),e(this,"textBox")}preload(){this.cursors=this.input.keyboard.createCursorKeys()}create2(){const t=a.Physics.Matter.Matter,e=this.lizard.width,s=this.lizard.height;this.lizard.x,this.lizard.y,this.playerController.sensors.bottom=t.Bodies.rectangle(0,s/2,.75*e,5,{isSensor:!0,label:"bottomSensor"}),this.playerController.sensors.left=t.Bodies.rectangle(.45*-e,0,5,.25*s,{isSensor:!0,label:"leftSensor"}),this.playerController.sensors.right=t.Bodies.rectangle(.45*e,0,5,.25*s,{isSensor:!0,label:"rightSensor"}),t.Body.create({parts:[this.lizard.body,this.playerController.sensors.bottom,this.playerController.sensors.left,this.playerController.sensors.right],friction:.01,restitution:.05}),this.matter.world.on("beforeupdate",(()=>{this.playerController.numTouching.left=0,this.playerController.numTouching.right=0,this.playerController.numTouching.bottom=0})),this.matter.world.on("collisionactive",(t=>{const e=this.lizard.body,a=this.playerController.sensors.left,s=this.playerController.sensors.right,i=this.playerController.sensors.bottom;for(let r=0;r<t.pairs.length;r++){const n=t.pairs[r].bodyA,l=t.pairs[r].bodyB;n!==e&&l!==e&&(n===i||l===i?this.playerController.numTouching.bottom+=1:n===a&&l.isStatic||l===a&&n.isStatic?this.playerController.numTouching.left+=1:(n===s&&l.isStatic||l===s&&n.isStatic)&&(this.playerController.numTouching.right+=1))}})),this.matter.world.on("afterupdate",(()=>{this.playerController.blocked.right=this.playerController.numTouching.right>0,this.playerController.blocked.left=this.playerController.numTouching.left>0,this.playerController.blocked.bottom=this.playerController.numTouching.bottom>0}))}handleTouchInput(t){t.x<this.halfWidth?(this.isMovingLeft=!0,this.isMovingRight=!1):(this.isMovingLeft=!1,this.isMovingRight=!0)}create(){var t;this.coins=this.add.group(),(t=this.anims).create({key:"coin",frames:t.generateFrameNames("coin",{start:0,end:4,prefix:"MonedaD",suffix:".png"}),repeat:-1,frameRate:10}),this.originalWidth=this.scale.width,this.originalHeight=this.scale.height,this.platforms=this.add.group(),this.coinsChanged=this.add.group(),this.flowers=this.add.group(),this.petalGenerator=new u(this),this.bats=this.add.group(),this.time.addEvent({delay:a.Math.Between(7e3,1e4),callback:()=>{const t=a.Math.Between(0,1),e=0===t?-200:this.cameras.main.width+200,s=0===t?1:-1,i=new c(this,e,a.Math.Between(this.lizard.y-1e3,this.lizard.y-1e3));i.setData("label","bat"),this.bats.add(i),i.startFlight(s,10),this.time.delayedCall(1e4,(()=>{i.destroy(!0)}))},callbackScope:this,loop:!0}),this.halfWidth=this.scale.width/2,this.input.addPointer(1),this.input.on("pointerdown",(t=>{this.handleTouchInput(t)})),this.input.on("pointermove",(t=>{t.isDown&&this.handleTouchInput(t)})),this.input.on("pointerup",(()=>{this.isMovingLeft=!1,this.isMovingRight=!1})),this.coinText=this.add.text(20,20,"Монеты: 0",{fontSize:"24px",fill:"#FFD700",fontFamily:"Arial",stroke:"#000",strokeThickness:4}).setScrollFactor(0).setDepth(1e3),this.add.existing(this.coinText),this.sound.pauseOnBlur=!1,this.music=this.sound.add("music",{volume:.2,loop:!0}),this.sound.locked?this.sound.once(a.Sound.Events.UNLOCKED,(()=>{this.music.play()})):this.music.play(),this.game.events.on(a.Core.Events.BLUR,(()=>{})),document.addEventListener("visibilitychange",(()=>{console.log("visibilitychange"),document.hidden})),this.tweener={x:f},this.GROUND_COLLISION_GROUP=this.matter.world.nextCategory();const e=localStorage.getItem("happyName");let s;var i;(i=s||(s={})).Ksenia="ksenia",i.Elena="elena";const r=localStorage.getItem("girlKey");this.lizard=new p(this,x.x,x.y+1e3,r,e,{label:"girl"}),this.create2(),this.textBox=new m(this,this.cameras.main.centerX,this.cameras.main.centerY,300,420,n[r].text).setDepth(1e3),this.createPlatform(x.x,x.y+600),this.createPlatform(x.x,x.y+300),this.createPlatform(x.x,x.y),this.matter.world.on("collisionstart",(t=>{this.handleCollision(t),this.handleCoinCollision(t)}),this);const o=(t,e)=>{const a=this.matter.add.sprite(t,e,"tulip",void 0,{label:"tulip"});a.setScale(1),a.setIgnoreGravity(!0),a.setBounce(.5),a.setData("label","tulip"),a.setCollisionCategory(l.Flower),a.setCollidesWith([l.Player]),this.flowers.add(a)};this.time.addEvent({delay:500,callback:this.generatePlatforms,callbackScope:this,loop:!0}),this.time.addEvent({delay:1e3,callback:()=>this.createCoin(a.Math.Between(x.x-150,x.x+150),this.lastPlatformY-60),callbackScope:this,loop:!0}),this.time.addEvent({delay:4e3,callback:()=>o(a.Math.Between(x.x-150,x.x+150),this.lastPlatformY-40),callbackScope:this,loop:!0}),this.cameras.main.startFollow(this.lizard);const{width:h,height:d}=this.scale,g=this.add.graphics();g.fillStyle(0,1),this.backgrounds.push({ratioX:.07,ratioY:.009,sprite:this.add.tileSprite(0,0,h,d,"background_1").setOrigin(0,.5).setScrollFactor(0,0).setScale(3.5,4)},{ratioX:.09,ratioY:.02,sprite:this.add.tileSprite(0,-120,h,d,"background_2").setOrigin(0,.5).setScrollFactor(0,0).setScale(3.5,4)}),this.backgrounds.forEach((t=>{g.fillRect(0,0,this.cameras.main.width,this.cameras.main.height)})),this.add.graphics(),this.matter.world.on("collisionend",((t,e,a)=>{t.pairs.some((t=>"water"==t.bodyA.label&&"hook"==t.bodyB.label))})),this.lights.enable(),this.lights.setAmbientColor(8421504),this.light=this.lights.addLight(this.lizard.x,this.lizard.y,512).setIntensity(2),this.matter.world.update60Hz()}update(t,e){for(let a=0;a<this.backgrounds.length;++a){const t=this.backgrounds[a];t.sprite&&(t.sprite.tilePositionX=this.cameras.main.scrollX*t.ratioX)}this.light.x=this.lizard.x,this.light.y=this.lizard.y,this.cleanPlatforms(),this.cleanCoins(),this.updatePlatformCollisions(),this.cursors,this.lizard.update(this.cursors),this.isMovingLeft?(this.lizard.flipX=!1,this.lizard.setVelocityX(-this.moveSpeed)):this.isMovingRight?(this.lizard.flipX=!0,this.lizard.setVelocityX(this.moveSpeed)):this.lizard.setVelocityX(.9*this.lizard.body.velocity.x),this.coinCount>=100&&(this.textBox.alpha=1,this.game.pause()),this.bats.getChildren().forEach((t=>{this.cameras.main.scrollY+1e3<t.y&&(t.destroy(),console.log("bat.destroy();"))}))}increaseLevel(){this.level+=1,console.log("level: ",this.level)}createPlatform(t,e){var a,s;const i=new d(this,t,e,"platform",{});this.platforms.add(i),this.lastPlatformY=e,this.firstPlatformY=null==(s=null==(a=this.platforms.getChildren())?void 0:a.at)?void 0:s.call(a,0).y}generatePlatforms(){const t=a.Math.Between(x.x-150,x.x+150),e=this.lastPlatformY-a.Math.Between(320,360);this.createPlatform(t,e),this.lastPlatformY=e}updatePlatformCollisions(){const t=this.lizard.body.velocity.y<0;this.lizard.body.velocity.x,this.lizard.body.velocity.x,t?this.lizard.setCollidesWith([l.Disabled,l.Coin,l.Bat,l.Flower]):this.lizard.setCollidesWith([l.Platform,l.Coin,l.Bat,l.Flower])}createCoin(t,e){const a=this.matter.add.sprite(t,e,"coin",void 0,{label:"coin"});a.setScale(2),a.setIgnoreGravity(!0),a.setBounce(.5),a.setData("label","coin"),a.anims.play("coin"),a.setCollisionCategory(l.Coin),a.setCollidesWith([l.Player]),this.coins.add(a)}handleCollision(t){t.pairs.forEach((t=>{const e=t.bodyA,a=t.bodyB,s=e.gameObject,i=a.gameObject,r=s&&"girl"===s.getData("label"),n=s&&"platform"===s.getData("label"),l=i&&"girl"===i.getData("label"),o=i&&"platform"===i.getData("label");if((r&&o||l&&n)&&this.lizard.body.velocity.y>0){const t=this.level>2?.7*this.level:0;this.lizard.setVelocityY(-17-t)}const h=s&&"bat"===s.getData("label"),p=i&&"bat"===i.getData("label");(r&&p||l&&h)&&(this.coinCount-=2,this.coinText.setText(`Монеты: ${this.coinCount}`),this.cameras.main.shake(200,.05),h&&s.destroy(!0),p&&i.destroy(!0))}))}cleanPlatforms(){this.platforms.getChildren().forEach((t=>{t.y>this.cameras.main.scrollY+1100&&t.destroy(!0)}))}cleanCoins(){this.coins.getChildren().forEach((t=>{t.y>this.cameras.main.scrollY+1100&&t.destroy()}))}createFloatingText(t,e,a){console.log("create floating text: ",a);const s=this.add.text(t,e,a,{fontSize:"36px",color:"#FFD700",fontStyle:"bold",wordWrap:{width:350}});s.setDepth(800),s.setScrollFactor(0),this.coinsChanged.add(s),this.tweens.add({targets:s,y:e-150,alpha:0,duration:7e3,ease:"Cubic.easeOut",onComplete:()=>s.destroy()})}handleCoinCollision(t){t.pairs.forEach((t=>{const e=t.bodyA,s=t.bodyB,r=e.gameObject,n=s.gameObject;r&&r.getData("label"),r&&r.getData("label"),n&&n.getData("label"),n&&n.getData("label");const l=[e,s].find((t=>{var e;return"coin"===(null==(e=null==t?void 0:t.gameObject)?void 0:e.getData("label"))})),o=[e,s].find((t=>{var e;return"girl"===(null==(e=null==t?void 0:t.gameObject)?void 0:e.getData("label"))}));if(l&&o){const t=l.gameObject;this.coinCount++,this.coinText.setText(`Монеты: ${this.coinCount}`),10===this.coinCount&&this.increaseLevel(),20===this.coinCount&&this.increaseLevel(),30===this.coinCount&&this.increaseLevel(),t.destroy(!0),this.sound.play("grab-coin",{volume:.3,detune:a.Math.Between(0,1200)})}const h=[e,s].find((t=>{var e;return"tulip"===(null==(e=null==t?void 0:t.gameObject)?void 0:e.getData("label"))}));if(h&&o){const t=h.gameObject;this.coinCount+=20,this.coinText.setText(`Монеты: ${this.coinCount}`),this.createFloatingText(this.cameras.main.centerX-150,this.cameras.main.centerY-250,i[a.Math.Between(0,i.length-1)]),t.destroy(!0),this.sound.play("grab-coin",{volume:.3,detune:a.Math.Between(0,1200)})}}))}}const w={type:a.WEBGL,canvas:document.querySelector("#phaser"),fps:{limit:140},scale:{mode:a.Scale.RESIZE,autoCenter:a.Scale.CENTER_BOTH},physics:{default:"matter",matter:{gravity:{y:1}}},scene:[s,h,y,_]};new a.Game(w);
