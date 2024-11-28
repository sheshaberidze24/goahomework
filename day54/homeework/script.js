function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    let result;
    if (isNaN(num1) || isNaN(num2)) {
        result = "გთხოვთ, სწორად შეიყვანოთ რიცხვები.";
    } else if (operation === "მიმატება") {
        result = num1 + num2;
    } else if (operation === "გამოკლება") {
        result = num1 - num2;
    } else {
        result = "არასწორი ოპერაცია.";
    }

    document.getElementById("result").innerText = "შედეგი: " + result;
}