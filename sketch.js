var seaImage, ship1, ship;
function preload(){
//loading animation and image
ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(700,600);
  //creating sea and the ship
  sea = createSprite(700,300)
  sea.addImage("Sea",seaImage);
  //giving velocity to the sea
  sea.velocityX = -2
  sea.x = sea.width/2
  ship = createSprite(200,400,30,30)
  ship.addAnimation("Ship",ship1);
  ship.scale = 0.5 
}

function draw() {
  background("white");
  //giving velocity to the ship
  sea.velocityX = -2
  //condition for infinite sea
  if (sea.x < 0) {
    sea.x = sea.width/2
  }
  ship.velocityX = 2
  drawSprites()
}