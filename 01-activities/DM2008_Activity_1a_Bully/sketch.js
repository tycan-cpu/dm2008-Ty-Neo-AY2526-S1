// DDM2008
// Activity 1a

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature in the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  
  strokeWeight(15);
  stroke("#0C00FF");
  //left
  line(150,175,80,160);
  line(75,150,75,100);
  //right
  line(250,175,300,160);
  line(300,150,300,100);
  //left foot
  line(150,250,150,350);
  //right foot
  line(250,250,250,320);
  
  noStroke();
  fill("#CA841D");
  ellipse(200,200,160,200);
  
  fill("#CCA873");
  ellipse(210,100,100);
  ellipse(170,125,70);
  ellipse(250,75,50);
  ellipse(75,90,20);
  ellipse(300,90,20);
  
  textSize(60);
  text("🫦",180,130);
  
  fill("#FFF");
  ellipse(235,85,30);
  
  fill("#523710");
  triangle(165,70,200,50,185,75);
  triangle(200,50,230,55,225,71);
  ellipse(185,88,10);
  ellipse(230,85,20);
  
  
  
  
  helperGrid(); // do not edit or remove this line
}
