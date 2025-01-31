// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme === 'dark' ? 'dark-mode' : '');
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

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
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
});

// Load theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}
// Select all buttons with the class 'btn'
const buttons = document.querySelectorAll('.btn');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        // Add the 'clicked' class to create the glow effect
        button.classList.add('clicked');
    });

    // Remove the 'clicked' class after a short duration
    button.addEventListener('animationend', () => {
        button.classList.remove('clicked');
    });

    // Alternatively, you can remove it on mouseup
    button.addEventListener('mouseup', () => {
        button.classList.remove('clicked');
    });

    // For touch devices
    button.addEventListener('touchstart', () => {
        button.classList.add('clicked');
    });

    button.addEventListener('touchend', () => {
        button.classList.remove('clicked');
    });
});

