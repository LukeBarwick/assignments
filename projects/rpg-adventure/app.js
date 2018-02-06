var readlineSync = require("readline-sync");

var gameOver = false;

var reachedEnd = false;

var backpack = [];



var name = readlineSync.question(" Please choose your survivors name ");
console.log(" Hi " + name + "!");

var enemies = [
       {
        attack: 5,
        hp: 20,
        item: "torch",
        name:"bandit"
    },
      {
        attack: 8,
        hp: 25,
        item: "pet wolf",
        name: "wolf"
    },
      {
        attack: 12,
        hp: 20,
        item: "Occult Dagger",
        name: "sorcerer"
    }

]
var survivors = [
      {
        race: "Elf",
        attack: 30,
        hp: 90,
        name: "elf"
    },
      {
        race: "Dwarf",
        attack: 20,
        hp: 110,
        name:"dwarf"
    },
      {
        race: "Human",
        attack: 25,
        hp: 95,
        name:"human"
    },
      {
        race: "Orc",
        attack: 15,
        hp: 150,
        name: "Orc"
    }
]
var raceChoices = []
for (var i = 0; i < survivors.length; i++) {
    raceChoices.push(survivors[i].race)
}

//console.log(hpOfSelectedCharacter)

characterChoices = readlineSync.keyInSelect(raceChoices, "Which survivor would you like to be?");

var character = survivors[characterChoices]

console.log("Ok, " + name + " the  " + (character.race) + " your story begins....");





console.log("You awake lost deep in a forest equipped with an empty backpack, and prepare to start your venture")


// while (character.hp > 0) {
//     walk()
// }
//
// function walk() {
//     var walk = readlineSync.question("enter W to start your journey now and walk onward into the forest");
//     if (walk === "w") {
//         console.log("you begin to walk through the dark forest")
//         if (walk === true){
//
//         }
//     } else {}
// }

function run() {

}

function fight() {
var fightChance = Math.floor(Math.random() * 4);
    if (fightChance === 4){

    }
}
var fightChance = Math.floor(Math.random() * 4);
console.log(fightChance)

function attackEnemy() {

}

function enemyAttack() {

}

function die() {

}

function enemyDie() {

}

function enemyCreation() {

}
