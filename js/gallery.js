document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-grid img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
