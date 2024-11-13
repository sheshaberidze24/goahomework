// task 1
function myFunc(){
    console.log("hello")
}

myFunc()

// task 2
function myFunc1(){
    return "hello" + name
}

console.log(myFunc1("nika"))

// tast 3
function myFunc(num){
    return num + 1
}

console.log(myFunc(50))

// task 4

function negative(num){
    return num * -1
}

console.log(negative(42))

// task 5 
function changeNum(a) {
    return -a + 1
}
console.log("the result:" + changeNum(5))


function ChangeStyle(id) {
    let text = document.getElementById(id);
    text.style.backgroundColor = "teal";
    text.style.color = "cornsilk";
    text.style.height = "30vh"
}