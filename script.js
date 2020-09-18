// ~*~ Global Variables ~*~

var currentHour = (moment().hour());

var hr = [];

var blockHour;

var scheduleInput;

// 1. Display current time with Moment.js
$("#currentDay").append(moment().format("dddd, MMMM Do h:mm a"));

// 2. Click event to save text area content to local storage
$(".saveBtn").on("click", saveSchedule)

function saveSchedule() {
        // // inside function
        // use jquery to get button value
        // var timeText = $(this).val();
        // localStorage.setItem(timeText, "text")

        //      example
        // localStorage.getItem("hr9")
        // console.log(localStorage.getItem("hr9"))

        const $button = $(this);
        const time = $button.val();
        const text = $button.siblings("textarea").val();

        // localStorage.setItem(time, "textarea")

        localStorage.setItem(time, text);
        // use jquery to grab text from previous sibling / element var timeText = $(this).val(); (not val though, something else)
}

// happens outside of function 
// localStorage.getItem("")
// then put on the page - hook an element using jquery 


// 3. When app opens, display content for each time block from local storage.
// can be done with a loop (better) or by targeting each set block separately
// localstorage.getItem 

// array that holds the hour times from 9 am - 5 pm
var hourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function displaySchedule() {

        for (let i = 0; i < hourArr.length; i++)
                console.log(hourArr[i]);


        // var scheduleInput = document.getElementById("")
}
displaySchedule();

// IDK What this is 
//         localStorage.setItem( 'car', JSON.stringify(car) );
// console.log( JSON.parse( localStorage.getItem( 'car' ) ) );

// 4. Change time block background color depending in the current hour (past = grey , present = red, future = green)

// console.log(moment().hour());

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