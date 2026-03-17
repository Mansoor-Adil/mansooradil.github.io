// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// ===============================
// MOBILE MENU TOGGLE
// ===============================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


// ===============================
// CLOSE MENU ON CLICK
// ===============================
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// ===============================
// SCROLL ANIMATION (FADE-IN)
// ===============================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1
});

// Elements to animate
document.querySelectorAll('.glass-panel, .section-title, .project-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.6s ease";

    observer.observe(el);
});


// ===============================
// SIMPLE STAR BACKGROUND (OPTIONAL)
// ===============================
function createStars(id, count) {
    const container = document.getElementById(id);
    if (!container) return;

    let stars = '';

    for (let i = 0; i < count; i++) {
        stars += `
        <div style="
            position:absolute;
            top:${Math.random() * 100}vh;
            left:${Math.random() * 100}vw;
            width:2px;
            height:2px;
            background:white;
            opacity:${Math.random()};
        "></div>`;
    }

    container.innerHTML = stars;
}

// Initialize stars (only if you keep them in HTML)
createStars('stars', 80);


// ===============================
// ACTIVE NAV LINK HIGHLIGHT
// ===============================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});