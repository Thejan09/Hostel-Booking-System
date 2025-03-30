document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        alert("Login Successful!");
    } else {
        alert("Please enter valid email and password.");
    }
});
