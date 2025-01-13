// Email Validation
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const successMessage = document.getElementById('success-message');

emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(emailInput.value)) {
    emailInput.classList.add('success');
    emailInput.classList.remove('error');
  } else {
    emailInput.classList.add('error');
    emailInput.classList.remove('success');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailInput.classList.contains('success')) {
    successMessage.classList.remove('hidden');
    form.reset();
  } else {
    alert('Please enter a valid email address.');
  }
});

// Testimonial Section
const testimonials = [
  { name: 'John Doe', feedback: 'This newsletter keeps me inspired daily!' },
  { name: 'Jane Smith', feedback: 'The YOLO Letter is my go-to for motivation!' },
];

const testimonialContainer = document.getElementById('testimonial-container');
const addTestimonialButton = document.getElementById('add-testimonial');

function renderTestimonials() {
  testimonialContainer.innerHTML = '';
  testimonials.forEach((testimonial) => {
    const div = document.createElement('div');
    div.classList.add('testimonial');
    div.innerHTML = `
      <h3>${testimonial.name}</h3>
      <p>"${testimonial.feedback}"</p>
    `;
    testimonialContainer.appendChild(div);
  });
}

addTestimonialButton.addEventListener('click', () => {
  const name = prompt('Enter your name:');
  const feedback = prompt('Enter your feedback:');
  if (name && feedback) {
    testimonials.push({ name, feedback });
    renderTestimonials();
  }
});

renderTestimonials();
