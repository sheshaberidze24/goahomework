//?1
const paragraph = document.getElementById("myParagraph");
paragraph.textContent = "i love goa";
paragraph.style.color = "blue";


const imageElement = document.getElementById("myImage");
const changeButton = document.getElementById("changeImage");
const resetButton = document.getElementById("resetImage");

//2
const initialImage = "Wqueen.png"; 
const newImage = "Wrook.png"; 

changeButton.addEventListener("click", () => {
    imageElement.src = newImage;
});

resetButton.addEventListener("click", () => {
    imageElement.src = initialImage;
});

//!3
let age = parseInt(prompt("შემოიტანეთ თქვენი ასაკი:"));
let experience = parseInt(prompt("შემოიტანეთ თქვენი სამუშაო გამოცდილება (წლებში):"));

// შემოწმება და შედეგის დაბეჭდვა
if (age > 25 && experience >= 5) {
    console.log("თქვენ მიღებული ხართ სამსახურში.");
} else {
    console.log("თქვენ არ ხართ მიღებული სამსახურში.");
}