const displayOneElement = document.querySelector(".display-1");
const displayTwoElement = document.querySelector(".display-2");
const tempResultElement = document.querySelector(".temp-result");
const numbersElement = document.querySelectorAll(".number");
const operationsElement = document.querySelectorAll(".operation");
const equalElement = document.querySelector(".equal");
const clearElement = document.querySelector(".all-clear");
const clearLastElement = document.querySelector(".last-entity-clear");

let displayOneNumber = "";
let displayTwoNumber = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersElement.forEach(number => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    displayTwoNumber += e.target.innerText;
    displayTwoElement.innerText = displayTwoNumber;
  })
});

operationsElement.forEach(operation => {
  operation.addEventListener("click", (e) => {
    if (!displayTwoNumber) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (displayOneNumber && displayTwoNumber && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(displayTwoNumber);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  })
});

function clearVar(name = "") {
  displayOneNumber += displayOneNumber + " " + name + " ";
  displayOneElement.innerText = displayOneNumber;
  displayTwoElement = "";
  displayTwoNumber = "";
  tempResultElement.innerText = result;
}

function mathOperation() {
  if (lastOperation === "X") {
    result = parseFloat(result) * parseFloat(displayTwoNumber);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(displayTwoNumber);
  } else if (lastOperation === "-") {
    result = parseFloat(result) + parseFloat(displayTwoNumber);
  }
}