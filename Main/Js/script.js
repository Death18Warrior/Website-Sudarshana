document.addEventListener('DOMContentLoaded', () => {
    // Dropdown Menu Toggle
    const dropdownButton = document.querySelector('.left button'); // The toggle button
    const dropdownMenu = document.querySelector('.dropdown_menu'); // The dropdown menu

    dropdownButton.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close Dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Highlight Active Navigation Link on Section Hover
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    sections.forEach((section) => {
        section.addEventListener("mouseenter", () => {
            let id = section.getAttribute("id");
            highlightNav(id);
        });
    });

    function highlightNav(id) {
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
    }
});
