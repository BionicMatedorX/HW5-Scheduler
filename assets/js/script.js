
function setTime() {

    var timerInterval = setInterval(function() {
        todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
        $("#currentDay").text(todaysDate);
    }, 1000);
}

setTime()


$(document).ready(function () {

    // we are displaying the current day & time
    
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    
    // assign the saveBtn a click listener for time stamp

    $(".saveBtn").on("click", function () {

        // get values

        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // set items into local storage

        localStorage.setItem(time, text);
    })

    // here we are loading any saved data from LocalStorage and doing this for each hour created

    $("#hour9 .description").val(localStorage.getItem("hour9"));

    $("#hour10 .description").val(localStorage.getItem("hour10"));

    $("#hour11 .description").val(localStorage.getItem("hour11"));

    $("#hour12 .description").val(localStorage.getItem("hour12"));

    $("#hour13 .description").val(localStorage.getItem("hour13"));

    $("#hour14 .description").val(localStorage.getItem("hour14"));

    $("#hour15 .description").val(localStorage.getItem("hour15"));

    $("#hour16 .description").val(localStorage.getItem("hour16"));

    $("#hour17 .description").val(localStorage.getItem("hour17"));


    function hourTracker() {

        // getting the current number of hours

        var currentHour = moment().hour();

        // looping over time blocks

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            // checking if we've moved past this time

            if (blockHour < currentHour) {
                
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})