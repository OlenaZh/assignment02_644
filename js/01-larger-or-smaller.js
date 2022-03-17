/*eslint-env browser*/
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));

if (num1 > num2) {
    console.log (`The larger number entered is: ${num1}`);
} else if (num2 > num1) {
    console.log (`The larger number entered is: ${num2}`);
} else {
    console.log (`The numbers are equal`);
}

//Or Var-2-Zak`s
/*let num1 = parseInt(prompt('Enter the first number'))
let num2 = parseInt(prompt('Enter the second number'))

if (num1 < num2) {
    document.write(`${num2} is larger than ${num1}`)
} else if (num1 > num2) {
    document.write(`${num1} is larger than ${num2}`)
} else {
    document.write(`Both numbers are equal`)
}*/