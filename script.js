const displayOneElement = document.querySelector(".display-1");
const displayTwoElement = document.querySelector(".display-2");
const tempResultElement = document.querySelector(".temp-result");
const numbersElement = document.querySelector(".number");
const operationsElement = document.querySelector(".operation");
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
    if (!displayTwoNumber) {
      return;
    }
    haveDot = false;
    const operationName = e.target.innerText;
    if (displayOneNumber && displayTwoNumber && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(displayTwoNumber);
    }
  })
})