// DDM2008 — Activity 2b
// (Pattern Making, 40 min)

let h = 10;
let totalCount;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
  frameCount = 20;
}

function draw() {
  background(15, 10);

  fill(255, mouseX / 400); // text slowly appears
  text("can you hear me?", 150, 203);

  // Horizontal row of shapes
  for (let i = 0; i < width; i++) {
    // Alternate colors using % (modulo)
    if (i % 2 == 0) {
      fill(30); // black
    } else {
      colorMode(HSB);
      fill(mouseX, 50, 90); // colour
    }
    //ellipse(i + 25, height/2, 40);
    rect(i * 10, height / 2, 5, h); // my rect soundbars
    h = random(1, mouseX);
  }
}

// TODO: change ellipse to rect, triangle, or something else
// TODO: try varying size instead of color
// TODO: add one interaction (mouse or key) to change the rule
// Example: if (mouseIsPressed) { fill(255, 0, 0); }

//export screenshot of canvas
function mousePressed() {
  saveCanvas("activity2b-image", "jpg");
}