

var wizards = [
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil"
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good"
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good"
  }
]

wizards.forEach(function(wizard) {
    wizard.isAlive = true;



});
 var neutralGoodWizards = wizards.filter(function(wizard) {
     return wizard.alignment === "neutral good";
 })

var searchWizards = wizards.find(function(wizard){
    return wizard.alignment === "lawful good";
})
// console.log(wizards)

var livingWizards = wizards.every(function(wizard){
    return wizard.isAlive === true;
})
// console.log(livingWizards)
var isAnyNeutralGoodWizards = wizards.some(function(wizard){
    return wizard.alignment === "neutral good";
})
// console.log(isAnyNeutralGoodWizards)
var choosingWhoLives = wizards.forEach(function(wizard){
    if (wizard.alignment === "neutral good") {
        return wizard.isAlive = false;
    }
})
var isEveryoneAlive = wizards.every(function(wizard){
    return wizard.isAlive === true;
})
// console.log(isEveryoneAlive)
var isSomeoneAlive = wizards.some(function(wizard){
    return wizard.isAlive === true;
})
console.log(isSomeoneAlive)
