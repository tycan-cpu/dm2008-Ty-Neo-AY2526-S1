// DM2008 – Activity 4a
// Bake a Cookie (30 min)

let cookie;
let flavors = ["chocolate", "goop", "butter", "strawberry"];

function setup() {
  rectMode(CENTER);
  createCanvas(400, 400);
  noStroke();

  cookie = new Cookie("chocolate");
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);

  textSize(10);
  text("click for different order yum", width / 2, (height / 7) * 6);
  text("wasd to run away raaaa", width / 2, (height / 9) * 8);
  textSize(20);
  text(cookie.flavor, width / 2, height / 12);
  cookie.show();
}

// Step 1: define the Cookie class
class Cookie {
  constructor(flavor) {
    // set up required properties
    this.flavor = flavor;
    this.cookieSize = 200;
    this.x = width / 2;
    this.y = height / 2;
  }

  // Step 2: display the cookie
  show() {
    if (this.flavor == "chocolate") {
      fill("#5E3516");
      circle(this.x, this.y, this.cookieSize);
    } else if (this.flavor == "goop") {
      fill("#0EFF00");
      circle(this.x, this.y, this.cookieSize);
      rect(
        this.x,
        this.y - this.cookieSize / 2,
        this.cookieSize / 6,
        this.cookieSize / 2
      );
      ellipse(
        this.x,
        this.y - this.cookieSize / 1.4,
        this.cookieSize / 3,
        this.cookieSize / 5
      );
    } else if (this.flavor == "butter") {
      fill("#BCA02C");
      circle(this.x, this.y, this.cookieSize);
    } else if (this.flavor == "strawberry") {
      fill("#FFC0CB");
      ellipse(this.x, this.y, this.cookieSize);
      fill("#9B3749");
      circle(this.x, this.y, this.cookieSize / 1.5);
    }
  }

  move() {
    if (key == "w") {
      //up
      this.y -= 3;
    } else if (key == "a") {
      //left
      this.x -= 3;
    } else if (key == "s") {
      //down
      this.y += 3;
    } else if (key == "d") {
      //right
      this.x += 3;
    } else if (key == "x") {
      //reset
      this.x = width / 2;
      this.y = height / 2;
    } else if (key == "4") {
      //press 4 export for archive
      saveCanvas("activity4a-image", "jpg");
    }
  }
}

// Step 5: add movement (keyboard arrows)
function keyPressed() {
  cookie.move();
}

// Step 6: add flavor randomizer (mouse click)
function mousePressed() {
  cookie.flavor = random(flavors);
}
