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
