// ~*~ Global Variables ~*~

var currentHour = (moment().hour());
var hr = [];
var blockHour;

// 1. Display current time with Moment.js
$("#currentDay").append(moment().format("dddd, MMMM Do h:mm a"));

// 2. Click event to save text area content to local storage
$(".saveBtn").on("click", saveSchedule)

function saveSchedule() {

        const $button = $(this);
        const hour = $button.val();
        const scheduleInput = $button.siblings("textarea").val();

        localStorage.setItem(hour, scheduleInput);
}

// 3. When app opens, display content for each time block from local storage.
// can be done with a loop (better) or by targeting each set block separately

function displaySchedule() {

        var nine_am = localStorage.getItem("9am");
        $('#9').val(nine_am);

        var ten_am = localStorage.getItem("10am");
        $('#10').val(ten_am);

        var eleven_am = localStorage.getItem("11am");
        $('#11').val(eleven_am);

        var twelve_pm = localStorage.getItem("12pm");
        $('#12').val(twelve_pm);

        var one_pm = localStorage.getItem("1pm");
        $('#13').val(one_pm);

        var two_pm = localStorage.getItem("2pm");
        $('#14').val(two_pm);

        var three_pm = localStorage.getItem("3pm");
        $('#15').val(three_pm);

        var four_pm = localStorage.getItem("4pm");
        $('#16').val(four_pm);

        var five_pm = localStorage.getItem("5pm");
        $('#17').val(five_pm);
}
displaySchedule();

// 4. Change time block background color depending in the current hour (past = grey , present = red, future = green)

function timeCheck() {
        $(".hour").each(function () {
                var blockHour = parseInt($(this).attr("id"))

                // console.log(blockHour)
                // check if we've moved past this time
                if (blockHour < currentHour) {
                        $(this).addClass("past");
                }
                else if (blockHour === currentHour) {
                        $(this).removeClass("past");
                        $(this).addClass("present");

                }
                else {
                        $(this).removeClass("past");
                        $(this).removeClass("present");
                        $(this).addClass("future");
                }
        });
}
timeCheck();