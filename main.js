// LaunchOne — small JS helpers

// Mobile menu
const burger = document.querySelector('.burger');
const mobile = document.getElementById('mobileMenu');
if (burger && mobile){
  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    mobile.hidden = !mobile.hidden;
  });
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
