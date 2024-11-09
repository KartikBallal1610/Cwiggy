document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save user credentials (for testing, using localStorage)
    localStorage.setItem(username, password);

    alert('Account created successfully! Please log in.');
    window.location.href = 'login.html'; // Redirect to login page
});
