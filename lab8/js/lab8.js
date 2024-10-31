// index.js - Lab 8: Anon Functions and Callbacks
// Author: Maia Washburn
// Date: October 29, 2024
// 


//

//
function addArray(x, y) {
    return (x + 4);
}

//test fumction
console.log("Add 2 and 4", addArray(2, 4));

array = [2, 5, 7, 4, 9]
console.log("My array", array);

var result = array.map(addArray);
console.log("Test adding 4 to array:", result);

var result = array.map(function(x, y) {
    return x * 5;
})

console.log("Multiplied by 5 of array:", result);

//map results data
var mapResults = "Your map results here";

//use jquery to select the elements by its ID and set the HTMl content
$("#output").html(mapResults);
