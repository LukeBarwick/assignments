function leastToGreatest(a, b) {
var sorting = leastToGreatest().sort(function(number){
    return a - b
})
}

leastToGreatest([1, 3, 5, 2, 90, 20])
console.log(sorting)
