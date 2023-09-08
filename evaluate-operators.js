export function getOperation(operation) {
  if (operation.includes("+")) {
    return "+";
  } else if (operation.includes("-")) {
    return "-";
  } else if (operation.includes("X")) {
    return "X";
  } else if (operation.includes("/")) {
    return "/";
  } else {
    return null;
  }
}
