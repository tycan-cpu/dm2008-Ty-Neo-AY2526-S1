// DM2008
// Activity 1b (Ryoji Ikeda)

let x;
let w;

function setup() {
  createCanvas(800, 800);
  background(255);
  noStroke();
  fill(0);
}

function draw() {
  background(255, 50); //can add opacity in bg for animation

  r = random(255); 
  g = random(255); 
  b = random(255); 
  a = mouseY;

  x = mouseX;
  w = mouseX;
  fill(0);
  rect(x, 0, w, height / 2); //black rect, half the screen

  fill(r, g, b, a);
  rect(x, height / 2, w, height / 2); //random rainbow rect, other half

  fill("white");
  textAlign(CENTER);
  textSize(50);
  text("push", 200, 400);
  
  //if my mouse goes across a certain threshold, the code will bully u
  if (mouseX > 300) { 
    fill("white");
    textAlign(CENTER);
    textSize(10);
    text("why r u listening to a screen lol loser", 600, 400);
  }
}

//export screenshot of canvas
function mousePressed() {
  saveCanvas("activity1b-image", "jpg");
}