document.querySelector(".cancel-btn").addEventListener("click", function() {
    let confirmation = confirm("Are you sure you want to cancel your reservation?");
    if (confirmation) {
        alert("Reservation Cancelled.");
    }
});
