// Get the user icon and dropdown elements
const userIcon = document.getElementById('user-icon'),
      dropdown = document.getElementById('dropdown');

// Add an event listener to the user icon to toggle the dropdown
userIcon.addEventListener('click', () => {
    // Get the dropdown menu element
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    // Toggle the 'show' class on the dropdown menu
    dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!(e.target.closest('#user-icon') || e.target.closest('#dropdown'))) {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.classList.remove('show');
    }
});

// Add keyboard navigation handler to close the dropdown on Esc key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.classList.remove('show');
    }
});