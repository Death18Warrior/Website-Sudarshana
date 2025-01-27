//for dropdown menue

document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.querySelector('.left button'); // The toggle button
    const dropdownMenu = document.querySelector('.dropdown_menu'); // The dropdown menu


    dropdownButton.addEventListener('click', () => {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

 
    document.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});
