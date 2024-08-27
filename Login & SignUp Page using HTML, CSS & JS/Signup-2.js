function Back(event) {
    event.preventDefault();
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Signup-1.html';
    }, 3000);
}

function Next(event) {
    event.preventDefault();
    
    var email = document.querySelector('input[type="email"]').value.trim();
    var password = document.querySelector('input[type="password"]').value.trim();
    var confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value.trim();
   
    if (email === "") {
        alert("Please enter your email address.");
    } else if (password === "") {
        alert("Please enter your password.");
    } else if (confirmPassword === "") {
        alert("Please confirm your password.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        document.getElementById('loader').style.display = 'flex';
        document.getElementById('content').classList.add('blurred');
        setTimeout(function() {
            window.location.href = 'Signup-3.html';
        }, 3000);
    }
}

function DelayLogin() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Login.html';
    }, 3000);
}
