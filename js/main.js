// js/main.js

// Abre/fecha menu no mobile
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

// (Opcional) Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
  });
});
