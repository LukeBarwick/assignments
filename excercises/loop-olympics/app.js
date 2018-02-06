// for (i = 0; i < 10; i++) {
//     console.log(i)
// }
//
// for (i = 9; i > 0; i--) {
//     console.log(i)
// }
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }
// var numbers = []
// for(i = 0; i < 10; i++) {
//     numbers.push(i)
// }
// console.log(numbers)
//
// for(var i = 0; i < 100; i +=2){
//     console.log(i)
// }
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (i = 1; i < fruit.length; i++){
//     if ([i]%2 == 1){
//     console.log(fruit[i])
//     }
//
// }
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
// for(var i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
// }
var nameArray = []
var occupationArray = []

for (var i = 0; i < peopleArray.length; i++){
    nameArray.push(peopleArray[i].name)
    occupationArray.push(peopleArray[i].occupation)
}
    console.log(nameArray)
    console.log(occupationArray)
