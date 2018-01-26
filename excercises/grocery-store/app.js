

var shopper = {
    cart: "is completely full",
    numberOfApples: 25,
    hasFood: true,
    groceryCart: ["fruit", "meats", "veggies"],
    firstName: "Luke",
    lastName: "Barwick",
    myFunction: function(food) {
        if food === true
            console.log("I can finally go home");
    }
}

shopper.myFunction(shopper.hasFood);
