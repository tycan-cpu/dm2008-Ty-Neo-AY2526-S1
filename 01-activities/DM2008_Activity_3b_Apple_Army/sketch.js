// DM2008 — Activity 3b
// (One Function Wonder, 15 min)

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(40);
  //myFriend(width / 2, height / 2, 50, 50); //centre of screen
  myFriend(mouseX, mouseY, 30, 30); //mouse follower
  
  for (let i = 0; i < width; i += 60) {
    for (let j = 0; j < width; j += 60) {
      myFriend(i + j, i, 10, 10);
    }
  }
}

function myFriend(x, y, w, h) {
  noStroke();

  //stem
  fill(20, 255, 50);
  rect(x, y - 2 * h, 0.8 * w, h);

  //apple halves
  fill(255, 20, 50);
  ellipse(x - h, y, 3.5 * h, 4 * h);
  ellipse(x + h, y, 3.5 * h, 4 * h);

  //eye whites
  fill(255);
  ellipse(x - h, y, 2 * w, 1.2 * h);
  ellipse(x + h, y, 2 * w, 1.2 * h);

  //eyeballs
  fill(0);
  ellipse(x - h / 1.5, y, w, h);
  ellipse(x + h / 1.5, y, w, h);
}

// TODO 1:
// Define a function that draws something (a shape or group of shapes).
// It should take at least one parameter (e.g., position, size, or color).

// TODO 2:
// Call your function multiple times with different parameter values.
// myShape(100, 200, 50);
// myShape(300, 200, 80);

// TODO 3:
// (Challenge) Call your function inside a for loop
// to create a repeating pattern or variation.

// Example starter function:
// function myShape(x, y, s) {
//   ellipse(x, y, s, s);
// }

//export screenshot of canvas
function mousePressed() {
  saveCanvas("activity3b-image", "jpg");
}
