//Author: Maia Washburn
//Date: December 2, 2024
//Lab 16 - JSON and API

let data = {
        "month": "Month: 12",
        "num": 3019,
        "link": "",
        "year": "Year: 2024",
        "day": "Day: 2",
        "news": "",
        //"safe_title": "Advent Calendar Advent Calendar",
        "transcript": "",
        "alt": "The growth rate of items per day may may seem absurd, but it's actually much less than the acceleration in the 12 Days of Christmas song.",
        "img": "https://imgs.xkcd.com/comics/advent_calendar_advent_calendar.png",
        "title": "Title: Advent Calendar Advent Calendar",
        
}

$("#comic").click(function(){
    $("#output").append("<h1>" + data.month);
    $("#output").append("<h1>" + data.num);
    $("#output").append("<h1>" + data.link);
    $("#output").append("<h1>" + data.year);
    $("#output").append("<h1>" + data.news);
    $("#output").append("<h1>" + data.safe_title);
    $("#output").append("<h1>" + data.transcript);
    $("#output").append("<h1>" + data.alt);
    $("#output").append("<h1>" + data.title);
    $("#output").append("<h1>" + data.day);
    $("#output").append("<img src='" + data.img + "'>");

})










// Using the core $.ajax() method
var comicObj = 
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://xkcd.com/info.0.json",
        // The data to send (will be converted to a query string)
        data: {     
            // here is where any data required by the api 
            //   goes (check the api docs)
                month: "12",
                num: 3019,
                link: "",
                year: "2024",
                new: "",
                safe_title: "Advent Calendar Advent Calendar",
                transcript: "",
                alt: "The growth rate of items per day may may seem absurd, but it's actually much less than the acceleration in the 12 Days of Christmas song.",
                img: "https://imgs.xkcd.com/comics/advent_calendar_advent_calendar.png",
                title: "Advent Calendar Advent Calendar",
                day: "2"
            },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            // do stuff
            console.log(data);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })