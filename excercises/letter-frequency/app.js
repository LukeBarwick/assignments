// var phrase = 'slimy smelly solution';
// for(var i; i < phrase.length; i++){
//     var dups = ""
//     var frequency = []
//     if (phrase[i]
//     }
// }
// console.log(dups)

function letterFrequency(str) {
    var freq = {};
    for(var i = 0; i < str.length; i ++) {
        var character = str.charAt([i]);
        if(freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }return freq
}
console.log(letterFrequency('slimy smelly solution'))
