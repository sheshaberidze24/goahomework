// 1)

function minutesToSeconds(minute) {
    return minute * 60;
}

console.log(minutesToSeconds(2));

// 2)

function equals(num1, num2, num3) {
    return (num1 + num2) * num3;
}

console.log(equals(5, 10, 2));

// 3)

function numbersComparison(num1, num2) {
    return num1 > num2;
}

// 4)
const p = document.getElementById('my-p');

function printElement(element) {
    console.log("Element:", element);
}

printElement

function changeTextContent(element, string) {
    element.textContent = string;
}

changeTextContent(p, "Hello Nika");