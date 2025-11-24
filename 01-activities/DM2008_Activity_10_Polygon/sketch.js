let colorBtn, sizeSlider, shapeSelect, sideSlider;
let shapeColor;
 
function setup() {
  createCanvas(640, 400);
  noStroke();
  textFont("Courier New");
 
  // starting color
  shapeColor = color(random(255), random(255), random(255));
  
  // Button: change color
  colorBtn = createButton("Change Color");
  colorBtn.position(16, 16);
  colorBtn.mousePressed(randomShapeColor);
    
  function randomShapeColor() {
    shapeColor = color(random(255), random(255), random(255));
  }
 
  // Slider: controls size
  createP("Size").position(0, 50).style("margin", "4px 0 0 16px");
  sizeSlider = createSlider(20, 220, 100, 1);
  sizeSlider.position(15, 70);
  
  //slider: controls sides of polygon
  createP("Sides").position(0, 100).style("margin", "4px 0 0 16px");
  sideSlider = createSlider(3, 15, 5, 1);
  sideSlider.position(16, 130);
  
  colorBtn.addClass("c-btn");
  sideSlider.addClass("s-sld");
  
/*
  // Dropdown: choose shape
  createP("Shape").position(0, 100).style("margin", "8px 0 0 16px");
  shapeSelect = createSelect();
  shapeSelect.position(16, 130);
  shapeSelect.option("ellipse");
  shapeSelect.option("rect");
  shapeSelect.option("triangle");
*/
}

//https://editor.p5js.org/p5/sketches/Form:_Regular_Polygon
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
 
function draw() {
  background(240);
 
  push();
  translate(width * 0.65, height * 0.5);
  let s = sizeSlider.value();
  let n = sideSlider.value();
 
  fill(shapeColor);
  
  polygon(0, 0, s, n)

  /*
  // draw chosen shape
  let choice = shapeSelect.value();
  if (choice === "ellipse") {
    ellipse(0, 0, s, s);
  } else if (choice === "rect") {
    rectMode(CENTER);
    rect(0, 0, s, s);
  } else if (choice === "triangle") {
    triangle(-s * 0.6, s * 0.5, 0, -s * 0.6, s * 0.6, s * 0.5);
  }
  pop(); */
}