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
    const phone = document.getElementById("phone").value.trim();
    const about = document.getElementById("about").value.trim();
    const dob = document.getElementById("dob").value;


    // Validate email
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone number (optional field)
    if (phone && !isValidPhone(phone)) {
        alert('Please enter a valid phone number. It must contain 11 or 12 digits, with an optional "+" at the beginning.');
        return;
    }

    // Validate password
    if (!isValidPassword(password)) {
        alert("Password must be 8-30 characters long, include at least one uppercase letter, one lowercase letter and one number.");
        return;
    }

    // Confirm passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }


    const users = getUsers();

    if (users.users[username]) {
        alert("User already exists.");
    } else {
        // Add new user
        users.users[username] = {
            username,
            email,
            password,
            phone: phone || "Not provided",
            about: about || "Not provided",
            dob: dob || "Not provided"
        };

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
        window.location.href = "user_dashboard.html"; // Redirect to home page
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

//Data validations

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Remove all spaces from the phone number
    phone = phone.replace(/\s+/g, '');

    // Regex to allow only numbers with optional "+" at the beginning, and 11 or 12 digits
    const phoneRegex = /^\+?\d{11,12}$/;
    return phoneRegex.test(phone);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,30}$/;
    return passwordRegex.test(password);
}
