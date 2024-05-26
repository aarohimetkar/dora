document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var email = document.getElementById('email').value;
    var errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (password.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long.';
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        event.preventDefault();
        return;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Invalid email address!';
        event.preventDefault();
    }
});
