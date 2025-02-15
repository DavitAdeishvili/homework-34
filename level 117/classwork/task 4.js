class MathOperation {
    static add(a, b) {
        return a + b;
    }

    static minus(a, b) {
        return a - b;
    }

    static division(a, b) {
        return a / b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

function performOperation(operation) {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    let result;

    if (operation === 'add') {
        result = MathOperation.add(num1, num2);
    } else if (operation === 'minus') {
        result = MathOperation.minus(num1, num2);
    } else if (operation === 'division') {
        result = MathOperation.division(num1, num2);
    } else if (operation === 'multiply') {
        result = MathOperation.multiply(num1, num2);
    }

    document.getElementById('result').textContent = 'Result: ' + result;
}