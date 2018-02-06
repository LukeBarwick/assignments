var first = document.getElementById("numberOfGoomba")
var second = document.getElementById("numberOfBobombs")
var third = document.getElementById("numberOfCheeps")

function addInputValues(){
    var addGoomba = parseInt((first).value * 5);
    console.log(parseInt((first).value));
    var addBobombs = parseInt((second).value* 7);
    console.log(parseInt((second).value));
    var addCheeps = parseInt((third).value * 15);
    console.log(parseInt((third).value));


var addMobs = (addGoomba + addBobombs + addCheeps)
console.log(addMobs);
coinsTotal.innerHTML = addMobs
}
sumOfCoins.addEventListener("click",addInputValues);
