//Author: Maia Washburn
//Date: 18 October 2024
//lab 13

function fizzBuzzBoom() {
  var answer =''
  var max = parseInt(document.getElementById('max').value, 10);
  for (var i=0; i<=max; i++) {
    if (i%15==0 && i%21==0){
      console.log("FizzBuzzBoom!");
    }
    else if (i%15==0){
      $("#output").append('<div class="text"><p>' + "FizzBuzz!" + '</p></div>');
    }
    else if (i%21==0){
      $("#output").append('<div class="text"><p>' + "FizzBoom!" + '</p></div>');
    }
    else if (i%35==0){
      $("#output").append('<div class="text"><p>' + "FizzBuzz!" + '</p></div>');
    }
    else if (i%3==0){
      $("#output").append('<div class="text"><p>' + "Fizz!" + '</p></div>');
    }
    else if (i%5==0){
      $("#output").append('<div class="text"><p>' + "Buzz!" + '</p></div>');
    }
    else if (i%7==0){
      $("#output").append('<div class="text"><p>' + "Boom!" + '</p></div>');
    }
    else{
      $("#output").append('<div class"text"><p>' + i + '</p></div>');
      console.log("FizzBuzzBoom!");
    }
    
  }
}

$("#submit").click(function(){
  fizzBuzzBoom();
})