const escapePages = [
  "https://google.com",
  "https://youtube.com",
  "https://amazon.com.br",
];
const skipButton = document.getElementById("panic-btn");

function quickExit() {
  const randomPage = Math.floor(Math.random() * escapePages.length);
  window.location.href = escapePages[randomPage];
}

if (skipButton) {
  skipButton.addEventListener("click", quickExit);
}

const navToggle = document.getElementById("nav-toggle");
const navContainer = document.getElementById("nav-container");

function toggleMenu() {
  navContainer.classList.toggle("active");

  const navToggleActive = navToggle.getAttribute("aria-expanded");

  if (navToggleActive)
    navToggle.setAttribute("aria-expanded", !navToggleActive);

  if (navToggle.getAttribute("aria-label")) {
    navToggle.setAttribute("aria-label", "Fechar Menu");
  } else {
    navToggle.setAttribute("aria-label", "Abrir Menu");
  }

  console.log(navToggle.getAttribute("aria-expanded"));
  console.log(navToggle.getAttribute("aria-label"));
}

if (navToggle) {
  navToggle.addEventListener("click", toggleMenu);
}
