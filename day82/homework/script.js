let time = 0;
let counter = 1;
let intervalId = null;

function startTimer() {
    time = parseInt(document.getElementById("timeInput").value) || 0;
    if (time > 0 && !intervalId) {
        counter = 1;
        document.getElementById("counter").innerText = counter;
        intervalId = setInterval(() => {
            if (counter < time) {
                counter++;
                document.getElementById("counter").innerText = counter;
            } else {
                clearInterval(intervalId);
                intervalId = null;
                document.getElementById("counter").innerText = "Time's up";
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}