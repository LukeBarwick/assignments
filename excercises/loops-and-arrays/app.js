var counter = 0
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "stapler", "computer", "computer"]
for (var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer") {
        counter++
    }

}
        console.log(counter)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12
    },{
        name: "Madeline",
        age: 80
    },{
        name: "Cheryl",
        age: 22
    },{
        name: "Sam",
        age: 30
    },{
        name: "Suzy",
        age: 4
    }
]
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
    } else console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
