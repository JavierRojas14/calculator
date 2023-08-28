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
  if (operator === "+") {
    add(firstNumber, secondNumber);
  } else if (operator === "-") {
    subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    divide(firstNumber, secondNumber);
  } else {
    return "You must enter a valid operator";
  }
}

function deleteContentOfVisor() {
  let visorElement = document.querySelector(".results-visor");
  visorElement.textContent = "";
}

function evaluateValidInputToOperate() {}

function sendValueToDisplay(characterOfButton) {
  let visorElement = document.querySelector(".results-visor");
  let operators = ["/", "X", "-", "+", "."];

  // This if only happens if the visor is empty, and the user clicks an operator.
  // In that case, the operator mustn't be added to the visor
  if (
    visorElement.textContent === "" &&
    operators.indexOf(characterOfButton) != -1
  ) {
    // pass
  } else {
    visorElement.textContent += characterOfButton;
  }
}

function evaluateActionOfButton(event) {
  let buttonPressed = event.target;
  let characterOfButton = buttonPressed.textContent;

  if (characterOfButton === "AC") {
    deleteContentOfVisor();
  } else if (characterOfButton === "=") {
    alert("Hay que hacer una operacion!");
  } else if (characterOfButton === "?") {
    //pass
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
