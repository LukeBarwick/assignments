const name = 'John'
const age = 101
const pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++) {
    const pet = {
        type: pets[i]
    }
    if (pets[i] === "cat") {
        const name = "fluffy"
    } else {
        const name = "spot"
    }
    pet.name = name
    petObjects.push(pet)
}

const vegetables = carrots.map(carrot => ({type: "carrot", name: carrot})

const friends = people.filter( person => !!person.friendly )


const doMathSum = (a, b) => a + b
console.log(doMathSum(2, 2))
const produceProduct = (a, b) => a * b


const returnString = (firstName = "Jane", lastName = "Doe", age = 100) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
}
console.log(returnString)
