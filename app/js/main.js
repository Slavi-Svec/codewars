// all of our js goes here

document.getElementById('izaak').addEventListener('click', () => {
    document.getElementById('izaak').innerHTML = 'Fred Flinstone';   
    console.log('on click has been triggered');
});


document.getElementById('zero').addEventListener('click', () => {
    var zero = document.getElementById("zero").innerText;
    document.getElementById('result').innerHTML = zero; 
    console.log(zero)
});

function addition(testOne, testTwo,testThree) {
    return testOne  + testTwo  +testThree;   
  }
 
  console.log(addition(2,1,1))
  console.log(addition(3,4,1))
  console.log(addition(5,6,1))
  console.log(addition(7,8,1))