// Verlet Org class

function VerletOrg(pos, vecs, indices) {
	this.pos = pos;
	this.vecs = vecs;
	
	this.nodes = [];
	this.sticks = [];
	for(var i=0; i<this.vecs.length; i++) {
		this.nodes[i] = new VerletNode(this.vecs[i]);
	}

	for(var i=0; i<indices.length; i++) {
		this.sticks[i] = new VerletStick(this.nodes[indices[i].elem1], this.nodes[indices[i].elem2], .02, indices[i].isVisible);
	}

};

VerletOrg.prototype.nudge = function(nodeID, offset){
	this.nodes[nodeID].nudge(offset);
};

VerletOrg.prototype.run = function(){
	for(var i=0; i<this.nodes.length; i++) {
		this.nodes[i].verlet();

		if(this.nodes[i].pos.x > width*2){
			this.nodes[i].pos.x = width*2;
		} else if(this.nodes[i].pos.x < 0){
			this.nodes[i].pos.x = 0;
		}

		if(this.nodes[i].pos.y > height*2){
			this.nodes[i].pos.y = height*2;
		} else if(this.nodes[i].pos.y < 0){
			this.nodes[i].pos.y = 0;
		}
	}

	for(var i=0; i<this.sticks.length; i++) {
		this.sticks[i].constrainLen();
	}
};

VerletOrg.prototype.display = function(stickWt, stickCol, nodeRad, nodeCol){
	for(var i=0; i<this.sticks.length; i++) {
		this.sticks[i].displayStick(stickWt, stickCol);
		this.sticks[i].displayNodes(nodeRad, nodeCol);
	}
};

