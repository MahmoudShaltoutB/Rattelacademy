document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const response = await fetch('http://localhost:5000/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await response.json();
  alert(data.message);
});
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle navigation menu visibility
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
