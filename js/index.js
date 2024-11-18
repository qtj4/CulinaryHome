/*
// Function to display a greeting based on the time of day
function displayGreeting() {
    const currentHour = new Date().getHours();
    let greeting;

    switch (true) {
        case (currentHour >= 5 && currentHour < 12):
            greeting = "Good Morning!";
            break;
        case (currentHour >= 12 && currentHour < 16):
            greeting = "Good Afternoon!";
            break;
        case (currentHour >= 16 && currentHour < 21):
            greeting = "Good Evening!";
            break;
        default:
            greeting = "Hello!";
    }

    // Display the greeting in an alert box
    alert(greeting);
}

// Call the function to display the greeting when the page loads
displayGreeting();
*/
// Add event listeners for each rating section independently
const ratingSections = document.querySelectorAll('.rating-section');

ratingSections.forEach(section => {
    const stars = section.querySelectorAll('.star');

    const ratingMessage = section.querySelector('.rating-message');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = this.getAttribute('data-value');

            // Change the color of stars up to the selected one
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.style.color = 'gold'; // Selected or prior stars are gold
                } else {
                    s.style.color = 'black'; // Remaining stars are black
                }
            });

            // Update the rating message dynamically
            ratingMessage.textContent = `Your rating: ${rating}`;
        });
    });
});

// Check login status and update button visibility
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // Check login status from localStorage
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        // Hide "Log in" and "Sign up" buttons and show "Logout" button
        loginBtn.classList.add("d-none");
        signupBtn.classList.add("d-none");
        logoutBtn.classList.remove("d-none");
    } else {
        // Show "Log in" and "Sign up" buttons and hide "Logout" button
        loginBtn.classList.remove("d-none");
        signupBtn.classList.remove("d-none");
        logoutBtn.classList.add("d-none");
    }
});

// Display the current date and time dynamically
function updateDateTime() {
    const currentDateTime = new Date();
    document.getElementById('currentDateTime').textContent = currentDateTime.toLocaleTimeString();
}

// Call updateDateTime when the page loads and then every second
updateDateTime();
setInterval(updateDateTime, 1000);
