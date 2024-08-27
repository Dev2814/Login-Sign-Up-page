function Submit(event) {
    event.preventDefault();

    var input = document.querySelector('input[type="text"]').value.trim();

    // Regular expressions for email and mobile number validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobilePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(input) && !mobilePattern.test(input)) {
        alert("Please enter a valid email or mobile number.");
        return;
    }

    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'ForgetPassword-2.html';
    }, 3000); 
}
function Signin() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Login.html';
    }, 3000);
}


