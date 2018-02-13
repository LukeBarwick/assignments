var readlineSync = require("readline-sync");

var enemiesArray = [{
        attack: 7,
        hp: 100,
        item: "torch",
        name: "bandit",
        defaultHp: 100
    },
    {
        attack: 7,
        hp: 75,
        item: "wolf claw",
        name: "wolf",
        defaultHp: 75
    },
    {
        attack: 10,
        hp: 50,
        item: "Occult Dagger",
        name: "sorcerer",
        defaultHp: 50
    }

]

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

var gameOver = false;

var items = []

var reachedEnd = false;

var fightOptions = ["Attack", "Run"]

var raceChoice = []
// ^^contains all the survivors.race^^

var tryToRun = function run() {
    var escape = getRandomInt(0, 1)
    if (escape == 0) {
        return true;

    } else {
        return false;
    }
}

for (var i = 0; i < survivors.length; i++) {
    raceChoice.push(survivors[i].race)
}

function attackEnemy() {
    var damageDealt = Math.floor(Math.random() * 10) + 1 + hero.attack
    console.log(damageDealt)
    return damageDealt
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gettingAttackedChance() {
    var fightOdds = Math.floor(Math.random() * 4);
    if (fightOdds >= 3) {
        return true;
    }
}

function enemyCreation() {
    var monster = enemiesArray[getRandomInt(0, 2)];
    return monster;
}

function enemyDamage(monster) {
    var enemyAttackValue = getRandomInt(0, 10) + monster.attack;
    return enemyAttackValue;
}


console.log("You struggle to open your eyes as a flash of light leaves the sky,")

console.log(" you stand up with no recollection of where you're from or who you are...")

var name = readlineSync.question(" Please choose your survivors name ");
console.log(" Hi " + name + "!");

var selectedRace = readlineSync.keyInSelect(raceChoice, "Which survivor would you like to be?");

var myCharRace = raceChoice[selectedRace]
// THIS IS THE SELECTED RACE FROM OBJECT ^
var hero = survivors[selectedRace]
// THIS IS THE ACTUAL OBJECT FROM SURIVORS

console.log("Ok, " + name + " the " + myCharRace + " your story begins....");

while (gameOver === false || reachedEnd === false) {
    var walk = readlineSync.question("Please enter W to walk")
    if (walk === "w" || walk === "W") {
        console.log("you move forward into the dark forest...")
        if (gettingAttackedChance()) {
            var currentMonster = enemyCreation()
            console.log("a wild " + currentMonster.name + " has appeared")
            var hasEscaped = false
            while (currentMonster.hp > 0 && hasEscaped === false) {
                var fightIndex = readlineSync.keyInSelect(fightOptions, "What would you like to do?")
                var enemyAttack = enemyDamage(currentMonster)
                if (fightIndex == 0) {
                    var damageDealt = Math.floor(Math.random() * 10) + 1 + hero.attack;
                    currentMonster.hp -= damageDealt
                    console.log(currentMonster.name + " took " + damageDealt + " from your attack and has " + currentMonster.hp + " health left")
                    console.log(currentMonster.name + " strikes you for " + enemyAttack + " and it hurts real bad")
                    hero.hp -= enemyAttack
                    if (hero.hp <= 0) {
                        console.log("YOU HAVE DIED BUD, ITS OVER!")
                        gameOver = true;
                        reachedEnd = true;
                    }
                    if (currentMonster.hp <= 0) {
                        gameOver === false;
                        reachedEnd === false;
                        console.log("You have slain the " + currentMonster.name + " with your " + hero.name + "ish powers!!!!!!")
                        console.log("You inspect the " + currentMonster.name + " and you notice there is a " + currentMonster.item + " so you take it!")
                        console.log("You receive +15hp for your victory")
                        hero.hp += 15
                        console.log("You have " + hero.hp + " hp left")
                        items.push(currentMonster.item)
                    }

                } else if (fightIndex == 1) {
                    console.log("you attempt an escape")
                    if (tryToRun() == true) {
                        var enemyAttack = enemyDamage(currentMonster)
                        hero.hp -= enemyAttack;
                        console.log("you have failed your escape and taken " + enemyAttack + " damage")
                    } else {
                        console.log("you have managed to escape")
                        hasEscaped = true
                    }
                }

            }
            currentMonster.hp = currentMonster.defaultHp
        }



    }


}
