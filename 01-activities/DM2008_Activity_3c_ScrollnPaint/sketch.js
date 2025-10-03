// DM2008 — Activity 3c
// (Painting App, 50 min)

// 1) Palette + size
const palette = ["#f06449", "#009988", "#3c78d8", "#eeeeee"];
let colorIndex = 0;
let sizeVal = 20;

// 2) Brush registry (array of functions)
const brushes = [brushCircle, brushSquare, brushStreak];
let currentBrush = 0;
let brushType = [0, 1, 2];

function setup() {
  createCanvas(600, 600);
  background(240);
  rectMode(CENTER);
}

function draw() {
  // paint only while mouse is held
  if (mouseIsPressed) {
    const col = palette[colorIndex];
    // call the selected brush function
    brushes[currentBrush](mouseX, mouseY, col, sizeVal);
  }
}

// 3) Brush functions (students can customize/extend)
function brushCircle(x, y, c, s) {
  noStroke();
  fill(c);
  ellipse(x, y, s);
}

function brushSquare(x, y, c, s) {
  push();
  translate(x, y);
  noStroke();
  fill(c);
  rect(0, 0, s, s);
  pop();
}

function brushStreak(x, y, c, s) {
  stroke(c);
  strokeWeight(max(2, s / 8));
  point(x, y);
}

// 4) Brush UI: select brush, cycle color, change size, clear
// 1,2,3 for diff brush shape
// c for change colour
// e for eraser
// x for clear canvas
// 4 to take pic for archive
function keyPressed() {
  switch (key) {
    case "1":
      currentBrush = 0; // circle
      break;
    case "2":
      currentBrush = 1; // square
      break;
    case "3":
      currentBrush = 2; // streak
      break;
    case "4":
      saveCanvas("activity3c-image", "jpg");
  }
  if (key == "C" || key == "c") {
    colorIndex = (colorIndex + 1) % (palette.length - 1); // cycle color, exclude white
  }
  //if (key == '+' || key == '=') {
  //sizeVal += 4;
  //}
  //if (key == '-' || key == '_') {
  //sizeVal = max(4, sizeVal - 4);
  //}
  if (key == "X" || key == "x") {
    background(240); // clear canvas
  }
  if (key == "E" || key == "e") {
    colorIndex = 3;
  }
}

// scroll to enlarge or smallen the brush size
function mouseWheel(event) {
  if (sizeVal < 4) {
    sizeVal = max(4, sizeVal - 4);
  }

  if (sizeVal > 796) {
    sizeVal = 796;
  }

  if (event.delta > 0) {
    sizeVal += 4;
  } else {
    sizeVal -= 4;
  }

  console.log("CURRENT BRUSH SIZE:", sizeVal);

  // TODO: add an 'E' (eraser) mode by painting with background color
  // e.g., if eraserMode, use color(240) instead of palette[colorIndex]
}
