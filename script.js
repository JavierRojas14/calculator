import { getOperation } from "./evaluate-operators.js";

const OPERATORS = ["/", "X", "-", "+"];

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
  console.log(operator, firstNumber, secondNumber);
  let result = "";
  if (operator === "+") {
    result = add(firstNumber, secondNumber);
  } else if (operator === "-") {
    result = subtract(firstNumber, secondNumber);
  } else if (operator === "X") {
    result = multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    result = divide(firstNumber, secondNumber);
  }

  return result;
}

function retrieveElementsOfCurrentOperation() {
  let elementsOfOperation = [null, null, null];
  let textOfVisor = document.querySelector(".results-visor").textContent;
  let operationToDo = getOperation(textOfVisor);

  elementsOfOperation[0] = operationToDo;

  // If it is an operation with at least one symbol. If it has a symbol, then it has at least the
  // first digi
  if (operationToDo) {
    let splitOperation = textOfVisor.split(operationToDo);
    let firstNumber = splitOperation[0];
    let secondNumber = splitOperation[1];

    elementsOfOperation[1] = firstNumber;
    elementsOfOperation[2] = secondNumber;
  } else {
    if (textOfVisor) {
      elementsOfOperation[1] = textOfVisor;
    }
  }

  return elementsOfOperation;
}

function addValueToDisplay(characterOfButton) {
  document.querySelector(".results-visor").textContent += characterOfButton;
}

function setValueInDisplay(result) {
  document.querySelector(".results-visor").textContent = result;
}

function deleteOneCharacterOfVisor() {
  let currentExpressionInVisor = document.querySelector(".results-visor").textContent;
  if (currentExpressionInVisor) {
    let minusOneCharacter = currentExpressionInVisor.slice(0, -1);
    document.querySelector(".results-visor").textContent = minusOneCharacter;
  }
}

function deleteContentOfVisor() {
  let visorElement = document.querySelector(".results-visor");
  visorElement.textContent = "";
}

function changeCurrentOperator(operator) {
  console.log(`Estoy aca ${operator}`);
  let currentExpressionInVisor = document.querySelector(".results-visor").textContent;
  let changedExpression = currentExpressionInVisor.slice(0, -1) + operator;
  document.querySelector(".results-visor").textContent = changedExpression;
}

function evaluateActionOfButton(event) {
  let characterOfButton = event.target.textContent;

  let currentElementsInVisor = retrieveElementsOfCurrentOperation();
  let operator = currentElementsInVisor[0];
  let firstNumber = currentElementsInVisor[1];
  let secondNumber = currentElementsInVisor[2];

  if (characterOfButton === "AC") {
    deleteContentOfVisor();
  } // Piece of code when the user clicks any operator (+, -, * or /)
  else if (OPERATORS.includes(characterOfButton)) {
    // If there is only one number
    if (!operator && firstNumber && !secondNumber) {
      addValueToDisplay(characterOfButton);
    } // If there is a number and a operator
    else if (operator && firstNumber && !secondNumber) {
      changeCurrentOperator(characterOfButton);
    } // If there is two numbers and a operator
    else if (operator && firstNumber && secondNumber) {
      if (operator === "/" && Number(secondNumber) === 0) {
        alert("Sneaky sneaky!! You're trying to divide by 0, and that is forbidden!");
        setValueInDisplay(firstNumber);
      } else {
        let result = operate(operator, Number(firstNumber), Number(secondNumber));
        setValueInDisplay(result);
        addValueToDisplay(characterOfButton);
      }
    }
  } else if (characterOfButton === "=") {
    if (operator && firstNumber && secondNumber) {
      if (operator === "/" && Number(secondNumber) === 0) {
        alert("Sneaky sneaky!! You're trying to divide by 0, and that is forbidden!");
        setValueInDisplay(firstNumber);
      } else {
        let result = operate(operator, Number(firstNumber), Number(secondNumber));
        setValueInDisplay(result);
      }
    }
  } else if (characterOfButton === "<=") {
    deleteOneCharacterOfVisor();
  } else {
    addValueToDisplay(characterOfButton);
  }
}

function bindButtons() {
  const allButtons = document.querySelectorAll("button");
  Array.from(allButtons, (element) => element.addEventListener("click", evaluateActionOfButton));
}

bindButtons();
