var darkModeToggle = document.getElementById("darkModeToggle");

// Apply dark mode based on local storage value on page load
document.addEventListener("DOMContentLoaded", function() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Helper function to toggle dark mode styles
function toggleDarkModeElements(enable) {
    const elementsToToggle = [
        document.body,
        document.querySelector('header'),
        document.querySelector('footer'),
        document.querySelector("#content-wrapper"),
        document.getElementById("subscribeBtn")
    ];

    // Include nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(navLink => elementsToToggle.push(navLink));

    // Add or remove the "dark-mode" class
    elementsToToggle.forEach(element => {
        if (element) {
            element.classList.toggle('dark-mode', enable);
        }
    });

    // Update button text and localStorage
    darkModeToggle.textContent = enable ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem("darkMode", enable.toString());
}

// Enable dark mode
function enableDarkMode() {
    toggleDarkModeElements(true);
}

// Disable dark mode
function disableDarkMode() {
    toggleDarkModeElements(false);
}

// Toggle dark mode on button click
darkModeToggle.onclick = function() {
    const isCurrentlyDarkMode = document.body.classList.contains('dark-mode');
    if (isCurrentlyDarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
};
