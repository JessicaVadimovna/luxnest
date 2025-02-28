document.addEventListener("DOMContentLoaded", () => {
  // Header scroll effect
  const header = document.querySelector(".sticky-header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Burger menu toggle
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Animation delays for advantages and properties
  const advantageCards = document.querySelectorAll(".advantage-card");
  const propertyCards = document.querySelectorAll(".property-card");

  advantageCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });

  propertyCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });

  // Contact form handling
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const policy = document.getElementById("policy").checked;

    if (!name || !email || !policy) {
      alert("Please fill out all fields and accept the privacy policy.");
      return;
    }

    successMessage.classList.remove("hidden");
    form.reset();

    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 5000);
  });
});