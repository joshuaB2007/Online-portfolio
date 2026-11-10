/* =========================================================
   LIGHT / DARK MODE
   Dark is the default. We remember the visitor's choice
   in localStorage so it stays the same when they come back.
   ========================================================= */
const themeButton = document.getElementById("theme-toggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  // Show a sun in dark mode (click for light) and a moon in light mode
  const icon = themeButton.querySelector("i");
  icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";

  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    // Some browsers block localStorage. That's okay, we just won't remember.
  }
}

let savedTheme = "dark";
try {
  savedTheme = localStorage.getItem("theme") || "dark";
} catch (error) {}
setTheme(savedTheme);

themeButton.addEventListener("click", function () {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "light" ? "dark" : "light");
});


/* =========================================================
   PHONE MENU
   ========================================================= */
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Close the menu after tapping a link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", false);
  });
});


/* =========================================================
   FOOTER YEAR (updates itself every year)
   ========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();
