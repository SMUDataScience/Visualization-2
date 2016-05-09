function rand(min: number, max?: number): number {
    if (max == null || max == undefined) {
        return Math.random() * min;
    }
    return Math.random() * (max - min) + min;
}

function sin(theta: number): number {
    return Math.sin(theta);
}

function cos(theta: number): number {
    return Math.cos(theta);
}

function tan(theta: number): number {
    return Math.tan(theta);
}

function abs(val: number): number {
    return Math.abs(val);
}

function floor(val: number): number {
    return Math.floor(val);
}

function ceil(val: number): number {
    return Math.ceil(val);
}