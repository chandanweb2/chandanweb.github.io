// Contact Button Message
function showMessage() {
    alert("Thank you for visiting my Portfolio!\n\nFeel free to contact me.");
}

// Welcome Message
window.onload = function () {
    console.log("Welcome to Chandan's Portfolio Website!");
};

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
