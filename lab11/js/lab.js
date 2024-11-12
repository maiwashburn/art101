// Simple JavaScript/jQuery scripts gets a value from an input field and outputs a modified version
//Requirements: jQuery must be loaded for this script to work.
//Author: Maia Washburn
//Date: 2024

//Sort the characters of a string in alphabeical order
function sortString(inputString) {
    //we have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

//click listener for button
$("#submit").click(function(){
    //get value of input feilds
    console.log($('#user-name').val());
    const userName=$("#user-name").val();
    //modify user name and sort it
    userNameSorted=sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});