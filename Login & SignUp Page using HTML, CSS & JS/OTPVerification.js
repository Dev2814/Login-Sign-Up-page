document.addEventListener('DOMContentLoaded', function() {
    const otpInputs = document.querySelectorAll('.input-field input');
    const form = document.getElementById('otpForm');
    const loader = document.getElementById('loader');

    otpInputs.forEach((input, index) => {
        // Move focus to the next input field if the current input is filled
        input.addEventListener('input', function() {
            if (input.value.length === input.maxLength) {
                const nextInput = otpInputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        });

        // Handle backspace key press to move focus to the previous input field
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Backspace' && input.value === '') {
                const previousInput = otpInputs[index - 1];
                if (previousInput) {
                    previousInput.focus();
                    previousInput.value = ''; // Clear the previous input value
                }
            }
        });
    });

    // Form submit event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Check if all inputs are filled
        let allFilled = true;
        otpInputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
                input.focus();
                return; // Stop checking further if one input is empty
            }
        });

        if (allFilled) {
            // Show loader
            loader.style.display = 'flex';

            // Simulate delay and then redirect
            setTimeout(function() {
                window.location.href = 'home'; // Redirect to success page
            }, 3000); // 3 seconds delay
        } else {
            // Optionally, display an error message or handle the case where fields are not filled
            alert('Please fill all OTP fields.');
        }
    });
});

function ResendOTP() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        alert("OTP has been resent");
        window.location.href = 'OTPVerification.html';
    }, 3000);
}