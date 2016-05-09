// Simple Vec2 class
function Vec2(x, y) {
	this.x = x;
	this.y = y;
};

Vec2.prototype.add = function(vec2){
	this.x += vec2.x;
	this.y += vec2.y;
};

Vec2.prototype.addSclr = function(sclr){
	this.x += sclr;
	this.y += sclr;
};

Vec2.prototype.sub = function(vec2){
	this.x -= vec2.x;
	this.y -= vec2.y;
};

Vec2.prototype.mult = function(vec2){
	this.x *= vec2.x;
	this.y *= vec2.y;
};

Vec2.prototype.div = function(vec2){
	this.x /= vec2.x;
	this.y /= vec2.y;
};

Vec2.prototype.set = function(vec2){
	this.x = vec2.x;
	this.y = vec2.y;
};

Vec2.prototype.mag = function(){
	return Math.sqrt(this.x*this.x + this.y*this.y);
};
