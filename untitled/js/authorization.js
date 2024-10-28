// Helper function to retrieve the users JSON object from localStorage
function getUsers() {
    const usersData = localStorage.getItem("users");
    return usersData ? JSON.parse(usersData) : { users: {} };
}

// Helper function to save the users JSON object back to localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Register User
function registerUser() {
    const username = document.getElementById("username").value;
    const email =  document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const users = getUsers();

    if (users.users[username]) {
        alert("User already exists.");
    } else {
        // Add new user
        users.users[username] = { username, email, password };
        saveUsers(users);
        alert("Registration successful! You can now log in.");
        window.location.href = "login.html";
    }
}

// Login User
function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill out all fields.");
        return;
    }

    const users = getUsers();

    if (users.users[username] && users.users[username].password === password) {
        sessionStorage.setItem("username", username);
        localStorage.setItem("isLoggedIn", "true"); // Set login status
        alert(`Welcome, ${username}!`);
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("Invalid username or password.");
    }
}

// Logout User
function logoutUser() {
    sessionStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html"; // Redirect to login page
}
