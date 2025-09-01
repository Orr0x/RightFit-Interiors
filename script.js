// mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });
}

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// (optional) fake form handler — replace with your n8n webhook if you want
const form = document.querySelector('.contact-form');
const note = document.getElementById('form-note');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = 'Thanks — we’ll be in touch shortly.';
    form.reset();
  });
}
