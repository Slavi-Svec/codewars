// all of our js goes here

document.getElementById('izaak').addEventListener('click', () => {
    document.getElementById('izaak').innerHTML = 'Fred Flinstone';
    console.log('on click has been triggered');
});

document.getElementsByClassName('digits')[0].addEventListener('click', () => {
    var digits = document.getElementsByClassName("digits").innerText;
    document.getElementById('result').innerHTML = zero;
    console.log(digits)
});

function addition(testOne, testTwo,testThree) {
    return testOne  + testTwo  + testThree;
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