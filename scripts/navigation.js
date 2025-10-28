const menuButton = document.querySelector("#menu-toggle");
const nav = document.querySelector("#primaryNav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});