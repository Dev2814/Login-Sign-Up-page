function Back(event) {
    event.preventDefault();
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Signup-2.html';
    }, 3000); 
}

function Next(event) {
    event.preventDefault();

    // Get input values
    var panCardNumber = document.querySelector('input[placeholder="Pan-card number"]').value.trim();
    var aadhaarNumber = document.querySelector('input[placeholder="Aadahar-number"]').value.trim();
    var mobileNumber = document.querySelector('input[name="mobile_number"]').value.trim();

    // Validate Pan-card number (assuming it should be 10 characters long)
    var panCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // Example PAN format: ABCDE1234F
    if (!panCardRegex.test(panCardNumber)) {
        alert("Please enter a valid Pan-card number.");
        return;
    }

    // Validate Aadhaar number (assuming it should be 12 digits long)
    var aadhaarRegex = /^\d{12}$/; // Aadhaar number is exactly 12 digits
    if (!aadhaarRegex.test(aadhaarNumber)) {
        alert("Please enter a valid Aadhaar number.");
        return;
    }

    // Validate Mobile number (assuming it should be 10 digits long)
    var mobileNumberRegex = /^\d{10}$/; // Mobile number is exactly 10 digits
    if (!mobileNumberRegex.test(mobileNumber)) {
        alert("Please enter a valid mobile number.");
        return;
    }

    // If all validations pass, proceed
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Signup-4.html';
    }, 3000); 
}

function DelayLogin() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Login.html';
    }, 3000);
}
