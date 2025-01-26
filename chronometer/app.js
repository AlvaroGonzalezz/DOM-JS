const chrno = document.getElementById("chrono");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");

let [hours, minutes, seconds] = [0, 0, 0];
let stepChronometer;
let status = "paused";

function updateChronometer() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    const secondsFormated = formatTime(seconds);
    const minutesFormated = formatTime(minutes);
    const hoursormated = formatTime(hours);
}


function formatTime(time) {
    return time < 10 ? "0" + time : time;  
}
