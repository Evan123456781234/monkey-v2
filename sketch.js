
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, bananas
var FoodGroup, obstacleGroup
var ground
var score, display


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas = (400,400);

FoodGroup = new Group(); 
obstacleGroup = new Group();  
  monkey = createSprite(80,340,100,100);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  score = 0;
  
}


function draw() {
background(220);


display = Math.ceil(frameCount/frameRate());
text("survival Time: " + display,300,30)

ground = createSprite(200,390, 400, 20);
monkey.collide(ground);

ground.velocityX = -2;


  
if(keyDown("space")){
monkey.velocityY = -15
}
monkey.velocityY = monkey.velocityY + 1;
if(ground.x>0){
ground.x = ground.width/2;
}
obst();
bananasfruit();
drawSprites();
}
function bananasfruit(){
if(frameCount % 80==0){
banana = createSprite(400,Math.round(random(120,200)),20,20);
banana.addImage(bananaImage);
banana.scale = 0.2;
banana.velocityX = -5;
banana.lifetime = 85;
FoodGroup.add(banana);
}
}
function obst(){  
if(frameCount % 300==0){
obstacle = createSprite(400,360,40,40);
obstacle.addImage(obstacleImage);
obstacle.scale = 0.4;
obstacle.velocityX = -7;
obstacle.lifetime = 80;
obstacleGroup.add(obstacle);
}
}