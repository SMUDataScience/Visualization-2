function rand(min, max) {
    if (max == null || max == undefined) {
        return Math.random() * min;
    }
    return Math.random() * (max - min) + min;
}
function sin(theta) {
    return Math.sin(theta);
}
function cos(theta) {
    return Math.cos(theta);
}
function tan(theta) {
    return Math.tan(theta);
}
function abs(val) {
    return Math.abs(val);
}
function floor(val) {
    return Math.floor(val);
}
function ceil(val) {
    return Math.ceil(val);
}
//# sourceMappingURL=MathUtil.js.map