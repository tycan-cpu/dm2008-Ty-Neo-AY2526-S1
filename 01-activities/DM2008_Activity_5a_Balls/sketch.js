// DM2008 – Activity 5a
// Colliding Circles (30 min)

let balls = [];

function setup() {
  createCanvas(400, 400);

  // Step 1: create two Ball objects
  // i made a lot of balls...balls...
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
  balls.push(new Ball());
}

function draw() {
  background(230);

  // Step 2: update and display each ball
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.show();

    // Step 3: check collisions
    // Use dist() between ball centers
    // Trigger feedback (color, bounce, etc.)
    b.checkCollision(balls);
  }
}

class Ball {
  constructor(x, y) {
    this.r = 30;
    if (x == null && y == null) {
      this.pos = createVector(
        random(this.r, width - this.r),
        random(this.r, height - this.r)
      );
    } else {
      this.pos = createVector(x, y);
    }
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  move() {
    this.pos.add(this.vel);
    // TODO: wrap around OR bounce off edges
    // bouncy bounce
    if (this.pos.x - this.r < 0 || this.pos.x + this.r > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y - this.r < 0 || this.pos.y + this.r > height) {
      this.vel.y *= -1;
    }
  }

  show() {
    push();
    //wanted it to look cool overlapped
    blendMode(DIFFERENCE);
    fill(100, 180, 220);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    pop();
  }
  
  // Step 4: Add a method to checkCollision(others)
  // Use dist() and respond visually
  checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      // Make sure we do not compare the ball to itself
      if (others[i] !== this) {
        let other = others[i];
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.r + other.r) {
          push();
          stroke("white");
          strokeWeight(4);
          noFill();
          ellipse(this.pos.x, this.pos.y, this.r * 2 + 10); // highlight on collision
          pop();
        }
      }
    }
  }
}

//export screenshot of canvas
function keyPressed() {
  saveCanvas("activity5a-image", "jpg");
}