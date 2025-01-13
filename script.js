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
const testimonialContainer = document.getElementById('testimonial-container');
const addTestimonialButton = document.getElementById('add-testimonial');

// Array to store testimonials
const testimonials = [
  { name: 'John Doe', feedback: 'The YOLO Letter is amazing! It keeps me inspired every day.' },
  { name: 'Jane Smith', feedback: 'I absolutely love the content. It’s fresh and relevant!' },
];

// Render testimonials
function renderTestimonials() {
  testimonialContainer.innerHTML = '';
  testimonials.forEach((testimonial) => {
    const div = document.createElement('div');
    div.className = 'testimonial';
    div.innerHTML = `
      <h3>${testimonial.name}</h3>
      <p>"${testimonial.feedback}"</p>
    `;
    testimonialContainer.appendChild(div);
  });
}

// Add new testimonial
addTestimonialButton.addEventListener('click', () => {
  const name = prompt('Enter your name:');
  const feedback = prompt('Enter your feedback:');
  if (name && feedback) {
    testimonials.push({ name, feedback });
    renderTestimonials();
  }
});

// Initial render
renderTestimonials();
