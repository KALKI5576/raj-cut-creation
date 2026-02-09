const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.getElementById("menuClose");
const menuLinks = mobileMenu.querySelectorAll("a");

function openMenu() {
  mobileMenu.classList.add("active");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
}

// Open menu
hamburger.addEventListener("click", openMenu);

// Close via ❌ button
menuClose.addEventListener("click", closeMenu);

// Close when clicking a link
menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});
