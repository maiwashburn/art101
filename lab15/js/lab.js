//Author: Maia Washburn
//Date: 25 Nov 2024
//Lab 15: AJAX


let data= {
    "answer": "yes",
    "forced": false,
    "image": "https://yesno.wtf/assets/yes/0-c44a7789d54cbdcad867fb7845ff03ae.gif"
}

$("#activate").click(function(){
    $("#output").append("<h1>" + data.answer);
    $("#output").append("<img src='" + data.image + "'>");
})
   // $("#output").append("<h1>" + data.answer);
  //  $("#output").append("<img src='" + data.image + "'>");

//console.group("1")

//$("#activate").click(function(){
   // $("#output").append('<h1>' + data.asnwer);
  //  $("#output").append("<img src='" + data.image + "'>")
//});

