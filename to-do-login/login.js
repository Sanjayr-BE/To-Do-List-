document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Please enter both username and password.';
        return;
    }

    // Hardcoded credentials for demo purposes
    const validUsername = 'user';
    const validPassword = 'password';

    // Check credentials
    if (username === validUsername && password === validPassword) {
        // Redirect to To-Do List page
        window.location.href = 'todo.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});