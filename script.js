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

function deleteContentOfVisor() {
  let visorElement = document.querySelector(".results-visor");
  visorElement.textContent = "";
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

function sendValueToDisplay(characterOfButton) {
  document.querySelector(".results-visor").textContent += characterOfButton;
  // let currentElementsInVisor = retrieveElementsOfCurrentOperation();
  // let operation = currentElementsInVisor[0];
  // let firstNumber = currentElementsInVisor[1];
  // let secondNumber = currentElementsInVisor[2];

  // // If the visor is empty, and the button pressed is an operator, then don't send.
  // console.log(operation, firstNumber, secondNumber);
  // if (
  //   operation === null &&
  //   firstNumber === null &&
  //   secondNumber === null &&
  //   OPERATORS.includes(characterOfButton)
  // ) {
  //   //pass
  // } else if (operation && OPERATORS.includes(characterOfButton)) {
  //   //pass
  // } else {
  //   document.querySelector(".results-visor").textContent += characterOfButton;
  // }
}

function sendResultToDisplay(result) {
  document.querySelector(".results-visor").textContent = result;
}

function evaluateActionOfButton(event) {
  let characterOfButton = event.target.textContent;

  let currentElementsInVisor = retrieveElementsOfCurrentOperation();
  let operation = currentElementsInVisor[0];
  let firstNumber = currentElementsInVisor[1];
  let secondNumber = currentElementsInVisor[2];

  if (characterOfButton === "AC") {
    deleteContentOfVisor();
  } else if (characterOfButton === "?") {
    // pass
  } else if (OPERATORS.includes(characterOfButton)) {
    if (operation === null && firstNumber && secondNumber === null) {
      sendValueToDisplay(characterOfButton);
    } else if (operation && firstNumber && secondNumber) {
      result = operate(operation, firstNumber, secondNumber);
      sendValueToDisplay(result);
    }
  } else if (characterOfButton === "=") {
    if (operation && firstNumber && secondNumber) {
      let result = operate(operation, firstNumber, secondNumber);
      sendResultToDisplay(result);
    }
  } else {
    sendValueToDisplay(characterOfButton);
  }
}

function bindButtons() {
  const allButtons = document.querySelectorAll("button");
  Array.from(allButtons, (element) =>
    element.addEventListener("click", evaluateActionOfButton)
  );
}

bindButtons();
