// Navbar burger toggle
document.querySelector('.burger').addEventListener('click',()=>{
  document.querySelector('.nav-links').classList.toggle('active');
  document.querySelector('.actions').classList.toggle('active');
});

// Dark mode toggle
const modeBtn = document.querySelector('.mode-toggle');
modeBtn.onclick = ()=>{
  document.body.classList.toggle('dark');
  modeBtn.textContent = document.body.classList.contains('dark')?'☀️':'🌙';
};

// FAQ accordion
document.querySelectorAll('.faq-item h4').forEach(el=>{
  el.onclick = ()=>{
    const ans = el.nextElementSibling;
    ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
  };
});

// Swiper slider for testimonials
new Swiper('.mySwiper', {
  spaceBetween:30,
  pagination:{ el:'.swiper-pagination', clickable:true },
  loop:true,
  autoplay:{ delay:5000 },
});
