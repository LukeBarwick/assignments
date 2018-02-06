function flipCoin(num) {
    var numOfTails = 0
    var numOfHeads = 0
    for (i = 0; i < num; i++) {
        var coin = Math.floor(Math.random() * 2)
        if (coin === 0) {
            numOfTails++
        } else {
            numOfHeads++
        }






    }return "You flipped this many heads " + numOfHeads + " and you flipped this many tails " +  numOfTails + " "

}
console.log(flipCoin(100))
