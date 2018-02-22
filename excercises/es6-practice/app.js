const vegetables = carrots.map(function(carrot){
    return {type: "carrot", name: carrot}
})



const vegetables = carrots.map((carrot) => {
    return {type: "carrot", name: carrot}
})

write a functions that takes a firstName, a lastName, an age and returns a string like the following: 
Hi Kat Stark, how does it feel to be 40?

firstName should default to "Jane" 
lastName should default to "Doe" 
age should default to 100
function