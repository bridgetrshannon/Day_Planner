// ~*~ Global Variables ~*~

var currentHour;

console.log(moment().hour());

var hr = [];

// Only shows 9 in the console
// var hr = $(".hr").text()
// console.log(parseInt(hr))

// 1. Display current time with Moment.js
$("#currentDay").append(moment().format("dddd, MMMM Do h:mm:ss a"));

// 2. Click event to save text area content to local storage
function saveSchedule() {
        // localstorage.setItem
        // event.on("click", save)
}

// 3. When app opens, display content for each time block from local storage.
// can be done with a loop (better) or by targeting each set block separately
// localstorage.getItem 

// array that holds the hour times from 9 am - 5 pm
var hourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function displaySchedule() {

        for (let i = 0; i < hourArr.length; i++)
                console.log(hourArr[i]);

        // 4. Change time block background color depending in the current hour (past = grey , present = red, future = green)

        // console.log(moment().hour());
}

// function timeCheck() {

//         if (hr.value === (moment().hour())) {

//         }.setAttribute(style.displayred)

//         if else (hr.value < (moment().hour()))
//         {

//         }.setAttribute(style.displaygreen)

//         else (hr.value > (moment().hour()))
//         {

//         }.setAttribute(style.displaygrey)

// }