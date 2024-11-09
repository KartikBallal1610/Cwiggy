document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Simple validation (you can replace this with backend logic)
    if (username === "admin" && password === "password123") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";  // Redirect to homepage after successful login
    } else {
        alert("Invalid login credentials.");
    }
});
