document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;

    // Simple validation and store new credentials (you can replace this with backend logic)
    if (newUsername && newPassword) {
        localStorage.setItem("username", newUsername);
        localStorage.setItem("password", newPassword);
        alert("Sign Up Successful! Please log in.");
        window.location.href = "login.html";  // Redirect to login page
    } else {
        alert("Please fill in both fields.");
    }
});
