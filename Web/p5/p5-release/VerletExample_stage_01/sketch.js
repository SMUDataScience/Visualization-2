// Verlet Example 01
// Ira Greenberg

var ball;

function setup() {
  createCanvas(800, 600);
  fill(255);
  ball = new VerletNode(new p5.Vector(width/2, height/2), 100);
  ball.nudge(new p5.Vector(random(2, 4), random(2, 4)));
}

function draw() {
  background(0);
  ball.verlet();
  ball.display();
  ball.boundsCollide();
  
}