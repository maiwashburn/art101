// index.js - Lab 7: Functions
// Author: Maia Washburn
// Date: October 28, 2024


//sortUserName - a function that takes user input and sorts the letters
function sortUserName() {
    var userName = window.prompt("Hi! Please tell me your name so I can fix it...");
    console.log("userName =", userName);

    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);

    return nameSorted;
}

document.writeln("Hey! I fixed your name. It's now: ",
    sortUserName(), "</br>");