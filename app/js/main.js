// all of our js goes here
const digitElements = document.querySelectorAll('.digit');
for (let i = 0; i < digitElements.length; i++) {
    document.getElementsByClassName('digit')[i].addEventListener('click', () => {
        console.log('the following digit has been clicked', document.getElementsByClassName('digit')[i].innerText);
    });
}

function addition(testOne, testTwo,testThree) {
    return testOne + testTwo + testThree;
}
//   console.log(addition(2,1,1))
//   console.log(addition(3,4,1))
//   console.log(addition(5,6,1))
//   console.log(addition(7,8,1))

var arrayExample = ['heelo', 'whatver', 100, 'fasdfdf'];
for (var i = 0; i < arrayExample.length; i++) {
    console.log('this is the index', i, '   ', 'this is the value', arrayExample[i]);
}

console.log(arrayExample.length)
console.log(arrayExample[3])