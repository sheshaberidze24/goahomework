const nameP = document.getElementById('fullname');
const numP = document.getElementById('number-p');
const input = document.getElementById('num-input');
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const mul = document.getElementById('mul');

const userName = prompt('Enter your name: ', 'name');

nameP.textContent = "Fullname: " + userName;

function addNum(a, b) {
    return a + b;
}

function minusNum(a, b) {
    return a - b;
}

function mulNum(a, b) {
    return a * b;
}

function calculate(func) {
    const a = Number(numP.textContent);
    const b = Number(input.value);
    numP.textContent = func(a, b);
    input.value = '';
}

add.onclick = () => calculate(addNum);
minus.onclick = () => calculate(minusNum);
mul.onclick = () => calculate(mulNum);