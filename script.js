// Scroll + Skill Bar Animation
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const skillBars = document.querySelectorAll('#skill-stats .fill');

const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");

    if (entry.target.id === 'skill-stats') {
      skillBars.forEach(bar => bar.style.width = bar.dataset.width);
    }
    observer.unobserve(entry.target);
  });
}, appearOptions);

[...faders, ...sliders, ...document.querySelectorAll('.section')]
  .forEach(el => appearOnScroll.observe(el));

// Typing Text Animation
const typingElement = document.querySelector('.typing-text');
const roles = [
  "I am a Web Developer 💻",
  "I am a C++ Programmer ⚡",
  "I am a C Coder 🔹",
  "I love Building Projects 🚀"
];
let roleIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
  const current = roles[roleIndex];
  if (!deleting) {
    typingElement.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) { deleting = true; setTimeout(typeEffect, 1500); return; }
  } else {
    typingElement.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  }
  setTimeout(typeEffect, deleting ? 60 : 100);
}
typeEffect();

// Contact Form
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  e.target.reset();
});
