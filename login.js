document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials (for testing, using hardcoded values)
    if (username === 'admin' && password === 'password123') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to the main page
    } else {
        alert('Invalid login credentials!');
    }
});
