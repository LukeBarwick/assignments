function doubleNumbers(arr) {
    var doubleTheNumber = arr.map(function(number) {
        return number * 2
    })
    console.log(doubleTheNumber)
}

doubleNumbers([2, 5, 100]); // [4, 10, 200]

function stringItUp(arr) {
    var makeStrings = arr.map(function(number) {
        return number.toString()
    })
    console.log(makeStrings)
}

stringItUp([2, 5, 100]); // ["2", "5", "100"]




function namesOnly(arr){
    var arrayOfStrings = arr.map(function(number){
        return number.name

    })
    console.log(arrayOfStrings)
}

namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
}, {
    name: "Eric Jones",
    age: 2
},
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
function makeStrings(arr){

}

makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])


function readyToPutInTheDOM(arr){

}
readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])
