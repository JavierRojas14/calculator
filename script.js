function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;

}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;

}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;

}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;

}

function operate(operator, firstNumber, secondNumber) {
    if (operator === '+') {
        add(firstNumber, secondNumber);
    } else if (operator === '-') {
        subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        divide(firstNumber, secondNumber);
    } else {
        return 'You must enter a valid operator';
    }

}
