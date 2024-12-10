
        // Скролл хедера
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.sticky-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});



      // Плавный скролл по навигации
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });


      document.querySelector('.burger').addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
      });
      
      



        // Фоорма обратной связи
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const policyInput = document.getElementById("policy");
const successMessage = document.getElementById("success-message");

// Обработчик отправки формы
form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  // Проверяем, что поля заполнены
  if (!nameInput.value || !emailInput.value || !policyInput.checked) {
    alert("Please fill out all fields and accept the privacy policy.");
    return;
  }

  // Показываем уведомление об успешной отправке
  successMessage.classList.remove("hidden");

  // Очистка формы
  form.reset();

  // Прячем уведомление через 5 секунд
  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 5000);
});















