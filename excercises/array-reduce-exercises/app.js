// function total(arr) {
// var numberTotal = arr.reduce(function(total, number,){
//     return total + number
// }, 0)
// }
//
// total([1,2,3])
//
// function stringConcat(arr) {
// var numbersToStrings = arr.reduce(function(total, number){
//     return total + number.toString()
// },"")
// console.log(numbersToStrings)
// }
//
// stringConcat([1,2,3]) // "123"



// function totalVotes(arr) {
//     var howManyVoters = arr.filter(function(voters){
//         return voters.voted === true
//     })
//     console.log(howManyVoters.length)
// }
//
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// totalVotes(voters) // 7



// function totalVotes(arr) {
// var howManyVoted = arr.reduce(function(total, number){
//     if (number.voted === true){
//         total++
//         return total
//     }
//     else {return total}
// },0)
// console.log(howManyVoted)
// }
//
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// totalVotes(voters)

function shoppingSpree(arr) {
 var totalPrice =
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

shoppingSpree(wishlist) // 227005
