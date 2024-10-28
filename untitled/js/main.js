// Dark Mode Toggle with Local Storage Persistence
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

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('footer').classList.add('dark-mode');
    document.querySelectorAll('.nav-link').forEach(navLink => navLink.classList.add('dark-mode'));

    darkModeToggle.textContent = 'Light Mode';
    localStorage.setItem("darkMode", "true");
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.querySelector('header').classList.remove('dark-mode');
    document.querySelector('footer').classList.remove('dark-mode');
    document.querySelectorAll('.nav-link').forEach(navLink => navLink.classList.remove('dark-mode'));

    darkModeToggle.textContent = 'Dark Mode';
    localStorage.setItem("darkMode", "false");
}

darkModeToggle.onclick = function() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
};
