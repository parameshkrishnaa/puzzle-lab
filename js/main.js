window.onscroll = function () {
    stickyNavbar();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the 'sticky' class to the navbar when you reach its scroll position.
// Remove 'sticky' when you leave the scroll position.
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.borderRadius = '0 0 16px 16px'
    } else {
        navbar.classList.remove("sticky");
        navbar.style.borderRadius = '16px'
    }
}


// Define an array of CSS variable names for colors
const colors = ['--primary-red', '--primary-green', '--primary-yellow', '--primary-blue'];

// Function to get random color from CSS variables
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    // Return the CSS variable value as a string
    return getComputedStyle(document.documentElement).getPropertyValue(colors[randomIndex]).trim();
}

// Select all blockquote elements with the class 'blockquote-custom'
const blockquotes = document.querySelectorAll('.blockquote-custom');

// Loop through each blockquote and set a random background color
blockquotes.forEach(blockquote => {
    blockquote.style.backgroundColor = getRandomColor();
});