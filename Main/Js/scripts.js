document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent default form submission

    // Get form data
    const formData = new FormData(e.target);
    
    // Construct the data to be sent
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Replace with your Google Apps Script web app URL
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzUL2yAwq4jceqwQ4nMlQHcse_SONXcE7vQ7sYmvIGZ5J6EgUCRCmtd-AD_IZMKjTxsug/exec';

    fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString()
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error with the submission.');
    });
  });
