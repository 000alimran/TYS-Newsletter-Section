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
const emailInput = document.getElementById('email');

// Email validation on input
emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex pattern
  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add('error');
    emailInput.classList.remove('success');
  } else {
    emailInput.classList.add('success');
    emailInput.classList.remove('error');
  }
});

// Form submission logic
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailInput.classList.contains('success')) {
    alert('Thank you for subscribing to The YOLO Letter!');
    form.reset();
    emailInput.classList.remove('success', 'error');
  } else {
    alert('Please enter a valid email address.');
  }
});
