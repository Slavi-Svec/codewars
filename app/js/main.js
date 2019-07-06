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



