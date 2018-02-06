var first = document.getElementById("firstNumber")
var second = document.getElementById("secondNumber")
var additionButton = document.getElementById("mathButton")

function addInputValues(){
    var addFirst = parseInt((first).value);
    console.log(parseInt((first).value));
    var addSecond = parseInt((second).value);
    console.log(parseInt((second).value));

    var addResult = (addFirst + addSecond);
    console.log(addResult);
    result.innerHTML = addResult;
}

additionButton.addEventListener("click",addInputValues);

var firstS = document.getElementById("firstSubtractionInput")
var secondS = document.getElementById("secondSubtractionInput")
var subtractionButton = document.getElementById("subtractButton")

function subtractValues(){
    var subFirst = parseInt((firstS).value);
    console.log(parseInt((firstS).value));
    var subSecond = parseInt((secondS).value);
    console.log(parseInt((secondS).value));

    var subResult = (subFirst - subSecond);
    console.log(subResult);
    subResults.innerHTML = subResult;
}
subtractButton.addEventListener("click",subtractValues);

var multiFirst = document.getElementById("firstMulti")
var multiSecond = document.getElementById("secondMulti")
var multiplyButton = document.getElementById("multiButton")

function multiplyInputValues(){
    var firstM = parseInt((firstMulti).value);
    console.log(parseInt((firstMulti).value));
    var secondM = parseInt((secondMulti).value);
    console.log(parseInt((secondMulti).value));

    var multiplicationResults = (firstM * secondM);
    console.log(multiplicationResults);
    multiResults.innerHTML = multiplicationResults;
}
multiButton.addEventListener("click",multiplyInputValues);
