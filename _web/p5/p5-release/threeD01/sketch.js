//draw a spinning cone with radius 200 and height 200
function setup() {
  createCanvas(1200, 700, WEBGL);
  stroke(0);
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  //cone(200, 200);


  beginShape();
  curveVertex(0, 0, 0);
  curveVertex(0, 0, 0);
  curveVertex(100, 100, 0);
  curveVertex(125, 150, 0);
  curveVertex(225, 190, 0);
  curveVertex(500, 150, 0);
  curveVertex(700, 150, 0);
  curveVertex(700, 150, 0);

  //   stroke(50, 20, 10);
  //   curveVertex(-random(2, 4), -height/2*random(.55, .75), 0);
  //   curveVertex(random(1, 2), -height/2, 0);
  //   curveVertex(-random(2, 4), -height/2*random(1.35, 1.65), 0);
  // curveVertex(0, -height, 0);
  // curveVertex(0, -height, 0);
  endShape();
}
