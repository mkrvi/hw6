const firstNumber = +prompt('Enter your first number');
const secondNumber = +prompt('Enter your second number');
let sum = firstNumber + secondNumber;
let mul = firstNumber * secondNumber;
let div = firstNumber / secondNumber;
let sub = firstNumber - secondNumber;

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    alert(`${firstNumber} + ${secondNumber} = ${sum}\n
${firstNumber} * ${secondNumber} = ${mul}\n
${firstNumber} / ${secondNumber} = ${div}\n
${firstNumber} - ${secondNumber} = ${sub}\n`);
} else {
    alert('Incorrect')
}

