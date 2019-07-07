// all of our js goes here

//TODO: Get familiar with arrays and for loops and also look into why to use const and let for variables
// link for const and let explanation https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75

// We get all the digit elements and save them to a variable named "digitElements"
const digitElements = document.querySelectorAll('.digit');

// Line 12 loop over all the digit elements and add event listeners to them to listen for when they've been clicked
// On line 14 we add the clicked digit to a variable named "clickedDigit"
// On line 15 when any digit is clicked we then add the digit to the element with a class name of  "result"
for (let i = 0; i < digitElements.length; i++) {
    document.getElementsByClassName('digit')[i].addEventListener('click', () => {
        const clickedDigit = document.getElementsByClassName('digit')[i].innerText;
        document.getElementsByClassName('result')[0].innerText = clickedDigit;
    });
}

function addition(testOne, testTwo,testThree) {
    return testOne + testTwo + testThree;
}
//   console.log(addition(2,1,1))
//   console.log(addition(3,4,1))
//   console.log(addition(5,6,1))
//   console.log(addition(7,8,1))

const arrayExample = ['heelo', 'whatver', 100, 'fasdfdf'];
for (let i = 0; i < arrayExample.length; i++) {
    console.log('this is the index', i, '   ', 'this is the value', arrayExample[i]);
}

console.log(arrayExample.length);
console.log(arrayExample[3]);