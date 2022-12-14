function numberValidator(input) {
  if (typeof input !== "number") {
    return false;
  }
  return true;
}

function naturalNumberValidator(input) {
  if (typeof input === "number" && Number.isInteger(input) && input > 0) {
    return true;
  }
  return false;
}
function integerNumberValidator(input) {
  if (typeof input === "number" && Number.isInteger(input)) {
    return true;
  }
  return false;
}

function stringValidator(input) {
  if (typeof input !== "string") {
    return false;
  }
  return true;
}

function arrayValidator(input) {
  if (!Array.isArray(input)) {
    return false;
  }
  return true;
}

function numberArrayValidator(input) {
  if (!arrayValidator(input)) {
    return false;
  }
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] !== "number") {
      return false;
    }
  }
  return true;
}
