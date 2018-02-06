function Enemy(){
    this.type = chooseType();
    this.hp = setHp(this.type);
    this.defense = this.hp * 3;
}

function setHp(enemyType) {
    if (enemyType === "Ancient Dragon") {
        return Math.floor(Math.random() * 21) + 80;
    } else if (enemyType === "Prowler") {
        return Math.floor(Math.random() * 30) + 50;
    } else {
        return Math.floor(Math.random() * 30) + 20;
    }
}

function chooseType() {
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    var choice = enemyTypes[randIndex];
    return choice;
}

var enemies = [];

for (var i = 0; i < 100; i++) {
    enemies.push(new Enemy());
}

console.log(enemies);
