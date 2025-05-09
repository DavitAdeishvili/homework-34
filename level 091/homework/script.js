const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const age = document.getElementById('age');
const submitButton = form.querySelector('input[type="submit"]');

function validateName() {
    let valid = true;
    let errorMsg = '';

    if (fullName.value.length < 3) {
        valid = false;
        errorMsg = 'Name must be at least 3 characters long.';
    } else {
        for (let i = 0; i < fullName.value.length; i++) {
        if (!((fullName.value[i] >= 'A' && fullName.value[i] <= 'Z') || 
            (fullName.value[i] >= 'a' && fullName.value[i] <= 'z'))) {
            valid = false;
                            errorMsg = 'Name must contain only letters.';
                            break;
                        }
                    }
                }

                if (valid) {
                    fullName.style.backgroundColor = "#d4edda";
                    document.getElementById('fullNameError').textContent = '';
                } else {
                    fullName.style.backgroundColor = "#f8d7da";
                    document.getElementById('fullNameError').textContent = errorMsg;
                }
                return valid;
            }

            function validateEmail() {
                let valid = true;
                let errorMsg = '';

                if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1 || email.value.indexOf('@') > email.value.indexOf('.')) {
                    valid = false;
                    errorMsg = 'Email must be in the correct format (example@domain.com).';
                }

                if (valid) {
                    email.style.backgroundColor = "#d4edda";
                    document.getElementById('emailError').textContent = '';
                } else {
                    email.style.backgroundColor = "#f8d7da";
                    document.getElementById('emailError').textContent = errorMsg;
                }
                return valid;
            }

            function validatePassword() {
                let valid = true;
                let errorMsg = '';

                if (password.value.length < 8) {
                    valid = false;
                    errorMsg = 'Password must be at least 8 characters long.';
                } else if (password.value.indexOf(' ') !== -1) {
                    valid = false;
                    errorMsg = 'Password should not contain spaces.';
                } else {
                    let hasUppercase = false;
                    let hasNumber = false;
                    let hasSpecial = false;
                    for (let i = 0; i < password.value.length; i++) {
                        if (password.value[i] >= 'A' && password.value[i] <= 'Z') {
                            hasUppercase = true;
                        }
                        if (password.value[i] >= '0' && password.value[i] <= '9') {
                            hasNumber = true;
                        }
                        if ("!@#$%^&*".indexOf(password.value[i]) !== -1) {
                            hasSpecial = true;
                        }
                    }

                    if (!hasUppercase || !hasNumber || !hasSpecial) {
                        valid = false;
                        errorMsg = 'Password must contain at least one uppercase letter, one number, and one special character.';
                    }
                }

                if (valid) {
                    password.style.backgroundColor = "#d4edda";
                    document.getElementById('passwordError').textContent = '';
                } else {
                    password.style.backgroundColor = "#f8d7da";
                    document.getElementById('passwordError').textContent = errorMsg;
                }
                return valid;
            }

            function validateConfirmPassword() {
                let valid = true;

                if (confirmPassword.value !== password.value) {
                    valid = false;
                    document.getElementById('confirmPasswordError').textContent = 'Passwords must match.';
                    confirmPassword.style.backgroundColor = "#f8d7da";
                } else {
                    confirmPassword.style.backgroundColor = "#d4edda";
                    document.getElementById('confirmPasswordError').textContent = '';
                }

                return valid;
            }

            function validateAge() {
                let valid = true;
                let errorMsg = '';

                if (age.value < 18) {
                    valid = false;
                    errorMsg = 'Age must be 18 or older.';
                }

                if (valid) {
                    age.style.backgroundColor = "#d4edda";
                    document.getElementById('ageError').textContent = '';
                } else {
                    age.style.backgroundColor = "#f8d7da";
                    document.getElementById('ageError').textContent = errorMsg;
                }
                return valid;
            }

            fullName.addEventListener('keyup', validateName);
            email.addEventListener('keyup', validateEmail);
            password.addEventListener('keyup', validatePassword);
            confirmPassword.addEventListener('keyup', validateConfirmPassword);
            age.addEventListener('keyup', validateAge);

            form.addEventListener('input', function () {
                if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword() && validateAge()) {
                    submitButton.disabled = false;
                } else {
                    submitButton.disabled = true;
                }
            });