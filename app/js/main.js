let accumulativeSum = [];
let clickedDigits = '';

let displayedValue = document.getElementsByClassName('calc-display-val')[0];

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
  const total = eval(accumulativeSum.join(' '));
  displayedValue.innerText = total;
  accumulativeSum = [];
  accumulativeSum.push(total)
  clickedDigits = '';
});

const decimal = document.getElementById('calc-decimal');
decimal.addEventListener('click', () => {
  clickedDigits += decimal.innerText
  const hasDuplicateDecimals = (/([.]).*?\1/).test(clickedDigits)
  if (hasDuplicateDecimals) {
    return
  }

  displayedValue.innerText = clickedDigits
})

// TODO: add click event listener to back button
// TODO: when clicked remove theh last string character from `clickedDigits`
// TODO: have to update `displayedValue` with the new `clickedDigits` val