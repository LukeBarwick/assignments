function countCode(str) {
    return str.split("").reduce(function(count, character, i, arr) {
        if (character + arr[i + 1] + arr[i + 3] === "coe") {
            count++;
        }
        return count;
    }, 0);
}



function countCode(str) {
    str = str.toLowerCase();
    var count = 0;
    // loop through str
    for (var i = 0; i < str.length - 3; i++) {
        if (str[i] + str[i + 1] + str[i + 3] === "coe") {
            count++;
            i += 3;
        }
    }
    return count;
}

console.log(countCode("cozexxcope"));
