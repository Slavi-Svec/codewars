const digits = document.getElementsByClassName('digit');
const addition = document.getElementById('calc-plus');
// this is the variable we store the number the user types
let calc = '';
for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', () => {
    clickedDigit = document.getElementsByClassName('digit')[i].innerText;
    calc += clickedDigit;
    const result = document.getElementsByClassName('calc-display-val')[0].innerText = calc;
 });
}


const clear = document.getElementById('calc-clear');
clear.addEventListener('click', () => {
 document.getElementsByClassName('calc-display-val')[0].innerText = 0;
});
