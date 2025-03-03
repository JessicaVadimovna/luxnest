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
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Простая валидация
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const policy = document.getElementById('policy').checked;

      if (name && email && policy) {
        // Скрываем форму
        form.style.display = 'none';

        // Показываем всплывающее уведомление
        successMessage.classList.remove('hidden');
        successMessage.classList.add('visible');

        // Скрываем уведомление через 3 секунды
        setTimeout(() => {
          successMessage.classList.remove('visible');
          successMessage.classList.add('hidden');
          form.style.display = 'block'; // Возвращаем форму
          form.reset(); // Очищаем форму
        }, 3000);
      }
    });
})});