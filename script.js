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

function bindButtons() {
    const allButtons = document.querySelectorAll('button');
    Array.from(allButtons, (element) => element.addEventListener('click', evaluateActionOfButton));
}


function evaluateActionOfButton(event) {
    let buttonPressed = event.target;
    let characterOfButton = buttonPressed.textContent;

    if (characterOfButton === 'AC') {
        deleteContentOfVisor();
    } else if (characterOfButton === '=') {
        alert('Hay que hacer una operacion!');
    }
}

function deleteContentOfVisor() {
    let visorElement = document.querySelector('.results-visor');
    visorElement.textContent = '';
}


function sendValueToDisplay(event) {
    let buttonPressed = event.target;
    let visorElement = document.querySelector('.results-visor');
    visorElement.textContent += buttonPressed.textContent;

}

bindButtons();