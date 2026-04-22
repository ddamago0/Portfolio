// seleccionar elementos
const btn = document.getElementById("changeTextBtn");
const text = document.getElementById("aboutText");

// evento click
btn.addEventListener("click", () => {
  text.textContent = "Now you are interacting with my portfolio 🚀";
});

const menuBtn = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});