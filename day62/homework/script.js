function validateText(inputText) {
    let hasError = false;
    let errorIndices = [];

    // რეგულარული გამოხატულება რიცხვებისა და სიმბოლოების შესამოწმებლად
    const regex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;

    // ტექსტში რიცხვებისა და სიმბოლოების ინდექსების ძიება
    for (let i = 0; i < inputText.length; i++) {
        if (regex.test(inputText[i])) {
            hasError = true;
            errorIndices.push(i);
        }
    }

    // შედეგის გამოყვანა ვალიდაციის მიხედვით
    if (hasError) {
        console.log("შეცდომა: აღმოჩენილია დაუშვებელი სიმბოლოები.");
        console.log("არასწორი სიმბოლოები ნაპოვნია ინდექსებზე:", errorIndices);
    } else {
        console.log("ოპერაცია წარმატებით შესრულდა");
    }
}

// მომხმარებლისგან ტექსტის მოთხოვნა
const userInput = prompt("გთხოვთ, შეიყვანეთ ტექსტი:");

// ტექსტის ვალიდაცია
validateText(userInput);
