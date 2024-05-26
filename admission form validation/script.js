document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    if (!validateEmail(email.value)) {
        showError(email, emailError, 'Please enter a valid email address.');
    } else {
        clearError(email, emailError);
        alert('Form submitted!');
        document.getElementById('admissionForm').reset(); // Reset the form
    }
});

function showError(field, errorElement, message) {
    field.classList.add('invalid');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearError(field, errorElement) {
    field.classList.remove('invalid');
    errorElement.style.display = 'none';
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
