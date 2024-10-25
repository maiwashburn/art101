// index.js - Lab 6: Arrays and Objects
// Author: Maia Washburn
// Date: October 24, 2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

//Define Variables
myTransport = ["Toyota" ,  "Bus" ,  "Bike"];

// Create object for main ride
myMainRide = {
  make: "Toyota",
  model: "4Runner",
  color: "White",
  year: 1996,
  age: function() {
    return 2024 - this.year;
  }
}

//output
document.writeln("Make: " + myTransport + "</br>");

//write object to the document
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
