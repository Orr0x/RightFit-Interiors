// JavaScript for RightFit Interiors
// Handles mobile navigation toggle, dynamic footer year and simple contact form feedback.

// Mobile navigation toggling
const toggle = document.querySelector('.nav-toggle');
const menu   = document.getElementById('nav-menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });
}

// Footer year update
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Fake form handler to show a note after submission. This should be replaced
// with a real API endpoint or email service when going live.
const form = document.querySelector('.contact-form');
const note = document.getElementById('form-note');
if (form && note) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = 'Thanks — we’ll be in touch shortly.';
    form.reset();
  });
}

// Floating nav bar: hide on scroll down, show on scroll up
let lastScrollY = window.scrollY;
const navbar = document.getElementById('site-navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    // If user scrolls down, hide nav; if scrolls up, show it
    if (currentY > lastScrollY) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = currentY;
  });
}