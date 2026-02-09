window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const app = document.getElementById("app");

  setTimeout(() => {
    splash.style.display = "none";
    app.classList.remove("hidden");
  }, 3000);
});
