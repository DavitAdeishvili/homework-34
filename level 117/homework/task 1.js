class MathHelper {
    static PI = Math.PI;

    static power(base, exponent) {
        return Math.pow(base, exponent);
    }
}

console.log(`Pi: ${MathHelper.PI}`);
console.log(`2 raised to the power of 3: ${MathHelper.power(2, 3)}`);