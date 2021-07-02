 
function setup() {
  createCanvas(800,600);
}

function draw() 
{
  background("yellow");
  fill("blue");
  textFont("Georgia");
  textSize("20");
  text("Different background colors",250,20);
  triangle (300,300,350,300,325,250,300,300)
  if (keyIsDown(RIGHT_ARROW)) {
    background("cyan");
    fill("blue");
    textFont("Georgia");
    textSize("20");
    text("Different background colors",250,20);
    triangle (300,300,350,300,325,250,300,300)
  }
  if (keyIsDown(LEFT_ARROW)){
    background("purple");
    fill("blue");
    textFont("Georgia");
    textSize("20");
    text("Different background colors",250,20);
    triangle (300,300,350,300,325,250,300,300)
  }
  if (keyIsDown(UP_ARROW)){
    background("red")
    fill("blue");
    textFont("Georgia");
    textSize("20");
    text("Different background colors",250,20);
    triangle (300,300,350,300,325,250,300,300)
    }
  if (keyIsDown(DOWN_ARROW)) {
    background("green");
    fill("blue");
    textFont("Georgia");
    textSize("20");
    text("Different background colors",250,20);
    triangle (300,300,350,300,325,250,300,300);
  }
  drawSprites()
}
