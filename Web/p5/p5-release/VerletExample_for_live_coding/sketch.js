// Verlet Example
// Ira Greenberg, 2016

var vecs;
var indices;
var org;

function setup() {
  createCanvas(800, 600);
  stroke(0); 
  fill(150);
  vecs = [
			new p5.Vector(-100,-300), new p5.Vector(100,-300), 
			new p5.Vector(-100,-200), new p5.Vector(100,-200), 
			new p5.Vector(-100,-100), new p5.Vector(100,-100), 
			new p5.Vector(-100, 0), new p5.Vector(100, 0), 
			new p5.Vector(-100, 100), new p5.Vector(100, 100), 
			new p5.Vector(-100, 200), new p5.Vector(100, 200), 
			new p5.Vector(-100, 300), new p5.Vector(100, 300)];

  indices = [
			// long diagonal supports
			new VerletIndex(0, 13, false), 
			new VerletIndex(1, 12, false),  

			// horizontal supports
			new VerletIndex(0, 1, true), new VerletIndex(2, 3, true), new VerletIndex(4, 5, true), 
			new VerletIndex(6, 7, true), new VerletIndex(8, 9, true), new VerletIndex(10, 11, true), new VerletIndex(12, 13, true),

			new VerletIndex(0, 2, true), new VerletIndex(2, 4, true), new VerletIndex(4, 6, true), new VerletIndex(6, 8, true), new VerletIndex(8, 10, true), new VerletIndex(10, 12, true),
			new VerletIndex(1, 3, true), new VerletIndex(3, 5, true), new VerletIndex(5, 7, true), new VerletIndex(7, 9, true), new VerletIndex(9, 11, true), new VerletIndex(11, 13, true),
			new VerletIndex(0, 3, false), new VerletIndex(3, 4, false), new VerletIndex(4, 7, false), new VerletIndex(7, 8, false), new VerletIndex(8, 11, false), new VerletIndex(11, 12, false)


	
			];

  org = new VerletOrg(new p5.Vector(0, 0), vecs, indices);
  org.nudge(0, new p5.Vector(20.2, 25.25));
  org.nudge(5, new p5.Vector(-1.2, -5.25));
  org.nudge(10, new p5.Vector(4.2, .25));

}

function draw() {
  // custom background with fade
  fill(135, 35);
  rect(0, 0, width, height);


  push();
  scale(.5, .5);
  org.run();
  org.display(6, color(255, 127, 10), 6, color(20, 80, 255));
  pop();

}