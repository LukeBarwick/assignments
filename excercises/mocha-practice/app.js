// Given an array of person objects, return an array of first and last names of
// everyone over 17
const firstLastOver17 = (arr) => {
   return arr
       .filter(person => person.age > 17)
       .map(person => `${person.firstName} ${person.lastName}`);
}
const firstLastOver1 = (arr) => {
   return arr
       .filter(person => person.age > 1)
       .map(person => `${person.firstName} ${person.lastName}`);
}
const difference = (nums) => nums.reduce((total, num) => total - num);



module.exports = {
    difference,
    firstLastOver17,
    firstLastOver1

}
