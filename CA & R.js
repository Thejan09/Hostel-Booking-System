function checkAvailability() {
    let checkinDate = document.getElementById("checkin-date").value;
    let checkoutDate = document.getElementById("checkout-date").value;

    if (checkinDate === "" || checkoutDate === "") {
        alert("Please select both check-in and check-out dates.");
        return;
    }

    console.log("Checking availability for:", checkinDate, "to", checkoutDate);
    alert("Availability checked! Select a room to proceed.");
}
