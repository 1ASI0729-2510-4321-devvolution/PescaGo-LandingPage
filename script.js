AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission handler for Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Simulate API call to 'Contact Form Submission API Loop'
  alert(
    "Esta es una versión prototipo. El formulario de contacto estará funcional en la versión completa."
  );
});
