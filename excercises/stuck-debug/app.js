var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = ask.keyInSelect(options, "What would you like to do today?: ");

while(option !== 2){
  if(option === 0){
    console.log("You pick some flowers. You make a bouquet.");
    var option = ask.keyInSelect(options, "What would you like to do today?: ");
} if(option === 1){
    console.log("You shoot some lazy bears in the face")
}

console.log("You fought a bear and got beat up!");
