let number1 = document.getElementById('1st');
const number2 = document.getElementById('2st');
let button1 = document.getElementById('multiply');
let button2 = document.getElementById('divide');
let result = document.getElementById('result');

button1.addEventListener('click', function() {
    let x = number1.value;
    let y = number2.value;
    let z = x * y;
    result.innerHTML = 'Result is :' + z;
});

button2.addEventListener('mouseover', function() {
    let x = number1.value;
    let y = number2.value;
    let z = x / y;
    result.innerHTML = 'Result is: ' +  z;
});

number1.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        button1.click();
    }
});

number2.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        button1.click();
    }
});
