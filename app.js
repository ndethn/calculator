// calculator project -- 1/25/23

// declare basic math functions

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

// declare array of values inputted
let values = [];

// event listeners for operators
let addOp = document.getElementById('add');
addOp.addEventListener('click', () => {
    values.push(parseInt(display.textContent));
    console.log(values);
})


// onclick functions for display numbers
let display = document.getElementById('display');


let zero = document.getElementById('0');
zero.addEventListener('click', () => {
    display.textContent = '';
    display.textContent = '0';
})
let one = document.getElementById('1');
one.addEventListener('click', () => {
    display.textContent = ''
    display.textContent += '1';
})
let two = document.getElementById('2');
two.addEventListener('click', () => {
    display.textContent = ''
    display.textContent += '2';
})
let three = document.getElementById('3');
three.addEventListener('click', () => {
    display.textContent = ''
    display.textContent += '3';
})
let four = document.getElementById('4');
four.addEventListener('click', () => {
    display.textContent = ''
    display.textContent += '4';
})
let five = document.getElementById('5');
five.addEventListener('click', () => {
    display.textContent = ''
    display.textContent = '5';
})
let six = document.getElementById('6');
six.addEventListener('click', () => {
    display.textContent = ''
    display.textContent += '6';
})
let seven = document.getElementById('7');
seven.addEventListener('click', () => {
    display.textContent = ''
    display.textContent += '7';
})
let eight = document.getElementById('8');
eight.addEventListener('click', () => {
    display.textContent = ''
    display.textContent += '8';
})
let nine = document.getElementById('9');
nine.addEventListener('click', () => {
    display.textContent = ''
    display.textContent += '9';
})

// applying operator function based on calc btn inputs
/* when the user clicks on the operator button,
store the first number,
also save which operation has been chosen,
then operate() on them when user clicks on the equals button
*/

