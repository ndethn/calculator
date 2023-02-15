// calculator project 02/07

// create basic math functions
const add = (a, b) => {
    sol = a + b;
    return Math.round(sol * 100) / 100;
}

const subtract = (a, b) => {
    sol = a - b
    return Math.round(sol * 100) / 100;
}

const multiply = (a, b) => {
    sol = a * b
    return Math.round(sol * 100) / 100;
}

const divide = (a, b) => {
    if (typeof(b) === 0) {
        display.textContent = 'LOL';
        return;
    } else {
        sol = a / b;
        return Math.round(sol * 100) / 100;
    }
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
        console.log('LOL error');
        return display.textContent = 'LOL'
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
const seven = numbers[0];
seven.addEventListener('click', () => {
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

seven.addEventListener('mousedown', () => {
    seven.style.backgroundColor = 'grey';
});
seven.addEventListener('mouseup', () => {
    seven.style.backgroundColor = '';
});

const eight = numbers[1];
eight.addEventListener('click', () => {
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

eight.addEventListener('mousedown', () => {
    eight.style.backgroundColor = 'grey';
});
eight.addEventListener('mouseup', () => {
    eight.style.backgroundColor = '';
});

const nine = numbers[2];
nine.addEventListener('click', () => {
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

nine.addEventListener('mousedown', () => {
    nine.style.backgroundColor = 'grey';
});
nine.addEventListener('mouseup', () => {
    nine.style.backgroundColor = '';
});

const four = numbers[3];
four.addEventListener('click', () => {
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

four.addEventListener('mousedown', () => {
    four.style.backgroundColor = 'grey';
});
four.addEventListener('mouseup', () => {
    four.style.backgroundColor = '';
});

const five = numbers[4];
five.addEventListener('click', () => {
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

five.addEventListener('mousedown', () => {
    five.style.backgroundColor = 'grey';
});
five.addEventListener('mouseup', () => {
    five.style.backgroundColor = '';
});

const six = numbers[5];
six.addEventListener('click', () => {
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

six.addEventListener('mousedown', () => {
    six.style.backgroundColor = 'grey';
});
six.addEventListener('mouseup', () => {
    six.style.backgroundColor = '';
});

const one = numbers[6];
one.addEventListener('click', () => {
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

one.addEventListener('mousedown', () => {
    one.style.backgroundColor = 'grey';
});
one.addEventListener('mouseup', () => {
    one.style.backgroundColor = '';
});

const two = numbers[7];
two.addEventListener('click', () => {
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

two.addEventListener('mousedown', () => {
    two.style.backgroundColor = 'grey';
});
two.addEventListener('mouseup', () => {
    two.style.backgroundColor = '';
});

const three = numbers[8];
three.addEventListener('click', () => {
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

three.addEventListener('mousedown', () => {
    three.style.backgroundColor = 'grey';
});
three.addEventListener('mouseup', () => {
    three.style.backgroundColor = '';
});

const zero = numbers[9];
zero.addEventListener('click', () => {
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

zero.addEventListener('mousedown', () => {
    zero.style.backgroundColor = 'grey';
});
zero.addEventListener('mouseup', () => {
    zero.style.backgroundColor = '';
});

// get node list of operators and display
const operatorsList = document.querySelectorAll('.operator');
// [/ * - +]

const divideOp = operatorsList[0];
divideOp.addEventListener('click', () => {
    inputArray.push(parseFloat(display.textContent));
    inputArray.push('divide');

    if (inputArray.length === 4) {
        slicedArray = inputArray.slice(0, 3);
        display.textContent = operate(slicedArray);
        inputArray.push(parseFloat(display.textContent));
        inputArray.push('divide');
        inputArray.splice(0, 4);
    }

    divideOp.style.backgroundColor = 'lightgrey';
})

const multiplyOp = operatorsList[1];
multiplyOp.addEventListener('click', () => {
    inputArray.push(parseFloat(display.textContent));
    inputArray.push('multiply');

    if (inputArray.length === 4) {
        slicedArray = inputArray.slice(0, 3);
        display.textContent = operate(slicedArray);
        inputArray.push(parseFloat(display.textContent));
        inputArray.push('multiply');
        inputArray.splice(0, 4);
    }

    multiplyOp.style.backgroundColor = 'lightgrey';
})

const subtractOp = operatorsList[2];
subtractOp.addEventListener('click', () => {
    inputArray.push(parseFloat(display.textContent));
    inputArray.push('subtract');

    if (inputArray.length === 4) {
        slicedArray = inputArray.slice(0, 3);
        display.textContent = operate(slicedArray);
        inputArray.push(parseFloat(display.textContent));
        inputArray.push('subtract');
        inputArray.splice(0, 4);
    }

    subtractOp.style.backgroundColor = 'lightgrey';
})

const addOp = operatorsList[3];
addOp.addEventListener('click', () => {
    inputArray.push(parseFloat(display.textContent));
    inputArray.push('add');

    if (inputArray.length === 4) {
        slicedArray = inputArray.slice(0, 3);
        display.textContent = operate(slicedArray);
        inputArray.push(parseFloat(display.textContent));
        inputArray.push('add');
        inputArray.splice(0, 4);
    }

    addOp.style.backgroundColor = 'lightgrey';
})

// clear display
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    inputArray = [];
    slicedArray = [];
    display.textContent = '0';
    divideOp.style.backgroundColor = '';
    multiplyOp.style.backgroundColor = '';
    subtractOp.style.backgroundColor = '';
    addOp.style.backgroundColor = '';
})

clearBtn.addEventListener('mousedown', () => {
    clearBtn.style.backgroundColor = 'grey';
});
clearBtn.addEventListener('mouseup', () => {
    clearBtn.style.backgroundColor = '';
});

// equals function
const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
    inputArray.push(parseFloat(display.textContent));

    // check for division of zero
    if (inputArray[2] === 0) {
        display.textContent = 'LOL';
        return;
    }

    inputArray.push(parseFloat(operate(inputArray)));
    display.textContent = '';
    display.textContent = inputArray[inputArray.length - 1];
})

equalsBtn.addEventListener('mousedown', () => {
    equalsBtn.style.backgroundColor = 'grey';
});
equalsBtn.addEventListener('mouseup', () => {
    equalsBtn.style.backgroundColor = '';
});
