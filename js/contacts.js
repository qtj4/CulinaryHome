// Form validation logic (unchanged)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formElements = this.elements;
    for (let element of formElements) {
        element.classList.remove('is-invalid');
    }

    let isValid = true;

    if (formElements['name'].value.trim() === '') {
        formElements['name'].classList.add('is-invalid');
        isValid = false;
    }

    const email = formElements['email'].value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        formElements['email'].classList.add('is-invalid');
        isValid = false;
    }

    if (formElements['reason'].value === '') {
        formElements['reason'].classList.add('is-invalid');
        isValid = false;
    }

    if (formElements['message'].value.trim() === '') {
        formElements['message'].classList.add('is-invalid');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('submitSound').play(); // Play sound on successful submission

        // Clear all form fields after successful submission
        document.querySelectorAll('input, textarea, select').forEach(input => {
            input.value = '';  // Clear all form fields
        });

        // Optional: Remove any validation messages or styles
        document.querySelectorAll('.is-invalid').forEach(element => {
            element.classList.remove('is-invalid');
        });
    }
});

// Reset form logic
document.getElementById('resetButton').addEventListener('click', function() {
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.value = '';  // Clear all form fields
    });

    // Play sound on reset
    document.getElementById('resetSound').play();

    // Optional: Remove any validation messages or styles
    document.querySelectorAll('.is-invalid').forEach(element => {
        element.classList.remove('is-invalid');
    });
});
