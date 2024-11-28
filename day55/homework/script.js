document.getElementById('validate-btn').addEventListener('click', validatePassword);
document.getElementById('generate-btn').addEventListener('click', generateRandomPassword);

function validatePassword() {
    const password = document.getElementById('password-input').value;
    const messageElement = document.getElementById('validation-message');

    // Validation rules
    if (password.length < 4 || password.length > 12) {
        messageElement.textContent = "Password must be between 4 and 12 characters.";
        messageElement.className = "invalid";
        return;
    }
    if (/\s/.test(password)) {
        messageElement.textContent = "Password must not contain spaces.";
        messageElement.className = "invalid";
        return;
    }
    if (!/^[a-zA-Z0-9\-._]+$/.test(password)) {
        messageElement.textContent = "Password can only contain letters, numbers, '-', '.' or '_'.";
        messageElement.className = "invalid";
        return;
    }

    messageElement.textContent = "Password is valid!";
    messageElement.className = "valid";
}

function generateRandomPassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._";
    const length = Math.floor(Math.random() * (12 - 4 + 1)) + 4; // Random length between 4 and 12
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById('password-input').value = password;
    document.getElementById('validation-message').textContent = "";
}
