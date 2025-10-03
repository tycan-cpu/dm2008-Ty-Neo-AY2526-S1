//DDM2008 — Activity 2a
// (Mode Switch, 20 min)

let x = 0; // ellipse x-position
let size = 50; // ellipse size (you can change this in your if/else)
let bgColor; // background color set by switch(key)

function setup() {
  createCanvas(400, 400);
  bgColor = color(255);
}

function draw() {
  background(bgColor);
  textAlign(CENTER);
  textSize(20);

  // --- Movement (base behaviour) ---
  // The ellipse moves to the right each frame.
  // If you decide to control speed with an if/else below,
  // REMOVE or comment out this next line so you don't "double add" to x.
 // x += 5;

  // Wrap around when it exits the right edge
  if (x > width + size / 2) {
    x = 0;
  }

  // --- Your if/else goes here (choose ONE behaviour rule) ---
  // Examples (uncomment ONE idea, or write your own):
  //
  // 1) Change colour on mouse press
  // if (mouseIsPressed) {
  //   fill(255, 0, 0);
  // } else {
  //   fill(0);
  // }
  //
  // 2) Change size on right half
  // if (x > width / 2) {
  //   size = 80;
  // } else {
  //   size = 50;
  // }
  //
  // 3) Change speed using mouse position (THEN comment out x += 2; above)
  if (mouseX > width / 4) {
    x += mouseX / 50; // first quad normal; after that it slowly speeds up based on mouseX
  } else {
    x += 2; // slower on left
  }
  //
  // Keep it simple: one clear rule that is easy to see on screen.

  // --- Draw the ellipse (after your if/else so changes apply this frame) ---
  // If you didn't set fill() in your rule above, it will be black.
  fill(0);
  ellipse(x, height / 2, size);

  // Stretch (optional, if you finish early):
  // - Draw a rect instead of an ellipse when mouseIsPressed.

  r = 0; // r is a random number between 0 - 255
  g = 255; // g is a random number betwen 100 - 200
  b = 0; // b is a random number between 0 - 100
  a = mouseY; // a is a random number between 200 - 255
}

// p > o > i on keyboard: party on u
// a > s > d on keyboard: part of u knew
// bcuz i saw those girlhood tiktoks and thought this was funny and brat
function keyPressed() {
  switch (key) {
    case "p":
      bgColor = color(r, g, b, 50); // party
      text("party", width / 2, height / 2);
      fill(0, 0, 0, 30);
      textSize(100);
      text("party", width / 2, height / 2);
      break;
    case "o":
      bgColor = color(r, g, b, 50); // 4
      text("on", width / 2, height / 2);
      fill(0, 0, 0, 30);
      textSize(100);
      text("on", width / 2, height / 2);
      break;
    case "i":
      bgColor = color(r, g, b, 50); // u
      text("u", width / 2, height / 2);
      fill(0, 0, 0, 30);
      textSize(100);
      text("u", width / 2, height / 2);
      break;
    case "a":
      bgColor = color(r, g, b, 50); // u
      text("part", width / 2, height / 2);
      fill(0, 0, 0, 30);
      textSize(100);
      text("part", width / 2, height / 2);
      break;
    case "s":
      bgColor = color(r, g, b, 50); // u
      text("of u", width / 2, height / 2);
      fill(0, 0, 0, 30);
      textSize(100);
      text("of u", width / 2, height / 2);
      break;
    case "d":
      bgColor = color(r, g, b, 50); // u
      text("knew", width / 2, height / 2);
      fill(0, 0, 0, 30);
      textSize(100);
      text("knew", width / 2, height / 2);
      break;
    default:
      bgColor = color(255);
  }
}

//export screenshot of canvas
function mousePressed() {
  saveCanvas("activity2a-image", "jpg");
}