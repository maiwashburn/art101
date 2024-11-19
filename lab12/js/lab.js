//author: maia washburn
//date: 14 october 2024
//lab 12

//return gryffindor, ravenclaw, slytherin, and hufflepuff

function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mode == 3) {
        return "Hufflepuff"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})


function fizzBuzzBoom(maxNums, factorObj) {
    for (var num=0; num<maxNums; num++) {
        var outputStr = "Fizz";
        for (var factor in factorObj) {
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
  }

  function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
  }

  document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You must provide a maximum");
    }
  })