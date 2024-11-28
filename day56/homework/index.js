function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const termsChecked = document.getElementById('terms').checked;

    if (!email || !validatePassword(password) || !termsChecked) {
        alert("Please fill all fields correctly!");
        return;
    }

    if (confirm("Would you like to enable dark mode?")) {
        localStorage.setItem('darkMode', true);
    } else {
        localStorage.setItem('darkMode', false);
    }

    window.location.href = "main.html";
}