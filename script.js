// Set the current year
document.getElementById('currentYear').innerHTML = new Date().getFullYear();

// Function to toggle the mobile menu
function toggleMobileMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Add the active class to the current navigation link
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Function to show projects by category
function showProjects(category) {
    // Hide all project sections
    var projectSections = document.querySelectorAll('.project-content');
    projectSections.forEach(function(section) {
        section.style.display = 'none';
    });
    // Show the selected category's projects
    var selectedProjects = document.getElementById(category + '-projects');
    if (selectedProjects) {
        selectedProjects.style.display = 'block';
    }
    // Remove 'selected' class from all buttons
    var buttons = document.querySelectorAll('.btn-alert');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });
    // Add 'selected' class to the clicked button
    var clickedButton = document.querySelector(`[onclick="showProjects('${category}')"]`);
    if (clickedButton) {
        clickedButton.classList.add('selected');
    }
}

showProjects('ux-ui');

/* Header Scrolling */
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
// Scroll down
    header.classList.add('header-hidden');
    } else {
// Scroll up
    header.classList.remove('header-hidden');
}
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});