/*document.getElementById('contactForm').addEventListener('submit', async (e) => {
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
*/
document.getElementById('enrollForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const scriptURL = "https://script.google.com/macros/s/AKfycbyB2Ej3Tqegjzgpd6m2w8oIxkZQRZkVYkpWacC2vZmM1k2TrRuqxsMSAtM_f2Jl2oKTxg/exec"; // استبدلها بالرابط اللي حصلت عليه من Apps Script

  try {
      const response = await fetch(scriptURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone })
      });

      const message = await response.text();
      document.getElementById('responseMessage').innerText = message;
  } catch (error) {
      console.error('Error:', error);
  }
});

// Toggle navigation menu visibility
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
