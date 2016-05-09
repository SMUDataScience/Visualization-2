class Vec2 {

    constructor(public x: number, public y: number) {
    }

    // BEGIN general arithmatic calls
    add(val: Vec2);
    add(val: number);
    add(val?: any) {
        if (typeof val === "number") {
            this.x += val;
            this.y += val;
        } else if (val instanceof Vec2) {
            this.x += val.x;
            this.y += val.y;
        } else {
            throw new TypeError("Argument must be of type Vec2 or number");
        }
    }

    sub(val: Vec2);
    sub(val: number);
    sub(val?: any) {
        if (typeof val === "number") {
            this.x -= val;
            this.y -= val;
        } else if (val instanceof Vec2) {
            this.x -= val.x;
            this.y -= val.y;
        } else {
            throw new TypeError("Argument must be of type Vec2 or number");
        }
    }

    mult(val: Vec2);
    mult(val: number);
    mult(val?: any) {
        if (typeof val === "number") {
            this.x *= val;
            this.y *= val;
        } else if (val instanceof Vec2) {
            this.x *= val.x;
            this.y *= val.y;
        } else {
            throw new TypeError("Argument must be of type Vec2 or number");
        }
    }

    div(val: Vec2);
    div(val: number);
    div(val?: any) {
        if (typeof val === "number") {
            this.x /= val;
            this.y /= val;
        } else if (val instanceof Vec2) {
            this.x /= val.x;
            this.y /= val.y;
        } else {
            throw new TypeError("Argument must be of type Vec2 or number");
        }
    }
    // END

    // BEGIN static calls most common cases
    static add(v0: Vec2, v1: Vec2): Vec2 {
        var v = v0.clone(); // avoid side effects
        v.add(v1);
        return v;
    }

    static sub(v0: Vec2, v1: Vec2): Vec2 {
        var v = v0.clone(); // avoid side effects
        v.sub(v1);
        return v;
    }

    static mult(v0: Vec2, s: number): Vec2 {
        var v = v0.clone(); // avoid side effects
        v.mult(s);
        return v;
    }

    static div(v0: Vec2, s: number): Vec2 {
        var v = v0.clone(); // avoid side effects
        v.div(s);
        return v;
    }

    static dot(v0: Vec2, v1: Vec2): number {
        return v0.dot(v1);
    }

    static reflect(v0: Vec2, v1: Vec2): Vec2 {
        return v0.reflect(v1);
    }
    // END

    // BEGIN general methods
    dot(v: Vec2): number {
        return this.x * v.x + this.y * v.y;
    }

    mag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    direction(): number {
        return Math.atan2(this.y, this.x);
    }

    inverse() {
        this.mult(-1);
    }

    reflect(n: Vec2): Vec2 {
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
    }

    normalize() {
        var n = this.mag();
        this.div(n);
    }

    setTo(v: Vec2) {
        this.x = v.x;
        this.y = v.y;
    }

    clone(): Vec2 {
        return new Vec2(this.x, this.y);
    }

    toString(): string {
        return "x: " + this.x + ", y: " + this.y + ", mag: " + this.mag();
    }

    isEqual(v: Vec2): boolean {
        return (this.x == v.x && this.y == v.y);
    }

}

  