function parsePokemon() {
    var data = JSON.parse(xhr.responseText);
    document.getElementById("data").innerHTML = 
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json")

xhr.readystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {


    }
}
