// ~*~ Global Variables ~*~

var currentHour = (moment().hour());

var hr = [];

var blockHour;

// var scheduleInput;

// 1. Display current time with Moment.js
$("#currentDay").append(moment().format("dddd, MMMM Do h:mm a"));

// 2. Click event to save text area content to local storage
$(".saveBtn").on("click", saveSchedule)

function saveSchedule() {

        const $button = $(this);
        const time = $button.val();
        const text = $button.siblings("textarea").val();

        localStorage.setItem(time, text);

        // use jquery to grab text from previous sibling / element var timeText = $(this).val(); (not val though, something else)
}

// 3. When app opens, display content for each time block from local storage.
// can be done with a loop (better) or by targeting each set block separately

function displaySchedule() {

        // for (let i = 0; i < hourArr.length; i++)
        //         console.log(hourArr[i]);

        // localStorage.getItem(time, text);
        // append
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