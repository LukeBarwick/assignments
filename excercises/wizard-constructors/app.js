function MakeWizards(name, power, element) {
    this.name = name
    this.power = power
    this.element = element
}
var gandalf = new MakeWizards("Gandalf", 9000, "Light")
var bigsby = new MakeWizards("Bigsby", 20, "Natural Gas")
var soromon = new MakeWizards("Soromon", 8999, "Evil")

EmployeeRecords.prototype.print = function() {
    console.log(" My name is " + this.name + " my power level is " + this.power + " i make " + this.element + " all day" + " I am currently charming your mother")
}

gandalf.print()



var Wizard = function(type, attack, defense) {
    this.type = type;
    this.attack = attack;
    this.defense = defense;
}

Wizard.prototype.speak = function() {
    console.log("Abracadabra");
}

Wizard.prototype.lightningBolt = function() {
    console.log("Lightning Bolt!");
}
