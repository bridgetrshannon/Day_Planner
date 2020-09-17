// 1. Display current time with Moment.js
// date and time logged to the console, not on the page though
// console.log(moment().format("dddd, MMMM Do"));
// hook to a div in html
$("#currentDay").append(moment().format("dddd, MMMM Do h:mm:ss a"))

// 2. Click event to save text area content to local storage
// ^^^^ function
// localstorage.setItem

// 3. When app opens, display content for each time block from local storage.
// can be done with a loop (better) or by targeting each set block separately
// localstorage.getItem 

// 4. Change time block background color depending in the current hour (past = grey , present = red, future = green)
console.log(moment().hour());
// use this to create an if else statement if at certain time then this styling happens, if past or future then styling happens

// create rows that have 3 columns (bootstrap)
        //  2 for time 8 for task 2 for save button
        // Use classes and ids in the css sheet - already set for us 
// 8 hours 9 am - 5 pm, 
