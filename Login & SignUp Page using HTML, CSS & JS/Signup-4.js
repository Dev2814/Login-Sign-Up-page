function Submit(event) {
    event.preventDefault();

    // Get gender selection
    var genderSelected = document.querySelector('input[name="gender"]:checked');
    var termsAccepted = document.querySelector('input[name="terms"]').checked;

    // Validate gender selection
    if (!genderSelected) {
        alert("Please select your gender.");
        return;
    }

    // Validate terms and conditions checkbox
    if (!termsAccepted) {
        alert("Please agree to the Terms and Conditions.");
        return;
    }

    // If all validations pass, proceed
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = '#'; 
    }, 3000); 
}

function Delayterms(event) {
    event.preventDefault();
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Terms&Conditions.html';
    }, 3000); 
}

function DelayLogin() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Login.html';
    }, 3000);
}
