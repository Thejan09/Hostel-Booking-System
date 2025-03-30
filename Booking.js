document.querySelector(".cancel-btn").addEventListener("click", function() {
    let confirmation = confirm("Are you sure you want to cancel?");
    if (confirmation) {
        alert("Booking Cancelled.");
    }
});

document.querySelector(".submit-btn").addEventListener("click", function() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telephone").value;
    let address = document.getElementById("address").value;
    let checkIn = document.getElementById("check-in").value;
    let checkOut = document.getElementById("check-out").value;

    if (firstName && lastName && email && telephone && address && checkIn && checkOut) {
        alert("Booking Submitted Successfully!");
    } else {
        alert("Please fill all fields before submitting.");
    }
});
