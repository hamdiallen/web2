
// Main logo click interaction
document.getElementById('main-logo').addEventListener('click', () => {
    const logo = document.querySelector('.center-logo img');
    logo.style.transform = 'scale(1.8) rotate(360deg)';
    setTimeout(() => {
        logo.style.transform = 'scale(1)';
    }, 1000);
});

// Login button hover interaction
document.querySelector('.login-button').addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = '#550000';
});
document.querySelector('.login-button').addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = 'black';
});

// Register button hover interaction
document.querySelector('.register-button').addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = '#550055';
});
document.querySelector('.register-button').addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = 'black';
});

// Profile icon hover interaction
const profileIcon = document.getElementById('profile-icon');
profileIcon.addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = '#000055';
});
profileIcon.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = 'black';
});

// Dropdown menu toggle
const profileMenu = document.getElementById('profile-menu');
profileMenu.addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown-menu');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});
