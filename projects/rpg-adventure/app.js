var readlineSync = require("readline-sync");

var gameOver = false;

var reachedEnd = false;

var backpack = [];

var randomNumber = 0

var fightChoices = ["Attack", "Try to Escape"]


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function run() {

}

function gettingAttackedChance() {
    var fightOdds = Math.floor(Math.random() * 4);
    if (fightOdds >= 3) {
        return true;
    }
}

function attackEnemy() {
    var damageDealt = Math.floor(Math.random() * 10) + 1 + character.attack
    if (damageDealt >= generatedMonster.hp) {
        console.log("you have killed the" + generatedMonster + " with your" + character + "ish powers")
    }
    if (damageDealt < generatedMonster.hp) {
        console.log("you strike the " + generatedMonster + " for" + attackEnemy + " damage")

    }
}

function enemyAttack() {

}

function die() {

}

function enemyDie() {

}

var name = readlineSync.question(" Please choose your survivors name ");
console.log(" Hi " + name + "!");

var enemiesArray = [{
        attack: 5,
        hp: 100,
        item: "torch",
        name: "bandit"
    },
    {
        attack: 8,
        hp: 75,
        item: "pet wolf",
        name: "wolf"
    },
    {
        attack: 12,
        hp: 50,
        item: "Occult Dagger",
        name: "sorcerer"
    }

]
// If fightChance === true then i need to pull an enemy from enemies array and
// implement it into the console.log as well as makeing sure it states what
//enemy is actually is
//Helper Function is at the top
function enemyCreation() {
    var monster = enemiesArray[getRandomInt(0, 2)].name;
    return monster;
}

var survivors = [{
        race: "Elf",
        attack: 30,
        hp: 90,
        name: "elf"
    },
    {
        race: "Dwarf",
        attack: 20,
        hp: 110,
        name: "dwarf"
    },
    {
        race: "Human",
        attack: 25,
        hp: 95,
        name: "human"
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



var characterTypeChoices = readlineSync.keyInSelect(raceChoices, "Which survivor would you like to be?");

var character = survivors[characterChoices]

console.log("Ok, " + name + " the  " + (character.race) + " your story begins....");





console.log("You awake lost deep in a forest equipped with an empty backpack, and prepare to start your venture")


while (!gameOver) {

    var walk = readlineSync.question("Enter W to continue..");
    if (walk != "w") {
        console.log("Enter W to continue..")
    }

    if (fightChance()) {
        var generatedMonster = enemyCreation();
        console.log("A wild " + generatedMonster.name + " has appeared")
        var fightIndex = readlineSync.keyInSelect(fightChoices, "how will you respond?");
        if (fightChoices[fightIndex] === "Attack") {
            attackEnemy(generatedMonster);


        }
    }
}
