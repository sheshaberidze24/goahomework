//// 1
function checkNumber(num) {
    if (num % 2 === 0 && num > 10) {
        console.log("რიცხვი არის ლუწი და 10-ზე მეტი.");
    } else if (num % 2 !== 0 && num < 5) {
        console.log("რიცხვი არის კენტი და 5-ზე ნაკლები.");
    } else if (num > 20 || num < 5) {
        console.log("რიცხვი არის 20-ზე დიდი ან 5-ზე ნაკლები.");
    } else {
        console.log("რიცხვი არ არის არც 10-ზე მეტი და არც 5-ზე ნაკლები.");
    }
}

checkNumber(12); 
checkNumber(3);   
checkNumber(25); 
checkNumber(7);  

//? 2
function checkAge(age, hasParentConsent) {
    if (age >= 18) {
        console.log("თქვენ სრულწლოვანი ხართ");
    } else if (age < 18 && hasParentConsent) {
        console.log("თქვენ შეგიძლიათ გამოიყენოთ ეს სერვისი");
    } else {
        console.log("თქვენ ვერ გამოიყენებთ ამ სერვისს");
    }
}

let age = prompt("გთხოვთ, შეიყვანოთ თქვენი ასაკი:");
age = parseInt(age);  // ასაკის კონვერტაცია რიცხვად

// მშობლის თანხმობის შეკითხვა
let hasParentConsent = confirm("გგონიათ თუ არა, რომ გქონდეთ მშობლის თანხმობა?");

checkEligibility(age, hasParentConsent);

//!
function checkTriangle(a, b, c) {
    // შევამოწმოთ, რომ ყველა გვერდი დადებითია
    if (a <= 0 || b <= 0 || c <= 0) {
        console.log("ყველა გვერდი უნდა იყოს დადებითი.");
    } else if (a + b > c && a + c > b && b + c > a) {
        // შევამოწმოთ სამკუთხედის პირობები
        console.log("ეს სამი გვერდი შეიძლება წარმოადგენდეს სამკუთხედს.");
    } else {
        console.log("ეს სამი გვერდი არ შეიძლება წარმოადგენდეს სამკუთხედს.");
    }
}

// მომხმარებლის მიერ შევსებული გვერდები
let a = parseFloat(prompt("გთხოვთ, შეიყვანოთ პირველი გვერდის სიგრძე:"));
let b = parseFloat(prompt("გთხოვთ, შეიყვანოთ მეორე გვერდის სიგრძე:"));
let c = parseFloat(prompt("გთხოვთ, შეიყვანოთ მესამე გვერდის სიგრძე:"));

checkTriangle(a, b, c);