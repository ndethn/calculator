// calculator project -- 1/25/23

// declare basic math functions
// let firstValue = parseInt(prompt('Enter first value: '));
// let secondValue = parseInt(prompt('Enter second value: '));
// console.log(firstValue + secondValue);

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

// operate function
// takes in an operator and two numbers and calls a math function

const operate = (op, val1, val2) => {
    if (op == add) {
        return add(val1, val2);
    } else if (op == subtract) {
        return subtract(val1, val2);
    } else if (op == multiply) {
        return multiply(val1, val2);
    } else if (op == divide) {
        return divide(val1, val2);
    } else {
        return 'error';
    }
}