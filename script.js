// ~*~ Global Variables ~*~

var currentHour = (moment().hour());

var hr = [];

var blockHour;

// Only shows 9 in the console
// var hr = $(".hr").text()
// console.log(parseInt(hr))

// 1. Display current time with Moment.js
$("#currentDay").append(moment().format("dddd, MMMM Do h:mm a"));

// 2. Click event to save text area content to local storage
function saveSchedule() {
        localstorage.setItem
        // event.on("click", save)
}

// 3. When app opens, display content for each time block from local storage.
// can be done with a loop (better) or by targeting each set block separately
// localstorage.getItem 

// array that holds the hour times from 9 am - 5 pm
var blockHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function displaySchedule() {

        for (let i = 0; i < blockHour.length; i++)
                console.log(blockHour[i]);
}
displaySchedule();

// 4. Change time block background color depending in the current hour (past = grey , present = red, future = green)

// console.log(moment().hour());

function timeCheck() {
        $(".hour").each(function () {
                var blockHour = parseInt($(this).attr("id"))

                console.log(blockHour)
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


// // Need help with this 
// var blockHour = {
//         x: y,
//         function() {
//                 console.log(this.x)

//         }
// };