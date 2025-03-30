document.getElementById("issuesForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Form validation
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let regNumber = document.getElementById("regNumber").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let duration = document.getElementById("duration").value.trim();
    let paymentAmount = document.getElementById("paymentAmount").value.trim();
    let checkoutDate = document.getElementById("checkoutDate").value;
    let bankSelection = document.getElementById("bankSelection").value.trim();
    let paymentDate = document.getElementById("paymentDate").value;
    let comments = document.getElementById("comments").value.trim();

    if (!name || !email || !regNumber || !phone || !duration || !paymentAmount || !checkoutDate || !bankSelection || !paymentDate) {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Your complaint has been submitted successfully!");
    document.getElementById("issuesForm").reset();
});
