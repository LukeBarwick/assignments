var removeA = function(str) {
    var newString = ""
    for(i = 0; i < str.length; i++){
        if(str[i] === "a") {
            newString += str[i].replace("a", "")
        } else {
            newString += str[i]
        }
    }
    return newString
}


console.log(removeA("unhappy camper"))
console.log(removeA("unhappy campasr"))
console.log(removeA("Anderson Silva always asks mama"))
