// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".home-content h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5,
});

gsap.from(".home-content p", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 1,
});

gsap.from(".home-content .btn", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 1.5,
});

gsap.from(".home-image", {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.5,
});

// Scroll Animations
gsap.utils.toArray(".animate__animated").forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
        },
    });
});
