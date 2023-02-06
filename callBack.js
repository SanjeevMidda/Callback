// Researched on mdn callback functions, arrow functions, and event listeners
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

//2
let counter = 1;
let myInterval;

//3
function startCounter(){
    myInterval = setInterval(() => {
        console.log(counter++); 
    }, 1000);
}

//4
function stopCounter() {
    clearInterval(myInterval);
}

//5
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

//6
startButton.addEventListener("click", startCounter);

stopButton.addEventListener("click", stopCounter);

/*
    Thinking
        Note: there is a "support file" folder in this task folder. It was originally here, so I have just left it there.
        
        1. This program prints numbers starting from 1 upwards to the console once the start button is clicked. When the stop button is clicked the numbers stop printing to the console.

        2. We have two variables defined here: "counter", which is the starting point from which we start printing numbers from, "myInterval", this holds our setInterval function.

        3. A function called "startCounter" is created. Inside we find our startInterval, stored in a variable named "myInterval". An arrow function has been used inside our interval as it is more concise and easier to read. Our counter variable will be updated every second and printed out to the console every second too. 

        4. A second function, "stopCounter", has been created. We will pass the value contained in "myInterval", which is our interval, into clearInterval when the time comes we want to stop our interval continuing to run.

        5. Two variables created, "startButton", and "stopButton". We get their respective button id's from our "callback.html" document and store them for reference later.

        6. We add an event listener, one each to our variable "startButton" and "startButton". Once clicked, their respective functions will run. Either to start or stop.
*/