document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const otpSection = document.getElementById("otp-section");
    const verifyOtpBtn = document.getElementById("verify-otp");

    const validAdmins = {
        "admin1": "password123",
        "admin2": "securepass"
    };

    let generatedOtp = "";

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (validAdmins[username] && validAdmins[username] === password) {
            generatedOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
            alert(`Your OTP is: ${generatedOtp}`); // In real-world, send OTP via email
            otpSection.style.display = "block";
        } else {
            alert("Invalid username or password!");
        }
    });

    verifyOtpBtn.addEventListener("click", function () {
        const enteredOtp = document.getElementById("otp").value;
        if (enteredOtp === generatedOtp) {
            window.location.href = "admin-dashboard.html"; // Redirect to admin panel
        } else {
            alert("Incorrect OTP!");
        }
    });
});
