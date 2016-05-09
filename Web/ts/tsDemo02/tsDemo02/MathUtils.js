function rand(min, max) {
    if (max == null || max == undefined) {
        return Math.random() * min;
    }
    return Math.random() * (max - min) + min;
}
//# sourceMappingURL=MathUtils.js.map