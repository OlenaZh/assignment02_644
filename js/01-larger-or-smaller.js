/*eslint-env browser*/
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

if (num1 > num2) {
    console.log (`The larger number entered is: ${num1}`);
} else if (num2 > num1) {
    console.log (`The larger number entered is: ${num2}`);
} else {
    console.log (`The numbers are equal`);
}