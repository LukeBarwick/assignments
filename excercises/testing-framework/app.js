function assert(actual, expected) {
    if (actual !== expected) {
        throw new Error("Asserted that " + actual + " would equal " + expected);
    } else {
        console.log("Test Passed. Actual: " + actual + ", expected: " + expected);
    }
}

function describe(message, testFunction) {
    console.log("\n" + message);
    try {
        testFunction();
    } catch (err) {
        console.log("Test FAILED: " + err.message);
    }
}

function divide(a, b) {
    return a / b;
}

describe("A division function", function() {
    assert(divide(2, 1), 2)
    assert(divide(8, 4), 2)
    assert(divide(16, 4), 4)
    assert(divide(36, 6), 6)
})

function multiply(a, b) {
    return a * b;
}


describe("A multiplication function", function() {
    assert(multiply(4, 4), 16)
    assert(multiply(6, 6), 36)
    assert(multiply(7, 7), 49)
    assert(multiply(50, 10), 500)
})
