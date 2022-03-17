/*eslint-env browser*/
var grade = parseInt(prompt ("Enter the student\`s grade."));
if (grade < 1 || grade > 100) {
    prompt("Your number is invalid. Please ener a number between 1 and 100.");
} else if (grade >= 90) {
    document.write ("You received an A");
} else if (grade >= 80) {
    document.write ("You received a B");
} else if (grade >= 70) {
    document.write ("You received a C");
} else if (grade >= 60) {
    document.write ("You received a D");
} else  {
    document.write ("You received an F");
}

// Or-Var-2-Zak`s 
/*let num = parseInt(prompt('Enter a number between 1 and 100'))

if (num < 1 || num > 100) {
    alert('Only numbers between 1 and 100 are accepted.')
} else {
    if (num >= 90) {
        console.log('You received an A')
    } else if (num >= 80) {
        console.log('You received an B')
    } else if (num >= 70) {
        console.log('You received an C')
    } else if (num >= 60) {
        console.log('You received an D')
    } else {
        console.log('You received an F')
    }
}*/