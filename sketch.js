var box 
function setup() {
  createCanvas(800,600);
  box = createSprite(200,200,300,100);
  box.shapeColor = "Yellow"
}

function draw() 
{
  background("skyblue");
  fill("red");
  rect (400,300,50,50);
  fill("green");
  ellipse (250,400,100,100);
  fill("blue");
  textFont("Georgia");
  textSize("20");
  text("Different shapes",250,20);
  triangle (300,300,350,300,325,250,300,300)
  if (keyIsDown(RIGHT_ARROW)) {
    box.x += 4;
  }
  if (keyIsDown(LEFT_ARROW)){
    box.x -= 4;
  }
  if (keyIsDown(UP_ARROW)){
    box.y -= 4;
    }
  if (keyIsDown(DOWN_ARROW)) {
    box.y += 4;
  }
  drawSprites()
}
