// DM2008 — Mini Project
// PONG (Starter Scaffold)

// Notes for students:
// 1) Add paddle controls (W/S and ↑/↓) inside handleInput()
// 2) Add scoring + reset when the ball goes past a paddle
// 3) Add win conditions / start + game-over states if you want

/* ----------------- Globals ----------------- */
let leftPaddle, rightPaddle, ball;

//score counts LOSSES instead of wins
let leftScore = 0;
let rightScore = 0;

let gameStart = false; //for 2 player
let singleStart = false; //for 1 player

let mouseControls; //for 2 player
let singleControls; //for 1 player

let firstClick = false; //to let it load so i dont always start 2 player

function preload() {
  titleImg = loadImage("/assets/bong_title.png");
  leftImg = loadImage("/assets/bong_L.png");
  rightImg = loadImage("/assets/bong_R.png");
  giveupImg = loadImage("/assets/bong_giveup.png");
}

/* ----------------- Setup & Draw ----------------- */
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER);

  // paddles: x, y, w, h,
  leftPaddle = new Paddle(140, height / 2 - 30, 10, 150, leftImg);
  rightPaddle = new Paddle(width - 140, height / 2 - 30, 10, 150, rightImg);

  // ball starts center with a gentle push
  ball = new Ball(width / 2, height / 2, 10);
}

function draw() {
  background(18);
  textFont("Courier New");

  // 4) draw everything
  drawCourt();
  leftPaddle.show();
  rightPaddle.show();
  ball.show();

  titleScreen();

  //game start
  if (gameStart || singleStart) {
    // 1) read input (students: add paddle movement here)
    handleInput();

    // 2) update world
    leftPaddle.update();
    rightPaddle.update();
    ball.update();

    // 3) handle collisions
    ball.checkWallBounce(); // top/bottom
    ball.checkPaddleBounce(leftPaddle);
    ball.checkPaddleBounce(rightPaddle);
  }
}

/* ----------------- GAME START ----------------- */

function mousePressed() {
  //to let it load so i dont always start 1 player mode
  if (!firstClick) {
    firstClick = true;
  } else if (!gameStart) {
    //1 player mode start
    singleStart = true;
    singleControls = true;
  }
}

function keyPressed() {
  if (key == "l" || key == "L") {
    //restart state - reset everything if players give up
    gameStart = false;
    singleStart = false;
    ball.reset();
    leftPaddle.reset();
    rightPaddle.reset();
    leftScore = 0;
    rightScore = 0;
  } else if (key == "4") {
    saveCanvas("miniproject-image", "jpg");
  } else {
    //2 player mode start with any key press (but for users they press w/s lol)
    gameStart = true;
    mouseControls = true;
  }
}

function titleScreen() {
  if (!gameStart && !singleStart) {
    push();
    fill(18, 99);
    rect(0, 0, windowWidth, windowHeight);
    fill(220);
    textSize(20);
    text("press W/S to begin 2-PLAYER MODE", width / 2, (height / 4) * 3);
    text("click to begin SINGLE PLAYER MODE", width / 2, (height / 4) * 3.2);
    titleImg.resize(400, 350);
    imageMode(CENTER);
    image(titleImg, windowWidth / 2, windowHeight / 2);
    pop();
  }
}

/* ----------------- Input ----------------- */
function handleInput() {
  if (gameStart) {
    if (keyIsPressed) {
      if (key === "w") {
        //leftPaddle.vy -= leftPaddle.speed;
        leftPaddle.vy = -10;
      }

      if (key === "s") {
        //leftPaddle.vy += leftPaddle.speed;
        leftPaddle.vy = 10;
      }

      // if left player loses 10 times, they gain free movement
      if (leftScore >= 10) {
        if (key === "a") {
          //leftPaddle.vy -= leftPaddle.speed;
          leftPaddle.vx = -10;
        }

        if (key === "d") {
          //leftPaddle.vy += leftPaddle.speed;
          leftPaddle.vx = 10;
        }
      }
    }

    if ((mouseControls = true)) {
      rightPaddle.pos.y = mouseY;

      //if right player loses 10 times, they gain free movement
      if (rightScore >= 10) {
        rightPaddle.pos.x = mouseX;
      }
    }
  }

  //for 1 player game mouse movement dictates both paddles positions
  if (singleStart) {
    rightPaddle.pos.y = mouseY;
    leftPaddle.pos.y = mouseY;
  }
}

function keyReleased() {
  // Stop paddles when keys are released (students: fill this once handleInput is added)

  leftPaddle.vy = 0;
  rightPaddle.vy = 0;

  leftPaddle.vx = 0; //for free movement section
}

/* ----------------- CLASS: PADDLE ----------------- */
class Paddle {
  constructor(x, y, w, h, asset) {
    this.pos = createVector(x, y);
    this.startPos = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vx = 0; //for free movement section...
    this.vy = 0; // students will change this via input
    //this.speed = 1;
    this.asset = asset;
  }

  update() {
    // basic vertical movement; constrained to canvas
    this.pos.y += this.vy;
    this.pos.y = constrain(this.pos.y, 0, height - this.h);

    this.pos.x += this.vx;
    this.pos.x = constrain(this.pos.x, 0, width - this.w);
  }

  show() {
    fill(220);
    rect(this.pos.x, this.pos.y, this.w, this.h, 2);

    if (this.asset === leftImg) {
      image(this.asset, this.pos.x - 140, this.pos.y, this.h, this.h);
    } else {
      image(this.asset, this.pos.x, this.pos.y, this.h, this.h);
    }
  }

  reset() {
    this.pos.set(this.startPos);
  }
}

/* ----------------- CLASS: BALL ----------------- */

class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.vel = createVector(0, 0);
    this.vel.x = random([5, 8]) * 3.5;
    this.vel.y = random([5, 8]) * 2.0;
  }

  update() {
    this.pos.add(this.vel);
  }

  checkWallBounce() {
    // bounce off top/bottom
    if (this.pos.y - this.r <= 0 || this.pos.y + this.r >= height) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
    }

    if (this.pos.x - this.r < -70) {
      leftScore += 1;
      ball.reset();
      console.log(leftScore, rightScore);
    } else if (this.pos.x + this.r > width + 70) {
      rightScore += 1;
      ball.reset();
      console.log(leftScore, rightScore);
    }
  }

  checkPaddleBounce(p) {
    // AABB-then-circle quick check (simple & forgiving)
    const withinY = this.pos.y > p.pos.y && this.pos.y < p.pos.y + p.h;
    const withinX =
      this.pos.x + this.r > p.pos.x && this.pos.x - this.r < p.pos.x + p.w;

    if (withinX && withinY) {
      // push ball out so it doesn't get stuck
      if (this.vel.x < 0) {
        this.pos.x = p.pos.x + p.w + this.r;
      } else {
        this.pos.x = p.pos.x - this.r;
      }
      this.vel.x *= -1; // reflect horizontallys
    }
  }

  show() {
    fill(255, 170, 70);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }

  reset() {
    this.pos.set(width / 2, height / 2);
    this.vel.set(random([5, 8]) * 3.5, random([5, 8]) * 2.0);
  }
}

/* ----------------- UI helpers ----------------- */
function drawCourt() {
  // center line
  stroke(80);
  strokeWeight(2);
  for (let y = 10; y < height; y += 18) {
    line(width / 2, y, width / 2, y + 8);
  }
  noStroke();

  textSize(35);
  text(leftScore, width / 3, height / 2);
  text(rightScore, (width / 3) * 2, height / 2);

  if (gameStart) {
    push();
    textSize(10);
    imageMode(CENTER);
    giveupImg.resize(150, 150);
    image(giveupImg, width / 2, (height / 8) * 7);
    pop();
  }

  if (singleStart) {
    push();
    textSize(10);
    imageMode(CENTER);
    giveupImg.resize(150, 150);
    image(giveupImg, width / 2, (height / 8) * 7);
    pop();
  }
}
