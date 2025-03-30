document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let cardName = document.getElementById("card-name").value.trim();
    let cardNumber = document.getElementById("card-number").value.trim();
    let expiryMonth = document.getElementById("expiry-month").value.trim();
    let expiryYear = document.getElementById("expiry-year").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

    if (cardName === "" || cardNumber === "" || expiryMonth === "" || expiryYear === "" || cvv === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }

    if (expiryMonth.length !== 2 || isNaN(expiryMonth) || expiryYear.length !== 2 || isNaN(expiryYear)) {
        alert("Please enter a valid expiry date.");
        return;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("Please enter a valid 3-digit CVV.");
        return;
    }

    alert("Payment Successful!");
});
