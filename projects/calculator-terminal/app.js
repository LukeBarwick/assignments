var readline = require("readline-sync")

var firstNumber = readline.question("Please enter your first number. " );
console.log(firstNumber)

var secondNumber = readline.question("Please enter your second number. " );
console.log(secondNumber)

var opperator = readline.question("Please enter the operation to perform: add, sub, multi, div. " );
console.log(opperator)

function add(a, b){
    console.log(parseInt(a) + parseInt(b))
}
function sub(a, b){
    console.log(parseInt(a) - parseInt(b))
}
function multi(a, b){
    console.log(parseInt(a) * parseInt(b))
}
function div(a, b){
    console.log(parseInt(a) / parseInt(b))
}

if (opperator === "add"){
    add(firstNumber,secondNumber)
}

if (opperator === "sub"){
    sub(firstNumber,secondNumber)
}

if (opperator === "multi"){
    multi(firstNumber,secondNumber)
}

if (opperator === "div"){
    div(firstNumber,secondNumber)
}
