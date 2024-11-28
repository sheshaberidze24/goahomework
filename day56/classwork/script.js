const validChars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-.";

function validatePassword(password) {
  for (let i = 0; i < password.length; i++) {
    let isValidChar = false;

    // ვამოწმებთ, მოცემული სიმბოლო ვალიდურია თუ არა
    for (let j = 0; j < validChars.length; j++) {
      if (password[i] === validChars[j]) {
        isValidChar = true;
        break;
      }
    }

    // თუ სიმბოლო ვალიდური არ არის
    if (!isValidChar) {
      message.style.color = "#8b1c00";
      message.textContent =
        "Password must only contain numbers, letters, -, . or  ";
      return;
    }
  }

  // თუ პაროლი ვალიდურია
  message.style.color = "#eee8a9";
  message.textContent = "Password Saved";
}