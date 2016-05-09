var Vec2 = (function () {
    function Vec2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vec2.prototype.add = function (val) {
        if (typeof val === "number") {
            this.x += val;
            this.y += val;
        }
        else if (val instanceof Vec2) {
            this.x += val.x;
            this.y += val.y;
        }
        else {
            throw new TypeError("Argument must be of type Vec2 or number");
        }
    };
    Vec2.prototype.sub = function (val) {
        if (typeof val === "number") {
            this.x -= val;
            this.y -= val;
        }
        else if (val instanceof Vec2) {
            this.x -= val.x;
            this.y -= val.y;
        }
        else {
            throw new TypeError("Argument must be of type Vec2 or number");
        }
    };
    Vec2.prototype.mult = function (val) {
        if (typeof val === "number") {
            this.x *= val;
            this.y *= val;
        }
        else if (val instanceof Vec2) {
            this.x *= val.x;
            this.y *= val.y;
        }
        else {
            throw new TypeError("Argument must be of type Vec2 or number");
        }
    };
    Vec2.prototype.div = function (val) {
        if (typeof val === "number") {
            this.x /= val;
            this.y /= val;
        }
        else if (val instanceof Vec2) {
            this.x /= val.x;
            this.y /= val.y;
        }
        else {
            throw new TypeError("Argument must be of type Vec2 or number");
        }
    };
    // END
    // BEGIN static calls most common cases
    Vec2.add = function (v0, v1) {
        var v = v0.clone(); // avoid side effects
        v.add(v1);
        return v;
    };
    Vec2.sub = function (v0, v1) {
        var v = v0.clone(); // avoid side effects
        v.sub(v1);
        return v;
    };
    Vec2.mult = function (v0, s) {
        var v = v0.clone(); // avoid side effects
        v.mult(s);
        return v;
    };
    Vec2.div = function (v0, s) {
        var v = v0.clone(); // avoid side effects
        v.div(s);
        return v;
    };
    Vec2.dot = function (v0, v1) {
        return v0.dot(v1);
    };
    Vec2.reflect = function (v0, v1) {
        return v0.reflect(v1);
    };
    // END
    // BEGIN general methods
    Vec2.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y;
    };
    Vec2.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vec2.prototype.direction = function () {
        return Math.atan2(this.y, this.x);
    };
    Vec2.prototype.inverse = function () {
        this.mult(-1);
    };
    Vec2.prototype.reflect = function (n) {
        // based on R = 2N(N*L)-L
        var l = this.clone();
        var m = this.mag();
        n.normalize();
        l.normalize();
        var d = n.dot(l);
        n.mult(2);
        n.mult(d);
        n.sub(l);
        n.mult(m);
        return n;
    };
    Vec2.prototype.normalize = function () {
        var n = this.mag();
        this.div(n);
    };
    Vec2.prototype.setTo = function (v) {
        this.x = v.x;
        this.y = v.y;
    };
    Vec2.prototype.clone = function () {
        return new Vec2(this.x, this.y);
    };
    Vec2.prototype.toString = function () {
        return "x: " + this.x + ", y: " + this.y + ", mag: " + this.mag();
    };
    Vec2.prototype.isEqual = function (v) {
        return (this.x == v.x && this.y == v.y);
    };
    return Vec2;
})();
//# sourceMappingURL=Vec2.js.map