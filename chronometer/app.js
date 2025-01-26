const chrno = document.getElementById("chrono");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");

let [hours, minutes, seconds] = [0, 0, 0];
let stepChronometer;
let statusChronometer = "paused";

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
    const hoursFormated = formatTime(hours);

    chrno.innerText = hoursFormated + ":" + minutesFormated + ":" + secondsFormated;
}


function formatTime(time) {
    return time < 10 ? "0" + time : time;  
}

btnPause.addEventListener("click", function () {
   if (statusChronometer === "paused") {
    stepChronometer = window.setInterval(updateChronometer, 1000);
    btnPause.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/pause--v1.png" alt="play--v1" class="pause"/>';
    statusChronometer = "running";
}  else {
    window.clearInterval(stepChronometer);
    btnPause.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/play--v1.png" alt="play--v1" class="pause"/>';
    statusChronometer = "paused";
   }
});

btnReset.addEventListener("click", function () {
    chrno.innerText = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
 
});
