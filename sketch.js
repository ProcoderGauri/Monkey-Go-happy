
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivaltime=0;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
ground=createSprite(200,380,400,10);
ground.visible=false;
ground.velocityX=-4;
console.log(ground.x);
  
monkey=createSprite(80,350,50,50);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.15;

  
  bananaGroup= new Group();
  obstacleGroup= new Group();
    
}

function draw() {
  background("green");
  Spawnbanana();
  SpawnObstacle();
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
}
  monkey.velocityY += 0.8;
  drawSprites();
  monkey.collide(ground);
  stroke("white");
textSize(20);
fill("white");
text("score;"+score,500,50);
  stroke("black");
textSize(20);
fill("black");
  


survivaltime=Math.ceil(frameCount/frameRate());
text("Survival Time:"+survivaltime,100,50);
   if (obstacleGroup.isTouching(monkey)){
        obstacleGroup.setVelocityXEach(0);
         ground.velocityX=0;
         monkey.velocityX=0;
         survivaltime=0;
         }

}





        


function Spawnbanana(){
if (frameCount%60===0){

banana=createSprite(500,100,10,10);
banana.addImage("banana",bananaImage);
banana.scale=0.09;
banana.velocityX=-5;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  bananaGroup.add(banana);
    }
 }
}
function SpawnObstacle(){
  if(frameCount % 60 === 0) {
     obstacle = createSprite(600,350,10,10);
   obstacle.velocityX = -4
   
    obstacle.lifetime=300;
    obstacle.addAnimation("stone",obstacleImage);
    obstacle.scale=0.12;
    
    obstacleGroup.add(obstacle);  
}
}