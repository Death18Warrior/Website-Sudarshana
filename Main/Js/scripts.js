//for Contact Form

document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const submitButton = form.querySelector('button');
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  const isValid = [...form.elements].every(input => {
      if (input.required && !input.value.trim()) {
          input.focus();
          alert(`${input.name} is required!`);
          return false;
      }
      return true;
  });

  if (!isValid) return;

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbzUL2yAwq4jceqwQ4nMlQHcse_SONXcE7vQ7sYmvIGZ5J6EgUCRCmtd-AD_IZMKjTxsug/exec';
  
  try {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';

      const response = await fetch(scriptUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(data).toString(),
      });

      const result = await response.json();
      console.log('Success:', result);
      alert('Form submitted successfully!');
      form.reset(); 
  } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
  } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Submit';
  }
});
