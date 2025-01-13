// script.js
const form = document.getElementById('newsletter-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  if (email) {
    successMessage.classList.remove('hidden');
    form.reset();
  }
});
// Form submission logic
const form = document.getElementById('newsletterForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;

  if (email) {
    alert('Thank you for subscribing to The YOLO Letter!');
    form.reset();
  }
});
