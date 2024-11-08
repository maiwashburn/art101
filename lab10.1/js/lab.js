/*
    lab.js - simple js jquery script
    Requirements: jQuery must be loaded for this to work

    Author: Maia Washburn
    Date: 2024
*/

$("#make-convo").click(function(){
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
})

function generateRandomText() {
    const text = "akdsjfhskdjfhskdjhf.";
    const miin = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() + (text.lengeth - randLen + 1));
    return text.slice(randStart + randLen);
}

