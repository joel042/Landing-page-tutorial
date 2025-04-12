// Placeholder for any JS interaction (e.g., toggles, animations)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Landing page loaded");
});

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});
