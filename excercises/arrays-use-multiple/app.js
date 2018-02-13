


var sortedOfAge = ([
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
]);
var over = sortedOfAge.filter(function(numb) {
    return numb.age >= 18;
})

var sorted = over.sort(function(a, b) {
    return a.lastName > b.lastName
})
console.log(over)
console.log(sorted)
