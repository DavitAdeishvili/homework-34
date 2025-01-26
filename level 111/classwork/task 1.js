class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    get length() {
        return this.length;
    }

    get width() {
        return this.width;
    }

    get perimeter() {
        return 2 * (this.length + this.width);
    }
}