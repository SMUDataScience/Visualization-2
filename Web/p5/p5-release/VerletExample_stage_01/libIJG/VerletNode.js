// Verlet Node class
function VerletNode(pos, radius) {
	this.pos = pos;
	this.radius = radius;
	//this.offset = 0;
	this.posOld = new p5.Vector(pos.x, pos.y);
};

VerletNode.prototype.nudge = function(offset){
	this.pos.add(offset);
	this.offset = offset;
};

VerletNode.prototype.verlet = function(){
	var posTemp = new p5.Vector(this.pos.x, this.pos.y);
	
	this.pos.x += (this.pos.x-this.posOld.x);
    this.pos.y += (this.pos.y-this.posOld.y);

	this.posOld.set(posTemp);
};

VerletNode.prototype.display = function(){
	ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);
};

VerletNode.prototype.boundsCollide = function(){
	if (this.pos.x > width-this.radius){
		this.pos.x = width-this.radius;
		this.pos.x -= this.offset.x;
	} else if (this.pos.x < this.radius){
		this.pos.x = this.radius;
		this.pos.x += this.offset.x;
	} 

	if (this.pos.y > height-this.radius){
		this.pos.y = height-this.radius;
		this.pos.y -= this.offset.y;
	} else if (this.pos.y < this.radius){
		this.pos.y = this.radius;
		this.pos.y += this.offset.y;
	} 
};

