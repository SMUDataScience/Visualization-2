// Verlet Node class

function VerletNode(pos) {
	this.pos = pos;
	this.posOld = new p5.Vector(pos.x, pos.y);
};

VerletNode.prototype.nudge = function(offset){
	this.pos.add(offset);
};

VerletNode.prototype.verlet = function(){
	var posTemp = new p5.Vector(this.pos.x, this.pos.y);
	
	this.pos.x += (this.pos.x-this.posOld.x);
    this.pos.y += (this.pos.y-this.posOld.y);

	this.posOld.set(posTemp);
};

  VerletNode.prototype.display = function(rad){
    ellipse(this.pos.x, this.pos.y, rad*2, rad*2);
  };
