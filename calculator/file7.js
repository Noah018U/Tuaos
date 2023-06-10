// This is file7.js for the calculator app
// It contains the code for the "divide" function

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  } else {
    return a / b;
  }
}

module.exports = divide;
