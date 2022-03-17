/*eslint-env browser*/

/*let coinFlip = Math.round(Math.random()) +1;
let choice = prompt ("Heads or Tails (h/t)");
var flipResult;
if (coinFlip < 10) {
    var flipResult = "heads" ;
} else {
    var flipResult = "tails";
} if (flipResult == choice) {
    if (flipResult == "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was tails and you chose heads...you lose!"); 
    }
} else {
    if (flipResult == "tails") {
        alert("The flip was tails and you chose tails...you win!"); 
    } else {
        alert("The flip was heads and you chose tails...you lose!"); 
    }

}*/

//OR (Zak var)

let coinflip = Math.round(Math.random())
let choose = prompt('Choose heads or tails (h/t)')

if (coinflip === 0) { //TAILS
    if (choose === 'h') {
        document.write('The flip was tails and you chose heads, you lose.')
    } else {
        document.write('The flip was tails and you chose tails, you win.')
    }
} else if (coinflip === 1) {            //HEADS
    if (choose === 'h') {
        document.write('The flip was heads and you chose heads, you win.')
    } else {
        document.write('The flip was heads and you chose tails, you lose.')
    }
}  