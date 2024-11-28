function calculator() {
    // მომხმარებელს ვთხოვთ ორი რიცხვის შეყვანას
    const num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
    const num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));

    // ვამოწმებთ შეყვანილი რიცხვების სისწორეს
    if (isNaN(num1) || isNaN(num2)) {
        alert("გთხოვთ, შეიყვანეთ სწორი რიცხვები.");
        return;
    }

    // მომხმარებელს ვთავაზობთ ოპერაციის არჩევას
    const operation = prompt("აირჩიეთ ოპერაცია:\n1. მიმატება\n2. გამოკლება");

    let result;
    if (operation === "1") {
        result = num1 + num2;
        alert(`შედეგი: ${num1} + ${num2} = ${result}`);
    } else if (operation === "2") {
        result = num1 - num2;
        alert(`შედეგი: ${num1} - ${num2} = ${result}`);
    } else {
        alert("არასწორი არჩევანი. გთხოვთ, აირჩიოთ 1 ან 2.");
    }
}

calculator();


function calculate() {
    // ვიღებთ მომხმარებლის მიერ შეყვანილ მონაცემებს
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    // შედეგის გამოსათვლელად ვამოწმებთ ოპერაციას
    let result;
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else {
        result = "არასწორი ოპერაცია!";
    }

    // შედეგის ჩვენება
    document.getElementById('result').textContent = `შედეგი: ${result}`;
}