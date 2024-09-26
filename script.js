function validateForm() {
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
