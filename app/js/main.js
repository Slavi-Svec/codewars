const digits = document.getElementsByClassName('digit');

for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', () => {
    const clickedDigit = document.getElementsByClassName('digit')[i].innerText;
    document.getElementsByClassName('calc-display-val')[0].innerText = clickedDigit;
 });
}