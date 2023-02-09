// calculator project 02/07

// create basic math functions

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

// create operate function
const operate = (op, num1, num2) => {
    if (op === 'add') {
        return add(num1, num2);
    } else if (op === 'subtract') {
        return subtract(num1, num2);
    } else if (op === 'multiply') {
        return multiply(num1, num2);
    } else if (op === 'divide') {
        return divide(num1, num2);
    } else {
        return console.log('error');
    }
}

// display
 const display = document.getElementById('display');

// array of input values
let inputArray = [];

 // get a node list of all number buttons
 const numbers = document.querySelectorAll('.operand');
 // [7 8 9 4 5 6 1 2 3 0]

// get button element and display
const seven = numbers[0].addEventListener('click', () => {
    display.textContent == '0' ? display.textContent = '7' : display.textContent += '7';
})

const eight = numbers[1].addEventListener('click', () => {
    display.textContent == '0' ? display.textContent = '8' : display.textContent += '8';
})

const nine = numbers[2].addEventListener('click', () => {
    display.textContent == '0' ? display.textContent = '9' : display.textContent += '9';
})

const four = numbers[3].addEventListener('click', () => {
    display.textContent == '0' ? display.textContent = '4' : display.textContent += '4';
})

const five = numbers[4].addEventListener('click', () => {
    display.textContent == '0' ? display.textContent = '5' : display.textContent += '5';
})

const six = numbers[5].addEventListener('click', () => {
    display.textContent == '0' ? display.textContent = '6' : display.textContent += '6';
})

const one = numbers[6].addEventListener('click', () => {
    display.textContent == '0' ? display.textContent = '1' : display.textContent += '1';
})

const two = numbers[7].addEventListener('click', () => {
    display.textContent == '0' ? display.textContent = '2' : display.textContent += '2';
})

const three = numbers[8].addEventListener('click', () => {
    display.textContent == '0' ? display.textContent = '3' : display.textContent += '3';
})

const zero = numbers[9].addEventListener('click', () => {
    display.textContent == '0' ? display.textContent = '0' : display.textContent += '0';
})

// get node list of operators and display
const operatorsList = document.querySelectorAll('.operator');
// [/ * - +]

const divideOp = operatorsList[0].addEventListener('click', () => {
    inputArray.push(parseFloat(display.textContent));
})
const multiplyOp = operatorsList[1].addEventListener('click', () => {
    inputArray.push(parseFloat(display.textContent));
})
const subtractOp = operatorsList[2].addEventListener('click', () => {
    inputArray.push(parseFloat(display.textContent));
})
const addOp = operatorsList[3].addEventListener('click', () => {
    inputArray.push(parseFloat(display.textContent));
})

// clear display
const clearBtn = document.querySelector('.clear').addEventListener('click', () => {
    display.textContent = '0';
})