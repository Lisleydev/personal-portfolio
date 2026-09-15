// Welcome message
console.log("Welcome to Karina's portfolio!");

// Add a small animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(20px)";

    setTimeout(() => {
        hero.style.transition = "all 0.8s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 200);
});

// Highlight navigation links when clicked
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});
