// Verlet Stick class

function VerletStick(n1, n2, stiffness, isVisible) {
	this.n1 = n1;
	this.n2 = n2;
	this.stiffness = stiffness;
  this.isVisible = isVisible;

	this.vecOrig = new p5.Vector(this.n2.pos.x-this.n1.pos.x, this.n2.pos.y-this.n1.pos.y);
	this.len = Math.sqrt( (this.n2.pos.x-this.n1.pos.x)*(this.n2.pos.x-this.n1.pos.x) +  
                        (this.n2.pos.y-this.n1.pos.y)*(this.n2.pos.y-this.n1.pos.y) );
};

VerletStick.prototype.nudge = function(node, offset){
    if(node==1) {
        this.n1.nudge(offset);
    } else {
        this.n2.nudge(offset);
    }
};

VerletStick.prototype.constrainLen = function(){
   // this.n1.verlet();
   // this.n2.verlet();
    var delta = new p5.Vector(this.n2.pos.x-this.n1.pos.x, this.n2.pos.y-this.n1.pos.y);
    var deltaLength = delta.mag();
    var difference = ((deltaLength - this.len) / deltaLength);

    this.n1.pos.x += delta.x * (0.5 * this.stiffness * difference);
    this.n1.pos.y += delta.y * (0.5 * this.stiffness * difference);
    this.n2.pos.x -= delta.x * (0.5 * this.stiffness * difference);
    this.n2.pos.y -= delta.y * (0.5 * this.stiffness * difference);
  };

  VerletStick.prototype.displayStick= function(wt, col){
    if(this.isVisible){
      strokeWeight(wt);
      stroke(col);
      line(this.n1.pos.x, this.n1.pos.y, this.n2.pos.x, this.n2.pos.y);
    }
  };

  VerletStick.prototype.displayNodes= function(rad, col){
    fill(col);
    noStroke();
    this.n1.display(rad);
    this.n2.display(rad);
  };