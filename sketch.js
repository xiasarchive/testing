let balls = [];
const nameItems = [];
let capture1;
let buttonClick = -1;

let nameInput;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture1 = createCapture(VIDEO);
  capture1.hide();
  
  
  nameInput = createInput();
  nameInput.position(20, 65);
  
  button = createButton('submit');
  button.position(nameInput.x + nameInput.width, 65);
  button.mousePressed(greet);
  

}

function draw() {
  
  image(capture1,0, 0, width, height)
  for (let i=0; i<balls.length; i++){
    balls[i].drawText();
    balls[i].moveText();
    balls[i].checkBoundary();
    balls[i].fadeText();
  }
  
  for (let j = 0; j<nameItems.length; j++) {
   let name = nameInput.value(); 
   text(name, 0, 0);
    }

}




function greet(){
  buttonClick += 1;
  balls.push(new Ball(random(width), random(height), buttonClick));
  
  
  nameItems.push(nameInput.value());  
  
}