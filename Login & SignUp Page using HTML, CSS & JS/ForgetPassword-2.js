function Submit(event) {
    event.preventDefault();

    const passwordField = document.querySelector('input[placeholder="Password"]');
    const confirmPasswordField = document.querySelector('input[placeholder="Confirm Password"]');
    const password = passwordField.value.trim();
    const confirmPassword = confirmPasswordField.value.trim();

    if (password === "") {
        alert("Please enter your password.");
        passwordField.focus();
        return;
    }

    if (confirmPassword === "") {
        alert("Please confirm your password.");
        confirmPasswordField.focus();
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        confirmPasswordField.focus();
        return;
    }

    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = '#'; 
    }, 3000);
}

function Signin() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Login.html';
    }, 3000);
}
