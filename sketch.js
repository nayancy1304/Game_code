var pathimg,path, boy,boy2,invisibleB1,invisibleB2;
function preload(){
  //pre-load images
  pathimg = loadImage("path.png");
  boy2 = loadAnimation("Runner-1.png","Runner-2.png"); 
}

function setup(){
  createCanvas(360,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage("path",pathimg);
  path.velocityY = 4;
  path.scale = 1.2;
  boy = createSprite(140,200);
  boy.addAnimation("boy",boy2);
  boy.scale = 0.1;
  invisibleB1 = createSprite(20,200,20,200);
  invisibleB1.visible = false;
  invisibleB1 = createSprite(380,200,20,200);
  invisibleB1.visible = false;
}

function draw() {
  background("white");
  if (path.y > 400) {
    path.y = height/2;
  }
  boy.x = World.mouseX;
  
  drawSprites()
}
