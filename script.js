document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('submit-btn').addEventListener('click', handleSubmit);

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const successMessage = document.getElementById('success-message');

    if (email.length <= 3 || !email.includes('@') || !email.includes('.')) {
        emailError.textContent = "Make sure email is more than 3 characters and has @ and a.";
        successMessage.style.display = 'none';
    } else {
        emailError.textContent = "";
        checkValidation();
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');
    const successMessage = document.getElementById('success-message');

    if (password.length <= 8) {
        passwordError.textContent = "Make sure password is more than 8 characters.";
        successMessage.style.display = 'none';
    } else {
        passwordError.textContent = "";
        checkValidation();
    }
}

function checkValidation() {
    const emailError = document.getElementById('email-error').textContent;
    const passwordError = document.getElementById('password-error').textContent;
    const successMessage = document.getElementById('success-message');

    if (emailError === "" && passwordError === "") {
        successMessage.textContent = "All good to go!";
        successMessage.style.display = 'block';
    }
}

function handleSubmit() {
    const emailError = document.getElementById('email-error').textContent;
    const passwordError = document.getElementById('password-error').textContent;

    if (emailError === "" && passwordError === "") {
        if (confirm("Are you sure you want to submit?")) {
            alert("Successful signup!");
        } else {
            document.getElementById('signup-form').reset();
            document.getElementById('success-message').style.display = 'none';
        }
    }
}