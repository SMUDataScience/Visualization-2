// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Recursive Tree
// Renders a simple tree-like structure via recursion
// Branching angle calculated as a function of horizontal mouse location

var theta;   

function setup() {
  createCanvas(1200, 700);
  background(150);

  theta = 0.0;

  // Start the tree from the bottom of the screen
  translate(90, height);

  stroke(255);
  noFill();
  // push();
  // translate(-100, -100);
  // tree(110);
  // pop();
  for (var i=0; i<10; i++) {
    push();
    translate(100*i, -100);
    tree(110);
    pop();
  }
}

function tree(treeSize) {
  branch(treeSize);
}

function branch(len) {
  // Each branch will be 2/3rds the size of the previous one

  var sw = map(len, 2, 120, .1, 15);
  strokeWeight(sw);

  //line(0, 0, 0, -len);
  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  if (len>4) {
    stroke(50, 20, 10);
    curveVertex(-random(2, 4), -len/2*random(.55, .75));
    curveVertex(random(1, 2), -len/2);
    curveVertex(-random(2, 4), -len/2*random(1.35, 1.65));
  } else {
    stroke(random(50, 145), random(70, 185), random(10, 20));
  }
  curveVertex(0, -len);
  curveVertex(0, -len);
  endShape();

  translate(0, -len);

  len *= random(.5, .75);
  var totalSpanAngle = random(25.0, 45);
  var subBranches = round(random(2, 4));
  if (len > 2) {
    theta = radians(totalSpanAngle/2.0);
    subTheta = radians(totalSpanAngle/(subBranches-1));

    for (var i=0; i<subBranches; i++) {
      push();    // Save the current state of transformation (i.e. where are we now)
      //var t = -theta + subTheta;
      rotate(-theta + random(subTheta*i*.85, subTheta*i*1.15));
      branch(random(len*.75, len*1.25));       // Ok, now call myself to draw two new branches!!
      pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
    }
  }
}
