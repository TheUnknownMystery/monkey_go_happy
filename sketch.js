//variables

var block, monkey, monkey_img, rock, rock_img, fruit, fruit_img_2, survival=0
  
  
//preloading images
function preload() {
monkey_img = loadAnimation("sprite_0.png", "sprite_1.png ", "sprite_2.png", "sprite_3.png");
  
rock_img = loadImage("obstacle.png");
  
fruit_Img_2 = loadImage("banana.png");

                    }

//setup function

function setup() {
  
  createCanvas(400, 400);
 
  
//creating monkey sprite

  monkey = createSprite(29, 347, 10, 10);
  
  monkey.addAnimation("running", monkey_img);
  
  monkey.scale = 0.1

}



function draw() {
// monkey.debug=true
//background    
background("white")
//survival time  
survival=Math.ceil(frameCount/frameRate())
  
text("time:"+survival,300,100)
 


 
if(keyDown("space")){
monkey.velocityY=-6  
  
  
  
}

  
  monkey.velocityY=monkey.velocityY+0.5
//calling functions
block();
 block. collide (monkey);   
rock_1();
  
fruits_1();

//reset ground
  
  if (block.x < 0) {
    
    block.x = 200;
    
}
drawSprites(); }
  
//functions
  
function block_1() {
  
  block = createSprite(10, 380, 800, 10);
  
  block.velocityX = -6
  
}

function rock_1() {
  
if(World.frameCount%300===0){
  
  rock = createSprite(200, 340, 10, 10)
  
  rock.addImage(rock_img);
  
  rock.scale = 0.2
  
  rock.lifetime=50
                            }
                  }
  
 

function fruits_1() {
if (World.frameCount%80===0){
  
  fruit = createSprite(200,Math.round(random(120,200)) , 10, 10);
  
  fruit.addImage("fruits",fruit_Img_2);
  
  fruit.scale=0.1;
  
  fruit.velocityX=-7;
  
  fruit.lifetime=400/60;
                             }
                  }
