// calculator project 02/07

// create basic math functions

const add = (a, b) => {
    sol = a + b;
    return sol.toFixed(0);
}

const subtract = (a, b) => {
    sol = a - b
    return sol.toFixed(0);
}

const multiply = (a, b) => {
    sol = a * b
    return sol.toFixed(0);
}

const divide = (a, b) => {
    sol = a / b;
    return sol.toFixed(0);
}

// create operate function
// op num1 num2
const operate = (input) => {
    num1 = input[0];
    op = input[1];
    num2 = input[2];
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
let slicedArray = [];

// get a node list of all number buttons
const numbers = document.querySelectorAll('.operand');
// [7 8 9 4 5 6 1 2 3 0]

// get button element and display
const seven = numbers[0].addEventListener('click', () => {
    if (display.textContent == '0' ||
        divideOp.style.backgroundColor != '' ||
        multiplyOp.style.backgroundColor != '' ||
        subtractOp.style.backgroundColor != '' ||
        addOp.style.backgroundColor != '') {
        display.textContent = '7'
        divideOp.style.backgroundColor = '';
        multiplyOp.style.backgroundColor = '';
        subtractOp.style.backgroundColor = '';
        addOp.style.backgroundColor = '';
    } else {
        display.textContent += '7';
    }
})

const eight = numbers[1].addEventListener('click', () => {
    if (display.textContent == '0' ||
        divideOp.style.backgroundColor != '' ||
        multiplyOp.style.backgroundColor != '' ||
        subtractOp.style.backgroundColor != '' ||
        addOp.style.backgroundColor != '') {
        display.textContent = '8'
        divideOp.style.backgroundColor = '';
        multiplyOp.style.backgroundColor = '';
        subtractOp.style.backgroundColor = '';
        addOp.style.backgroundColor = '';
    } else {
        display.textContent += '8';
    }
})

const nine = numbers[2].addEventListener('click', () => {
    if (display.textContent == '0' ||
        divideOp.style.backgroundColor != '' ||
        multiplyOp.style.backgroundColor != '' ||
        subtractOp.style.backgroundColor != '' ||
        addOp.style.backgroundColor != '') {
        display.textContent = '9'
        divideOp.style.backgroundColor = '';
        multiplyOp.style.backgroundColor = '';
        subtractOp.style.backgroundColor = '';
        addOp.style.backgroundColor = '';
    } else {
        display.textContent += '9';
    }
})

const four = numbers[3].addEventListener('click', () => {
    if (display.textContent == '0' ||
        divideOp.style.backgroundColor != '' ||
        multiplyOp.style.backgroundColor != '' ||
        subtractOp.style.backgroundColor != '' ||
        addOp.style.backgroundColor != '') {
        display.textContent = '4'
        divideOp.style.backgroundColor = '';
        multiplyOp.style.backgroundColor = '';
        subtractOp.style.backgroundColor = '';
        addOp.style.backgroundColor = '';
    } else {
        display.textContent += '4';
    }
})

const five = numbers[4].addEventListener('click', () => {
    if (display.textContent == '0' ||
        divideOp.style.backgroundColor != '' ||
        multiplyOp.style.backgroundColor != '' ||
        subtractOp.style.backgroundColor != '' ||
        addOp.style.backgroundColor != '') {
        display.textContent = '5'
        divideOp.style.backgroundColor = '';
        multiplyOp.style.backgroundColor = '';
        subtractOp.style.backgroundColor = '';
        addOp.style.backgroundColor = '';
    } else {
        display.textContent += '5';
    }
})

const six = numbers[5].addEventListener('click', () => {
    if (display.textContent == '0' ||
        divideOp.style.backgroundColor != '' ||
        multiplyOp.style.backgroundColor != '' ||
        subtractOp.style.backgroundColor != '' ||
        addOp.style.backgroundColor != '') {
        display.textContent = '6'
        divideOp.style.backgroundColor = '';
        multiplyOp.style.backgroundColor = '';
        subtractOp.style.backgroundColor = '';
        addOp.style.backgroundColor = '';
    } else {
        display.textContent += '6';
    }
})

const one = numbers[6].addEventListener('click', () => {
    if (display.textContent == '0' ||
        divideOp.style.backgroundColor != '' ||
        multiplyOp.style.backgroundColor != '' ||
        subtractOp.style.backgroundColor != '' ||
        addOp.style.backgroundColor != '') {
        display.textContent = '1'
        divideOp.style.backgroundColor = '';
        multiplyOp.style.backgroundColor = '';
        subtractOp.style.backgroundColor = '';
        addOp.style.backgroundColor = '';
    } else {
        display.textContent += '1';
    }
})

const two = numbers[7].addEventListener('click', () => {
    if (display.textContent == '0' ||
        divideOp.style.backgroundColor != '' ||
        multiplyOp.style.backgroundColor != '' ||
        subtractOp.style.backgroundColor != '' ||
        addOp.style.backgroundColor != '') {
        display.textContent = '2'
        divideOp.style.backgroundColor = '';
        multiplyOp.style.backgroundColor = '';
        subtractOp.style.backgroundColor = '';
        addOp.style.backgroundColor = '';
    } else {
        display.textContent += '2';
    }
})

const three = numbers[8].addEventListener('click', () => {
    if (display.textContent == '0' ||
        divideOp.style.backgroundColor != '' ||
        multiplyOp.style.backgroundColor != '' ||
        subtractOp.style.backgroundColor != '' ||
        addOp.style.backgroundColor != '') {
        display.textContent = '3'
        divideOp.style.backgroundColor = '';
        multiplyOp.style.backgroundColor = '';
        subtractOp.style.backgroundColor = '';
        addOp.style.backgroundColor = '';
    } else {
        display.textContent += '3';
    }
})

const zero = numbers[9].addEventListener('click', () => {
    if (display.textContent == '0' ||
        divideOp.style.backgroundColor != '' ||
        multiplyOp.style.backgroundColor != '' ||
        subtractOp.style.backgroundColor != '' ||
        addOp.style.backgroundColor != '') {
        display.textContent = '0'
        divideOp.style.backgroundColor = '';
        multiplyOp.style.backgroundColor = '';
        subtractOp.style.backgroundColor = '';
        addOp.style.backgroundColor = '';
    } else {
        display.textContent += '0';
    }
})

// get node list of operators and display
const operatorsList = document.querySelectorAll('.operator');
// [/ * - +]

const divideOp = operatorsList[0];
divideOp.addEventListener('click', () => {
    // display.textContent += '/';
    inputArray.push(parseFloat(display.textContent));
    inputArray.push('divide');
    divideOp.style.backgroundColor = 'lightgrey';
})

const multiplyOp = operatorsList[1];
multiplyOp.addEventListener('click', () => {
    // display.textContent += '*';
    inputArray.push(parseFloat(display.textContent));
    inputArray.push('multiply');

    slicedArray = inputArray.slice(0, 3);

    // check for second op
    // if (typeof (inputArray[inputArray.length - 1]) === 'string') {
    //     operate(inputArray);
    //     inputArray.splice(0,2)
    // }

    // if (typeof (inputArray[inputArray.length]) !== 'string') {
    //     inputArray.push(parseFloat(display.textContent));
    //     inputArray.push('multiply');
    // } else if (typeof (inputArray[inputArray.length]) === 'string') {
    //     slicedArray = inputArray.slice(0, 3);
    //     inputArray.unshift(parseFloat(operate(slicedArray)));
    // }
    // inputArray.push(operate(inputArray));

    multiplyOp.style.backgroundColor = 'lightgrey';
})

const subtractOp = operatorsList[2];
subtractOp.addEventListener('click', () => {
    // display.textContent += '-';
    inputArray.push(parseFloat(display.textContent));
    inputArray.push('subtract');
    subtractOp.style.backgroundColor = 'lightgrey';
})

const addOp = operatorsList[3];
addOp.addEventListener('click', () => {
    // display.textContent += '+';
    inputArray.push(parseFloat(display.textContent));
    inputArray.push('add');
    addOp.style.backgroundColor = 'lightgrey';
})

// clear display
const clearBtn = document.querySelector('.clear').addEventListener('click', () => {
    inputArray = [];
    slicedArray = [];
    display.textContent = '0';
    // solDisplay.textContent = '';
    divideOp.style.backgroundColor = '';
    multiplyOp.style.backgroundColor = '';
    subtractOp.style.backgroundColor = '';
    addOp.style.backgroundColor = '';
})

// clear array
// const clearArray = document.querySelector('.clear').addEventListener('dblclick', () => {
//     inputArray = [];
//     display.textContent = '0';
//     solDisplay.textContent = '';
//     divideOp.style.backgroundColor = '';
//     multiplyOp.style.backgroundColor = '';
//     subtractOp.style.backgroundColor = '';
//     addOp.style.backgroundColor = '';
// })

// get sol display
const solDisplay = document.querySelector('#sol-display');

// equals function
const equalsBtn = document.querySelector('.equals').addEventListener('click', () => {
    inputArray.push(parseFloat(display.textContent));
    inputArray.push(operate(inputArray));
    display.textContent = '';
    display.textContent = operate(inputArray);
    // display.textContent += '=';

})

// function to check if button was clicked?
// const checkForOp = (opBtn) => {
//     if (opBtn.style.backgroundColor === 'lightgrey') {
//         clearBtn();
//     }
// };
