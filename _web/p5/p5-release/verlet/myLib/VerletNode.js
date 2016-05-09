// Verlet Node class

function VerletNode(pos) {
	this.pos = pos;
	this.posOld = new Vec2(pos.x, pos.y);
};

VerletNode.prototype.push = function(offset){
	this.pos.add(offset);
};

VerletNode.prototype.verlet = function(){
	var posTemp = new Vec2(this.pos.x, this.pos.y);
	
	this.pos.x += (this.pos.x-this.posOld.x);
    this.pos.y += (this.pos.y-this.posOld.y);

	this.posOld.set(posTemp);
};

  VerletNode.prototype.display = function(ctx, rad, col){
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y,rad,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
	ctx.arc(this.pos.x, this.pos.y,rad,0,2*Math.PI);
	ctx.fill();
  };
