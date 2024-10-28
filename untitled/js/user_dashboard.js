document.addEventListener("DOMContentLoaded", () => {
    const userInfoSection = document.getElementById("userInfo");
    const toggleThemeButton = document.getElementById("toggleThemeButton");

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Event listener for toggling theme
    toggleThemeButton.addEventListener("click", () => {
        const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });

    // Save button functionality
    document.getElementById("saveButton").addEventListener("click", () => {
        const userData = {
            name: document.getElementById("name").value,
            surname: document.getElementById("surname").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            dob: document.getElementById("dob").value,
            about: document.getElementById("about").value,
        };
        localStorage.setItem("userInfo", JSON.stringify(userData));
        alert("User information saved successfully!");
    });

    // Load saved user info
    loadUserInfo();

    function loadUserInfo() {
        const savedUserData = JSON.parse(localStorage.getItem("userInfo")) || {};
        document.getElementById("name").value = savedUserData.name || "";
        document.getElementById("surname").value = savedUserData.surname || "";
        document.getElementById("email").value = savedUserData.email || "";
        document.getElementById("phone").value = savedUserData.phone || "";
        document.getElementById("dob").value = savedUserData.dob || "";
        document.getElementById("about").value = savedUserData.about || "";
    }

    function applyTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark-mode");
            userInfoSection.classList.add("bg-dark", "text-light");
            toggleThemeButton.textContent = "Switch to Light Mode";
            toggleThemeButton.classList.remove("btn-secondary");
            toggleThemeButton.classList.add("btn-light");
        } else {
            document.body.classList.remove("dark-mode");
            userInfoSection.classList.remove("bg-dark", "text-light");
            toggleThemeButton.textContent = "Switch to Dark Mode";
            toggleThemeButton.classList.remove("btn-light");
            toggleThemeButton.classList.add("btn-secondary");
        }
    }
});
