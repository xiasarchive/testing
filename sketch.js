let capture1;
var mem = "";
let opac = 255;
let bounce = false;
let y = -100;
let x ;

function setup() {
  createCanvas(400, 400);
  capture1 = createCapture(VIDEO);
  x = random(0,100)
}

function draw() {
  background(300);
  text(mem, 100, 100);
  noStroke();
  fill(250,10,10,opac)
  if (y > 410) {
      y = -100
      }
 else {
      y += 1
      }
  rect(x,y,100,100)
  if (frameCount % 100 == 0) {
    opac -= 1;
  }
}

function keyPressed() {
  mem += key;
}