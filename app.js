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


 // get a node list of all number buttons
 const numbers = document.querySelectorAll('.operand');

 // iterate through the node list
 for (let num of numbers) {
    console.log(num.value);
 }
// 7 8 9 4 5 6 1 2 3 0

// get button element and display
const seven = numbers[0];
seven.addEventListener('click', () => {
    display.textContent += '7';
})
