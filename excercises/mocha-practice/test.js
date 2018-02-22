const difference = require("./app.js").difference;

const firstLastOver17 = require("./app.js").firstLastOver17;
const firstLastOver1 = require("./app.js").firstLastOver1;
// const sum = require("./main").sum;

const chai = require("chai");
const assert = chai.assert;

const people = [
    {
        firstName: "Jerry",
        lastName: "Gergich",
        age: 52
    },
    {
        firstName: "Leslie",
        lastName: "Knope",
        age: 40
    },
    {
        firstName: "Tommy",
        lastName: "Haverford",
        age: 10
    },
    {
        firstName: "Ronny",
        lastName: "Swanson",
        age: 7
    }
]

describe("Higher order functions", () => {
    it("should return the difference of numbers in an array", () => {
        assert.equal(difference([1, 2]), -1);
        assert.equal(difference([2, 1]), 1);
    });
    it("should return people from array over the age of 1", () => {
        assert.deepEqual(firstLastOver1(people), ["Jerry Gergich", "Leslie Knope", "Tommy Haverford", "Ronny Swanson"]);
    })
})
