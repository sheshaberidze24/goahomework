let interval;
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters.charAt(Math.floor(Math.random() * letters.length));
}
function start() {
    stop();
    interval = setInterval(() => {
        const option = document.querySelector('input[name="option"]:checked').value;
        document.getElementById("output").textContent = option === "number" ? getRandomNumber() : getRandomLetter();
    }, 1000);
}
function stop() {
    clearInterval(interval);
}