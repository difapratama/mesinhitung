export default class MesinHitung {
    constructor(x) {
        this.x = 1;
    }
    add(x) {
        this.x += x;
        return this;
    }

    substract(x) {
        this.x -= x;
        return this;
    }

    multiply(x) {
        this.x = Math.round(this.x * x);
        return this;
    }

    divide(x) {
        this.x /= x;
        return this;
    }

    square() {
        this.x = Math.round(Math.pow(this.x, 2));
        return this;
    }

    exponent(x) {
        this.x = Math.round(Math.pow(this.x, x));
        return this;
    }

    squareRoot(x) {
        this.x = Math.round(Math.sqrt(this.x));
        return this;
    }

    result() {}
}