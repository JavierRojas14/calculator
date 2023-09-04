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

function sendValueToDisplay(characterOfButton) {
  let visorElement = document.querySelector(".results-visor");
  let charactersToNotDoAnything = OPERATORS.concat(["."]);

  // This if only happens if the visor is empty, and the user clicks an operator.
  // In that case, the operator mustn't be added to the visor
  if (
    visorElement.textContent === "" &&
    charactersToNotDoAnything.indexOf(characterOfButton) != -1
  ) {
    // pass
  } else {
    visorElement.textContent += characterOfButton;
  }
}

function checkValidOperateExpression() {
  let visorElement = document.querySelector(".results-visor");
  let textOfVisor = visorElement.textContent;
  let operationToDo = getOperation(textOfVisor);

  if (operationToDo) {
    let splitOperation = textOfVisor.split(operationToDo);
    let lastElement = splitOperation[1];

    // If the last element is not null (Has 2 elements to operate). Then operate
    if (lastElement) {
      const result = operate(
        operationToDo,
        Number(splitOperation[0]),
        Number(splitOperation[1])
      );
      visorElement.textContent = result;
    }
  }
}

function evaluateActionOfButton(event) {
  let buttonPressed = event.target;
  let characterOfButton = buttonPressed.textContent;

  let visorElement = document.querySelector(".results-visor");
  let textOfVisor = visorElement.textContent;

  if (characterOfButton === "AC") {
    deleteContentOfVisor();
  } else if (characterOfButton === "=") {
    checkValidOperateExpression();
  } else if (characterOfButton === "?") {
    //pass
  } else if (OPERATORS.includes(characterOfButton)) {
    let operator = getOperation(textOfVisor);
    if (operator) {
      checkValidOperateExpression();
      visorElement.textContent += operator;
    } else {
      sendValueToDisplay(characterOfButton);
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
