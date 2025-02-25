function setAlarm(employed, vacation) {
    return employed && !vacation;
}
//? codewars
function trafficLight(current) {
    if (current === "green") {
        return "yellow";
    } else if (current === "yellow") {
        return "red";
    } else if (current === "red") {
        return "green";
    }
}