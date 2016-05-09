// Verlet Stick class

function VerletStick(n1, n2, stiffness, isVisible) {
	this.n1 = n1;
	this.n2 = n2;
	this.stiffness = stiffness;
    this.isVisible = isVisible;

	this.vecOrig = new Vec2(this.n2.pos.x-this.n1.pos.x, this.n2.pos.y-this.n1.pos.y);
	this.len = Math.sqrt( (this.n2.pos.x-this.n1.pos.x)*(this.n2.pos.x-this.n1.pos.x) +  
                        (this.n2.pos.y-this.n1.pos.y)*(this.n2.pos.y-this.n1.pos.y) );
};

VerletStick.prototype.push = function(node, offset){
    if(node==1) {
        this.n1.push(offset);
    } else {
        this.n2.push(offset);
    }
};

VerletStick.prototype.constrainLen = function(){
   // this.n1.verlet();
   // this.n2.verlet();
    var delta = new Vec2(this.n2.pos.x-this.n1.pos.x, this.n2.pos.y-this.n1.pos.y);
    var deltaLength = delta.mag();
    var difference = ((deltaLength - this.len) / deltaLength);

    this.n1.pos.x += delta.x * (0.5 * this.stiffness * difference);
    this.n1.pos.y += delta.y * (0.5 * this.stiffness * difference);
    this.n2.pos.x -= delta.x * (0.5 * this.stiffness * difference);
    this.n2.pos.y -= delta.y * (0.5 * this.stiffness * difference);
  };

  VerletStick.prototype.displayStick= function(ctx, wt, col){
    if(this.isVisible){
        ctx.lineWidth=wt;
        ctx.beginPath();
        ctx.moveTo(this.n1.pos.x, this.n1.pos.y);
        ctx.lineTo(this.n2.pos.x, this.n2.pos.y);
        ctx.strokeStyle = col;
        ctx.stroke();
    }
  };

  VerletStick.prototype.displayNodes= function(ctx, rad, col){
    this.n1.display(ctx, rad, col);
    this.n2.display(ctx, rad, col);
  };