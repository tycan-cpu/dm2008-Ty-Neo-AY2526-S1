// DM2008 — Activity 3a
// (Array Sampler, 25 min)

// 1. Create an array of colors (or other values)
//    You can make more than one array if you'd like
let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b"];

// 2. A variable to track the current index
let currentIndex = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0, 1); // wanted disappearing paint

  // to have cycling colours for the circle and the paint colour
  if (currentIndex - 1 < 0) {
    fill(palette[palette.length - 1]);
  } else {
    fill(palette[currentIndex - 1]);
  }

  rect(mouseX, mouseY, 80, 80); // paintbrush!

  // 3. Use the array value at currentIndex
  fill(palette[currentIndex]);
  ellipse(width / 2, height / 2, 200);
}

// 4. Change the index when a key is pressed
function mousePressed() {
  // Advance to the next item
  currentIndex++;

  // Reset to 0 when we reach the end
  if (currentIndex >= palette.length) {
    currentIndex = 0;
  }

  // Log in the console to check
  console.log("Current index:", currentIndex, "→", palette[currentIndex]);
}

// b to add blue
// w to add white
function keyPressed() {
  switch (key) {
    case "b":
      palette.push("blue");
      break;
    case "w":
      palette.push("white");
      break;
  }
}

/* 
TODOs for students:
1. Replace colors with your own data (positions, text, sizes, etc).
2. Try mousePressed() instead of keyPressed().
3. Use push() to add new items, or splice() to remove them, then check how the sketch adapts.
4. Try looping through an array to visualize all the items within it instead of accessing one item at a time.
*/

//export screenshot of canvas
function keyPressed() {
  saveCanvas("activity3c-image", "jpg");
}