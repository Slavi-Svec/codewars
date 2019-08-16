let accumulativeSum = [];
let clickedDigits = '';

const displayedValue = document.getElementsByClassName('calc-display-val')[0];

const digits = document.getElementsByClassName('digit');
for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', () => {
    clickedDigit = document.getElementsByClassName('digit')[i].innerText;
    clickedDigits += clickedDigit;
    displayedValue.innerText = clickedDigits;
 });
}

const arithmeticOperators = document.getElementsByClassName('calc-btn-operator');
for (let i = 0; i < arithmeticOperators.length; i++) {
  arithmeticOperators[i].addEventListener('click', () => {
    const clickedOperator = arithmeticOperators[i].innerText;
    displayedValue.innerText = clickedOperator;
    accumulativeSum.push(clickedDigits, clickedOperator);
    clickedDigits = '';
 });
}

const clear = document.getElementById('calc-clear');
clear.addEventListener('click', () => {
  document.getElementsByClassName('calc-display-val')[0].innerText = 0;
  clickedDigits = '';
  accumulativeSum = [];
});

const equals = document.getElementById('calc-equals');
equals.addEventListener('click', () => {
  accumulativeSum.push(clickedDigits);
  const usableSum = accumulativeSum.join(' ');
  const total = eval(usableSum);
  displayedValue.innerText = total;
});
