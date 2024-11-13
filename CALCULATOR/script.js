let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let currentOperation = null;

function updateDisplay() {
  display.textContent = currentOperation ? `${previousInput} ${currentOperation} ${currentInput}` : currentInput || '0';
}

function appendNumber(number) {
  if (currentInput === '0' && number === '0') return;
  if (currentInput === '0') currentInput = '';
  currentInput += number;
  updateDisplay();
}

function setOperation(operator) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  currentOperation = operator;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperation = null;
  updateDisplay();
}

function calculate() {
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return;

  let result;
  switch (currentOperation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '÷':
      result = prev / curr;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = null;
  previousInput = '';
  updateDisplay();
}
