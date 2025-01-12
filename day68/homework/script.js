// ?  შექმენით ფუნქცია რომელიც მომხმარებელს შეაყვანინებს ტექსტს, თუ მომხმარებელს ეს ტექსტი უკვე შეყვანილი ექნება მირჩეს პროგრამა 
function checkUserInput() {
    const enteredTexts = new Set();
    while (true) {
        let text = prompt("შეიყვანეთ ტექსტი:");
        if (enteredTexts.has(text)) {
            alert("ეს ტექსტი უკვე შეყვანილი გაქვთ!");
        } else {
            enteredTexts.add(text);
            alert("ტექსტი წარმატებით შეინახა!");
        }
    }
}
checkUserInput();

//? შექმენით პროგრამა რომელიც მომხმარებლის შეტანილი რიხცვს დაუმატებს 
//? ერთ ერთს სანამ მოცემული რიცხვი არ შედგება 0-ებისგან ( პირველი რიცხვუს გარდა ), მაგ: 156–> 200, 5678 —> 6000…
function roundNumberToZeros() {
    let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));
    if (isNaN(number)) {
        alert("შეიყვანეთ სწორი რიცხვი!");
        return;
    }

    let originalNumber = number;

    while (!number.toString().slice(1).split('').every(digit => digit === '0')) {
        number++;
    }

    alert(`რიცხვი ${originalNumber} გახდა ${number}`);
}
roundNumberToZeros();

//?  მომხმარებელს შეაყვანინეთ პაროლი. სანამ სწორ პაროკს არ შეიყვანს (12348765 ), იქამდე გააგრძელეთ კითხვა
function checkPassword() {
    const correctPassword = "12348765";
    let userPassword;
    do {
        userPassword = prompt("შეიყვანეთ პაროლი:");
        if (userPassword !== correctPassword) {
            alert("არასწორი პაროლი, სცადეთ ხელახლა.");
        }
    } while (userPassword !== correctPassword);

    alert("პაროლი სწორია!");
}
checkPassword();
