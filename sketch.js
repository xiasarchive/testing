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
  
  nameInput = select("#textInput");
  nameInput.position(width/2-204, windowHeight-160);
  nameInput.size(400, 100);
  
  button = select("#textButton");
  button.position(width/2 - 205, nameInput.y+115);
  button.size(410, 30)
  button.mousePressed(greet);
  
  

}

function draw() {
  background(255)
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
  fill(255,50, 50);
  textAlign(CENTER);
  textSize(50);
  strokeWeight(2);
  textFont('times new roman');
  text("do you remember ?", width/2, 100,);
  
}




function greet(){
  buttonClick += 1;
  balls.push(new Ball(random(width), random(height), buttonClick));  
  nameItems.push(nameInput.value());  
  
  
}

function submitForm() {
   var frm = document.getElementsByName('form')[0];
   frm.reset();  // Reset all form data
   return false; // Prevent page refresh
}