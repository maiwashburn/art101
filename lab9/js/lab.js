//lab.js-Lab 9, creating jQuery script to make buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
//Author: Maia Washburn
//Date: 2024




//add button to challenge section 
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

//add a click listener to the challenge button
$(document).ready(function(){
$("#challenge").click(function(){
    $("#challenge").css({
        'background-color': 'pink'
    });
});
});


//add button to problem section
$("#problem").append("<button id='button-problem'>Change it up?</button>");
//add a click listener to problem section 

$(document).ready(function(){
    $("#problem").click(function(){
        $("#problem").css({
            'background-color': 'white',
            'color': 'gray'
        });
    });
    });


//add button to reflection section 
$("#reflection").append("<button id='button-reflection'>Make me blue?</button>");
//add click listener to reflection section 

$(document).ready(function(){
    $("#reflection").click(function(){
        $("#reflection").css({
            'background-color': 'teal'
        });
    });
    });



 $("#results").append("<button id='button-results'>How about something different?</button>");
    //add click listener to reflection section 
    
    $(document).ready(function(){
        $("#results").click(function(){
            $("#results").css({
                'background-color': 'purple',
                'color': 'lavender',
                'border': 'dotted 20px orange'
            });
        });
        });
    