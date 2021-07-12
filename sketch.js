var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage("Apple",appleImg);
  apple.scale = 0.1
  apple.velocityY +=2
}

function createLeaves() {
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage("Leaves",leafImg);
  leaves.scale = 0.1
  leaves.velocityY +=2
}

apple. lifetime=15;
leaves. lifetime=15;

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  var select_sprites = Math.round(random(1,2));

  drawSprites();
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples()
    }
    else {
      createLeaves()
    }

  }
}

