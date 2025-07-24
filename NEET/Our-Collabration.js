// Scroll Reveal Effect
const scrollElements = document.querySelectorAll('.scroll-fade');

const scrollInView = () => {
  scrollElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', scrollInView);
window.addEventListener('load', scrollInView);
