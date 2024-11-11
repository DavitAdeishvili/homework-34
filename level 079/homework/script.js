function countAreaRectangle(length, width) {
    let area = length * width;
    return area;
}

function countAreaCircle(radius) {
    let area = 3.14159 * radius * radius;
    return area;
}

function countAreaTriangle(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}