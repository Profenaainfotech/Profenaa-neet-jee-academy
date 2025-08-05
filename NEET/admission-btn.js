// Lock/unlock functions
function lockBackground() {
  document.body.classList.add('modal-open');
}
function unlockBackground() {
  document.body.classList.remove('modal-open');
}
function showForm() {
  overlay.style.display = 'flex';
  lockBackground();
}
function hideForm() {
  overlay.style.display = 'none';
  unlockBackground();
}

// Admission Open Button
const admissionBtn = document.getElementById('admission-btn');
admissionBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showForm();
});

