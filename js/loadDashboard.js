function loadDashboard() {
    const username = sessionStorage.getItem("username"); // Get the logged-in username from session storage
    if (!username) {
        alert("You must be logged in to view the dashboard.");
        window.location.href = "login.html"; // Redirect to login page if no user is logged in
        return;
    }

    const users = getUsers();
    const user = users.users[username]; // Retrieve the user's data from local storage

    // Display user data on the dashboard
    document.getElementById("user-name").textContent = user.username;
    document.getElementById("user-email").textContent = user.email;
    document.getElementById("user-phone").textContent = user.phone || "Not provided";
    document.getElementById("user-dob").textContent = user.dob || "Not provided";
    document.getElementById("user-about").textContent = user.about || "Not provided";
}
