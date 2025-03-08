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

    // Simulated tracking data (replace with API in the future)
    let fakeTrackingData = {
        "123456": "Out for delivery 🚚",
        "654321": "In Transit 📦",
        "789123": "Delivered ✅"
    };

    let result = fakeTrackingData[trackingNumber] || "Tracking number not found ❌";
    
    document.getElementById("tracking-result").innerHTML = result;
}

