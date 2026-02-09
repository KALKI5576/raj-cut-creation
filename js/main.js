document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuClose = document.getElementById("menuClose");

  if (!hamburger || !mobileMenu || !menuClose) {
    console.warn("Mobile menu elements not found");
    return;
  }

  function openMenu() {
    mobileMenu.classList.add("active");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  hamburger.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);

  // Close when clicking links
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});
