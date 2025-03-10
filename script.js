document.addEventListener("DOMContentLoaded", function() {
    console.log("Antham Logistics website loaded successfully!");

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('nav ul li a, .contact-btn').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed header
                    behavior: "smooth"
                });
            }
        });
    });
});
function trackShipment() {
    let trackingNumber = document.getElementById("tracking-number").value;

    if (trackingNumber === "") {
        alert("Please enter a tracking number!");
        return;
    }

function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
    
    // Simulated tracking data (replace with API in the future)
    let fakeTrackingData = {
        "123456": "Out for delivery 🚚",
        "654321": "In Transit 📦",
        "789123": "Delivered ✅"
    };

    let result = fakeTrackingData[trackingNumber] || "Tracking number not found ❌";
    
    document.getElementById("tracking-result").innerHTML = result;
}

// Hardcoded admin credentials (Replace these with your actual username & password)
const adminUsername = "anthamlogistics";
const adminPassword = "Wifey_Reepu@2901";

// Login Function
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === adminUsername && password === adminPassword) {
        sessionStorage.setItem("adminLoggedIn", "true");
        window.location.href = "admin-dashboard.html"; // Redirect to Admin Panel
    } else {
        document.getElementById("error-message").innerText = "Invalid Credentials!";
    }
}

// Logout Function
function logout() {
    sessionStorage.removeItem("adminLoggedIn");
    window.location.href = "admin.html"; // Redirect to Login Page
}

// Check if admin is logged in (For admin-dashboard.html)
if (window.location.pathname.includes("admin-dashboard.html")) {
    if (sessionStorage.getItem("adminLoggedIn") !== "true") {
        window.location.href = "admin.html"; // Redirect to Login if not logged in
    }
}






