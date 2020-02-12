
var todaysDate = document.querySelector("#todaysDate");
const saveBtn = document.querySelectorAll(".saveBtn");


var now = moment();

// set todaysDate and format 
todaysDate = now.format("dddd, MMMM Do"); 
// append todaysDate 
$("#todaysDate").append(todaysDate);

var currentHour = now.hour();
console.log(currentHour)


    // get inputs
    const inputs = $('.form-control')

    // loop through all inputs
    for (let i = 0; i < inputs.length; i++) {

        // Get everything that contains a data-hour attribute
        var dataId = ($(inputs[i]).siblings(".input-group-text").attr("data-hour"));
        console.log(dataId);

        if(dataId < currentHour){
            
            $(".input-group-text").addClass("past");
        } else if (dataId === currentHour){
            
            $(".input-group-text").addClass("present");
        } else if (dataId > currentHour){
           
            $(".input-group-text").addClass("future");
        }
    }



function saveText () {

    if (inputs !== ""){
        
        const hour = {
            hour9: $("#hour9").val(),
            hour10: $("#hour10").val(),
            hour11: $("#hour11").val(),
            hour12: $("#hour12").val(),
            hour13: $("#hour13").val(),
            hour14: $("#hour14").val(),
            hour15: $("#hour15").val(),
            hour16: $("#hour16").val(),
            hour17: $("#hour17").val()
        };

        console.log(hour)

        // sets the hour key and stringifies the object hour
        localStorage.setItem("hour", JSON.stringify(hour));
    }
}

// gets the hour from localstorage and parse it into an object
var hourEvent = JSON.parse(localStorage.getItem("hour")) || {};

console.log(hourEvent)

// value of each input to local storage value 
$("#hour10").val(hourEvent.hour10);
$("#hour11").val(hourEvent.hour11);
$("#hour12").val(hourEvent.hour12);
$("#hour13").val(hourEvent.hour13);
$("#hour14").val(hourEvent.hour14);
$("#hour15").val(hourEvent.hour15);
$("#hour16").val(hourEvent.hour16);
$("#hour17").val(hourEvent.hour17);

// click event 
$(".saveBtn").on("click", saveText);
