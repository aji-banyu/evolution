// Toggle hamburger menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbar = document.getElementById("navbar");

hamburgerMenu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// klik diluar sidebar untuk menghilangkan navbar
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
const hanabi = 