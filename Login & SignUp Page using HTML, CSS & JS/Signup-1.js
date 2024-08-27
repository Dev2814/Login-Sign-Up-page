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

function DelayLogin() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    setTimeout(function() {
        window.location.href = 'Login.html';
    }, 3000);
}

function Next(event) {
    event.preventDefault();

    // Get values from the input fields
    var firstName = document.getElementById('firstname').value.trim();
    var lastName = document.getElementById('lastname').value.trim();

    // Basic validation
    if (firstName === "") {
        alert("Please enter your first name.");
    } else if (lastName === "") {
        alert("Please enter your last name.");
    } else {
        document.getElementById('loader').style.display = 'flex';
        document.getElementById('content').classList.add('blurred');
        setTimeout(function() {
            window.location.href = 'Signup-2.html';
        }, 3000);
    }
}
