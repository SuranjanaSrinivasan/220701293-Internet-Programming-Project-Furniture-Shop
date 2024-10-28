// Function to handle login
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Welcome, ${username}!`);
        // Redirect to home page (placeholder: replace 'home.html' with the actual home page)
        window.location.href = 'home.html';
    } else {
        alert('Please enter both username and password.');
    }
}

