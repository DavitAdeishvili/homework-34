function checkPasswordStrength() {
    let password = document.getElementById("password").value;
    let strengthIndicator = document.getElementById("strength-indicator");
    let strength = "";

    let minLength = password.length >= 6;
    let Number = /[0-9]/.test(password);
    let UpperCase = /[A-Z]/.test(password);
    let SpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length >= 10 && UpperCase && Number && SpecialChar) {
        strength = "ძალიან ძლიერი";
    } else if (password.length >= 8 && (Number || UpperCase)) {
        strength = "საშუალო";
    } else if (password.length >= 6) {
        strength = "დაბალი";
    } else {
        strength = "";    }

    strengthIndicator.textContent = strength;
}