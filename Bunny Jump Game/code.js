var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["411be710-0d75-482b-9425-f6da566deb5a","95646412-8242-48ab-9598-7dc035195ff1","532fef13-30eb-402a-8075-bb7e88ef2de4","2ccfbfa3-4b97-466a-973d-975754c8934a","01fce788-023c-47cd-8113-727be0e023f4","df06615b-bb1f-451a-baad-03b2477d4648","9bb82039-4a32-4a15-8f12-3862c7bf6f08","f8ab7abd-0ab5-40c0-adf7-8c8e204dce77","40f6ed71-4eed-4da5-9c9d-212cd05f712d","52b36495-6860-4a08-b1de-c1752f048296","68fc0db5-393c-4fb1-b4c0-6d34ac732a29","f6a957fd-95d7-4e58-846c-b694053f306c","2de0872b-1001-49d4-aaad-1abf26f88739","ac2e916e-3afd-4dc8-9601-691350cc7f83","85088b07-5f61-4d94-a6d9-042045135ee8","d3fd2145-e470-42bb-9e3b-9b474d03cdc4","a1eca2b5-775a-475b-848e-5fe2254feac0"],"propsByKey":{"411be710-0d75-482b-9425-f6da566deb5a":{"name":"dirt_grass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7cqiOAG_gXzvCVsfyCbwxioWXMvOxT2z/category_video_games/dirt_grass.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"7cqiOAG_gXzvCVsfyCbwxioWXMvOxT2z","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7cqiOAG_gXzvCVsfyCbwxioWXMvOxT2z/category_video_games/dirt_grass.png"},"95646412-8242-48ab-9598-7dc035195ff1":{"name":"bunny1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8TLmDuJkDKzewjEMX.aeXDfKfX0v3DHg/category_animals/bunny1.png","frameSize":{"x":122,"y":209},"frameCount":2,"looping":true,"frameDelay":2,"version":"8TLmDuJkDKzewjEMX.aeXDfKfX0v3DHg","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":209},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8TLmDuJkDKzewjEMX.aeXDfKfX0v3DHg/category_animals/bunny1.png"},"532fef13-30eb-402a-8075-bb7e88ef2de4":{"name":"bunny1_ready_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qK4aRpIy7j6cT3CbOFjSpMeU4KhS0KZM/category_animals/bunny1_ready.png","frameSize":{"x":120,"y":191},"frameCount":1,"looping":true,"frameDelay":2,"version":"qK4aRpIy7j6cT3CbOFjSpMeU4KhS0KZM","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qK4aRpIy7j6cT3CbOFjSpMeU4KhS0KZM/category_animals/bunny1_ready.png"},"2ccfbfa3-4b97-466a-973d-975754c8934a":{"name":"bunny1_jump_1","sourceUrl":"assets/api/v1/animation-library/gamelab/23SqnwjCLjrxlj.rVn2Y96aRTB2k7i_J/category_animals/bunny1_jump.png","frameSize":{"x":150,"y":181},"frameCount":1,"looping":true,"frameDelay":2,"version":"23SqnwjCLjrxlj.rVn2Y96aRTB2k7i_J","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":181},"rootRelativePath":"assets/api/v1/animation-library/gamelab/23SqnwjCLjrxlj.rVn2Y96aRTB2k7i_J/category_animals/bunny1_jump.png"},"01fce788-023c-47cd-8113-727be0e023f4":{"name":"bunny1_hurt_1","sourceUrl":"assets/api/v1/animation-library/gamelab/iAgEA.T3Kkj8V1dyHUrOXAErKxRZM9Us/category_animals/bunny1_hurt.png","frameSize":{"x":150,"y":174},"frameCount":1,"looping":true,"frameDelay":2,"version":"iAgEA.T3Kkj8V1dyHUrOXAErKxRZM9Us","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":174},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iAgEA.T3Kkj8V1dyHUrOXAErKxRZM9Us/category_animals/bunny1_hurt.png"},"df06615b-bb1f-451a-baad-03b2477d4648":{"name":"ground_grass_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/tlmfqLFvxwFb489oXAwsvg5tN_lFfiVS/category_video_games/ground_grass_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"tlmfqLFvxwFb489oXAwsvg5tN_lFfiVS","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tlmfqLFvxwFb489oXAwsvg5tN_lFfiVS/category_video_games/ground_grass_broken.png"},"9bb82039-4a32-4a15-8f12-3862c7bf6f08":{"name":"ground_grass_small_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/__jk7dREQntYpRunAR5vLFKlJtvBtWoJ/category_video_games/ground_grass_small_broken.png","frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":2,"version":"__jk7dREQntYpRunAR5vLFKlJtvBtWoJ","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/api/v1/animation-library/gamelab/__jk7dREQntYpRunAR5vLFKlJtvBtWoJ/category_video_games/ground_grass_small_broken.png"},"f8ab7abd-0ab5-40c0-adf7-8c8e204dce77":{"name":"sun_happy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jUZ7f4J2epX4bHKIb0dIGPT1hYAFlNYe/category_video_games/sun_happy.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"jUZ7f4J2epX4bHKIb0dIGPT1hYAFlNYe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jUZ7f4J2epX4bHKIb0dIGPT1hYAFlNYe/category_video_games/sun_happy.png"},"40f6ed71-4eed-4da5-9c9d-212cd05f712d":{"name":"ground_stone_1","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"cJ48p2G1s4tIdyA0MWgz4wUipieEqubw","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/40f6ed71-4eed-4da5-9c9d-212cd05f712d.png"},"52b36495-6860-4a08-b1de-c1752f048296":{"name":"carrot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/kkeHewSq4Bbcng5xHNJjaswOHWllYItp/category_food/carrot.png","frameSize":{"x":78,"y":70},"frameCount":1,"looping":true,"frameDelay":2,"version":"kkeHewSq4Bbcng5xHNJjaswOHWllYItp","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":70},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kkeHewSq4Bbcng5xHNJjaswOHWllYItp/category_food/carrot.png"},"68fc0db5-393c-4fb1-b4c0-6d34ac732a29":{"name":"rock_moss_1","sourceUrl":null,"frameSize":{"x":90,"y":46},"frameCount":1,"looping":true,"frameDelay":12,"version":"hl32jrS4Q2r2Z_3QO8_76cemAeUn5JYJ","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":46},"rootRelativePath":"assets/68fc0db5-393c-4fb1-b4c0-6d34ac732a29.png"},"f6a957fd-95d7-4e58-846c-b694053f306c":{"name":"ground_grass_small_2","sourceUrl":"assets/api/v1/animation-library/gamelab/ZZDNUrARcQdzlC5sWBpbNcSf.53VVggY/category_video_games/ground_grass_small.png","frameSize":{"x":201,"y":100},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZZDNUrARcQdzlC5sWBpbNcSf.53VVggY","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":201,"y":100},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZZDNUrARcQdzlC5sWBpbNcSf.53VVggY/category_video_games/ground_grass_small.png"},"2de0872b-1001-49d4-aaad-1abf26f88739":{"name":"ground_grass_2","sourceUrl":"assets/api/v1/animation-library/gamelab/48a_8kq4NSAHoLjO0VNWNhoKgKghcJDK/category_video_games/ground_grass.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"48a_8kq4NSAHoLjO0VNWNhoKgKghcJDK","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/48a_8kq4NSAHoLjO0VNWNhoKgKghcJDK/category_video_games/ground_grass.png"},"ac2e916e-3afd-4dc8-9601-691350cc7f83":{"name":"cloud_2","sourceUrl":null,"frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":12,"version":"bo5UuUU7lKFZI4Rn18lhNO5PpyyANMYW","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/ac2e916e-3afd-4dc8-9601-691350cc7f83.png"},"85088b07-5f61-4d94-a6d9-042045135ee8":{"name":"flower_1","sourceUrl":"assets/api/v1/animation-library/gamelab/QK5UiR3Ac1WgRhwaCsIB1UfnbUhSQhcW/category_video_games/flower.png","frameSize":{"x":336,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"QK5UiR3Ac1WgRhwaCsIB1UfnbUhSQhcW","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QK5UiR3Ac1WgRhwaCsIB1UfnbUhSQhcW/category_video_games/flower.png"},"d3fd2145-e470-42bb-9e3b-9b474d03cdc4":{"name":"plants_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/eT6fcCes91_Dm3ACOzNMCh7aJ1_w7sqp/category_video_games/plants_06.png","frameSize":{"x":393,"y":330},"frameCount":1,"looping":true,"frameDelay":2,"version":"eT6fcCes91_Dm3ACOzNMCh7aJ1_w7sqp","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":330},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eT6fcCes91_Dm3ACOzNMCh7aJ1_w7sqp/category_video_games/plants_06.png"},"a1eca2b5-775a-475b-848e-5fe2254feac0":{"name":"grass01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yyYHQJtCJybczCCSvwt8Xpfol3HjDtBD/category_video_games/grass01.png","frameSize":{"x":248,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"yyYHQJtCJybczCCSvwt8Xpfol3HjDtBD","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yyYHQJtCJybczCCSvwt8Xpfol3HjDtBD/category_video_games/grass01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Bunny Jump Game
var gamemode = 'play';
playSound("assets/category_loops/vibrant_game_harping_down_forever_loop_2_accent.mp3", true);

//plants
var grass1 = createSprite(370,350,10,10);
grass1.setAnimation("plants_06_1");
grass1.scale = 0.2;
var grass2 = createSprite(20,350,10,10);
grass2.setAnimation("plants_06_1");
grass2.mirrorX(-1);
grass2.scale = 0.2;
var grass3 = createSprite(160,350,10,10);
grass3.setAnimation("flower_1");
grass3.scale = 0.1;
var grass4 = createSprite(340,280,10,10);
grass4.setAnimation("grass01_1");
grass4.scale = 0.08;
var grass5 = createSprite(350,280,10,10);
grass5.setAnimation("grass01_1");
grass5.scale = 0.08;
var grass6 = createSprite(240,80,10,10);
grass6.setAnimation("grass01_1");
grass6.scale = 0.07;
var grass7 = createSprite(250,80,10,10);
grass7.setAnimation("grass01_1");
grass7.scale = 0.07;

//clouds
var cloud1 = createSprite(200,40,10,10);
cloud1.setAnimation("cloud_2");
cloud1.scale = 0.2;
var cloud2 = createSprite(80,120,10,10);
cloud2.setAnimation("cloud_2");
cloud2.scale = 0.2;
var cloud3 = createSprite(280,160,10,10);
cloud3.setAnimation("cloud_2");
cloud3.scale = 0.2;

//sun
var sun = createSprite(360,40,10,10);
sun.setAnimation("sun_happy_1");
sun.scale = 0.4;

//carrot!!!
var rise = 0.1;
var carrot = createSprite(40,40,10,10);
carrot.setAnimation("carrot_1");
carrot.scale=0.6;


//platforms
var plat1 = createSprite(305,310,10,10);
plat1.setAnimation("ground_grass_broken_1");
plat1.scale=0.4;
var plat2 = createSprite(150,250,10,10);
plat2.setAnimation("ground_grass_small_2");
plat2.scale=0.3;
var plat3 = createSprite(70,200,10,10);
plat3.setAnimation("ground_grass_small_broken_1");
plat3.scale=0.4;
var plat4 = createSprite(350,190,10,10);
plat4.setAnimation("ground_grass_small_2");
plat4.scale=0.3;
var plat5 = createSprite(390,130,10,10);
plat5.setAnimation("ground_grass_small_broken_1");
plat5.scale=0.3;
var plat6 = createSprite(260,100,10,10);
plat6.setAnimation("ground_grass_broken_1");
plat6.scale=0.2;
var plat7 = createSprite(150,90,10,10);
plat7.setAnimation("ground_grass_2");
plat7.scale=0.2;
var plat8 = createSprite(50,80,10,10);
plat8.setAnimation("ground_grass_small_2");
plat8.scale=0.3;


//moving platform
var platMove = createSprite(200,180,10,10);
platMove.setAnimation("ground_stone_1");
platMove.scale=0.2;
platMove.velocityX = 2;

//cosmetics
var rock1 = createSprite(205,350,10,10);
rock1.setAnimation("rock_moss_1");


//ground
var ground1 = createSprite(20,395,20,20);
ground1.setAnimation("dirt_grass_1");
ground1.scale=0.5;
var ground2 = createSprite(80,395,20,20);
ground2.setAnimation("dirt_grass_1");
ground2.scale=0.5;
var ground3 = createSprite(140,395,20,20);
ground3.setAnimation("dirt_grass_1");
ground3.scale=0.5;
var ground4 = createSprite(200,395,20,20);
ground4.setAnimation("dirt_grass_1");
ground4.scale=0.5;
var ground5 = createSprite(260,395,20,20);
ground5.setAnimation("dirt_grass_1");
ground5.scale=0.5;
var ground6 = createSprite(320,395,20,20);
ground6.setAnimation("dirt_grass_1");
ground6.scale=0.5;
var ground7 = createSprite(380,395,20,20);
ground7.setAnimation("dirt_grass_1");
ground7.scale=0.5;

var player = createSprite(20,340,20,20);
player.setAnimation("bunny1_ready_1");
player.scale = 0.2;



var Pcontrol = true;

//gravity
var gravity = 0.8;


function draw() {/////////////////////////////




if(gamemode == 'play'){
background(0,200,230);
createEdgeSprites();

//bouncing functions

player.collide(edges);
player.velocityX=0;

player.collide(ground1);
player.collide(ground2);
player.collide(ground3);
player.collide(ground4);
player.collide(ground5);
player.collide(ground6);
player.collide(ground7);

platMove.bounceOff(plat3);
platMove.bounceOff(plat4);

player.bounceOff(platMove);

player.collide(rock1);

player.collide(plat1);
player.collide(plat2);
player.collide(plat3);
player.collide(plat4);
player.collide(plat5);
player.collide(plat6);
player.collide(plat7);
player.collide(plat8);



//Sprite Controls

if(player.velocityY == 0){
  Pcontrol = true;
}
  
if(keyDown(LEFT_ARROW)){
  player.x=player.x-5;
  player.setAnimation("bunny1_1");
  player.mirrorX(-1);
}

if(keyDown(RIGHT_ARROW)){
  player.x=player.x+5;
  player.setAnimation("bunny1_1");
  player.mirrorX(1);
}
if(Pcontrol == true){
  
if(keyDown(UP_ARROW)){
  player.velocityY = -10;
  player.setAnimation("bunny1_jump_1");
  playSound("assets/category_jump/arcade_game_jump_11.mp3", false);
  Pcontrol = false;
    
}
}

carrot.y = carrot.y - rise;
if(carrot.y >= 45){
  rise = -rise;
}
if(carrot.y <= 35){
  rise = -rise;
}

if(player.isTouching(carrot)){
  playSound("assets/category_notifications/lighthearted_notification_2.mp3", false);
  gamemode = 'win';
  
}


player.velocityY = player.velocityY + gravity;
drawSprites();

}//end of gamemode play

if(gamemode == 'win'){
  background(0,200,230);
  drawSprites();
  text("Press Enter to Play Again",20,280);
  textSize(50);
  fill('yellow');
  stroke('orange');
  strokeWeight(5);
  text("You Win!",90,160);
  
  platMove.velocityX = 0;
  player.y = 50;
  player.x = 70; 
  
  if(keyDown(ENTER)){
    player.x = 20;
    player.y = 340;
    platMove.velocityX = 2;
    gamemode = 'play';
  }
  
}





}//end of function draw
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
