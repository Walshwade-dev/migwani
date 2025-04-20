// Hamburger toggle
const hamburgerMenu = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerMenu?.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  hamburgerMenu.classList.toggle("open");
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load theme from local storage
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
});

