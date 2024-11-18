var modal = document.getElementById("myModal");
var btn = document.getElementById("subscribeBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function toggleReadMore(button) {
    // Find the .extra-content div in the same blog-post
    const extraContent = button.previousElementSibling;

    // Toggle the visibility of the extra content
    if (extraContent.classList.contains('active')) {
        extraContent.classList.remove('active'); // Remove active class
        button.textContent = "Read More";
    } else {
        extraContent.classList.add('active'); // Add active class
        button.textContent = "Read Less";
    }
}

