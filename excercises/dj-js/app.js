var box = document.getElementById("box");

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "Blue"
})
box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "Red"
})
box.addEventListener("mouseup", function(){
    box.style.backgroundColor = "Yellow"
})
box.addEventListener("dblclick", function(){
    box.style.backgroundColor = "Green"
})
box.addEventListener("wheel", function(){
    box.style.backgroundColor = "Orange"
})
document.addEventListener("keydown",function(e){
    var x = e.keyCode;
    if (x === 66){
    box.style.backgroundColor = "Blue" }
})
document.addEventListener("keydown",function(e){
    var x = e.keyCode;
    if( x === 79){
    box.style.backgroundColor = "Orange"}
})
document.addEventListener("keydown",function(e){
    var x = e.keyCode;
    if (x === 71){
    box.style.backgroundColor = "Green"}
})
