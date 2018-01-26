var pen = {
    color: "Black",
    grip: "Rubber",
    price: 2,
    write: function penDetails() {
        console.log("I'm a "  + this.color + " pen that costs $" + this.price);
    }
}
pen.penDetails();

var phone = {
    color: "Black",
    case: "Plastic"
    price: 400,
    write: function phoneDetails() {
        console.log("I'm a " + this.color + "phone that costs $" + this.price);
    }
}
var monitor = {
    color: "Black",
    make: "ASUS",
    price: 250,
    write: function monitorDetails() {
        console.log("I'm a " + this.color + "monitor that costs $" + this.price);
    }
}
var laptop = {
    color: "Silver",
    make: "Apple",
    price: 1200,
    write: function laptopDetails() {
        console.log("I'm a " + this.color + "laptop that costs $" + this.price);
    }
}
var coat = {
    color: "Green",
    size: "Large",
    price: 85,
    write: function coatDetails() {
        console.log("I'm a " + this.color + "coat that costs $" + this.price);
        }
}
var keyboard = {
    color: "Black",
    make: "Logitech",
    price: 30,
    write: function keyboardDetails() {
        console.log("I'm a " + this.color + "keyboard that costs $" + this.price);
    }
}
var hoodie = {
    color: "Black"
    make: "Alpine Design",
    price: 35,
    write function hoodieDetails() {
        console.log("I'm a " + this.color + "hoodie that costs $" + this.price);
    }

}

var cup = {
    color: "Clear",
    price: .5,
    isGlassCup: false,
    write: function cupDetails() {
        console.log("I'm a " + this.color + "cup that costs $" + this.price);
        }
}
var notebook = {
    color: "White",
    price: 5,
    isHardBack: false,
    write:function notebookDetails() {
        console.log("I'm a " + this.color + "notebook that costs $" + this.price);

    }

}
var shoe = {
    color: "White",
    price: 65,
    isBoots:false,
    write:function shoeDetails() {
        console.log("I'm a " + this.color + "shoe that costs $" + this.price);

    }
}
