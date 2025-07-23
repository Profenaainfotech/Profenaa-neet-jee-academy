 document.addEventListener('DOMContentLoaded', function () {
      const overlay = document.getElementById('overlay');
      const form = document.getElementById('contactForm');
      const closeBtn = document.getElementById('closeBtn');
      const joinBtn = document.getElementById('join-us-btn');

      function lockBackground() {
        document.body.style.overflow = 'hidden';
      }

      function unlockBackground() {
        document.body.style.overflow = '';
      }

      function showForm() {
        overlay.style.display = 'flex';
        lockBackground();
      }

      function hideForm() {
        overlay.style.display = 'none';
        unlockBackground();
      }

      // 🔘 Show overlay on button click
      joinBtn.addEventListener('click', showForm);
      closeBtn.addEventListener('click', hideForm);
      overlay.addEventListener('click', e => {
        if (e.target === overlay) hideForm();
      });

      form.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Submitted:', Object.fromEntries(new FormData(form)));
        alert("Form submitted successfully!");
        hideForm();
      });
    });