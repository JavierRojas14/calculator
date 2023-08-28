const operation = "20-30";

export function getOperation(operation) {
  if (operation.includes("+")) {
    return "+";
  } else if (operation.includes("-")) {
    return "-";
  } else if (operation.includes("*")) {
    return "*";
  } else if (operation.includes("/")) {
    return "/";
  } else {
    return null;
  }
}

console.log(getOperation(operation));
