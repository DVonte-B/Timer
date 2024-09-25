const timerDisplay = document.getElementById('timer-display');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;


function startTimer() {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75)
    }
}

function stopTimer() {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
}

function resetTimer() {
    paused = true;
    clearInterval(intervalId)
     startTime = 0;
     elapsedTime = 0;
     currentTime = 0;
     hrs = 0;
     mins = 0;
     secs = 0;
    timerDisplay.textContent = "00:00:00"
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = addPad(secs);
    mins = addPad(mins);
    hrs = addPad(hrs);

    timerDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function addPad(unit) {
        return (('0') + unit).length > 2 ? unit : '0' + unit
    }
}