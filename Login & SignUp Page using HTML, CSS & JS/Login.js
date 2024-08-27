function Google() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'https://accounts.google.com';
    }, 3000);
}

function Apple() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&path=%2Faccount%2F&rv=1';
    }, 3000);
}

function Delayforget() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'ForgetPassword.html';
    }, 3000);
}

function DelaySignup() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Signup-1.html';
    }, 3000);
}

function Delayotp(event) {
    event.preventDefault();
    var inputValue = document.querySelector('input[type="text"]').value.trim();
    if (inputValue === "") {
        alert("Please enter your email or mobile number.");
    } else {
        document.getElementById('loader').style.display = 'flex';
        document.getElementById('content').classList.add('blurred');
        setTimeout(function() {
            window.location.href = 'OTPVerification.html';
        }, 3000); 
    }
}
