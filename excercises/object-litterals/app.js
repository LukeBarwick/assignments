// function collectAnimals(operator, ...animals) {
//     if (operator === "add") {
//         console.log([...animals])
//     }
// }
//
// collectAnimals("add", "dog", "cat", "mouse", "jackolope", "platypus");
//
//
//
//
//
// const fruit = ["apple", "pear"];
// const sweets = ["cake", "pie"];
// const vegetables = ["carrit"];
//
// const food = {
//     fruit,
//     sweets,
//     vegetables
// }
// function combineAnimals() {
//
// }
//
// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];
//
// combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals);

function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
console.log(product())

function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
