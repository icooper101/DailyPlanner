$(document).ready(function() {
    // Button Clicks
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save in local storage
        localStorage.setItem(time, value);

    });

    function hourUpdater() {
        var currentHour = moment().hours();

        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            if (blockHour < currentHour){
                $(this).addClass("past");
            }

            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future")

            }

        });
    }

    hourUpdater ();

    var interval = setInterval(hourUpdater, 15000);

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $('.saveBtn').on('click', function(){
        console.log(this)
    })

}
// add current day and date with moments to #currentDay

//     function readFromLocalStorage ()

//     <!-- this is to look for anything saved previously in local storage -->
//         use for loop
//             - read value from time property
//             - assign as text back in element (using its class (.description) and id (specific to each hour)
//             - check current hour vs time slot (to determine color of text area: gray, red or white)
//                 - assign proper class (.past .present .future) based on comparison to current hour (<,>, === or <=, >=, ===)

//     function writeToLocalStorage ()

//     <!-- this is to save a value from the text area to local storage, using the hour as the key when save button is clicked -->
//         add click event to save button class to run function
//             - read text from text area (class = "description", should be parent of save button)
//             - read schedule hour
//             - trim text, trim schedule hour
//             - send to local storage
//     call readFromLocalStorage(); 