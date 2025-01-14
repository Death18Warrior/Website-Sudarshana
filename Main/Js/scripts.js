document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate a form submission
    if (name && email && message) {
        document.getElementById('responseMessage').textContent = "Thank you for reaching out! We'll get back to you soon.";
        this.reset(); // Reset the form
    } else {
        document.getElementById('responseMessage').textContent = "Please fill in all fields.";
    }
});
