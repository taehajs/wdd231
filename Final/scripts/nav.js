document.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname;
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (current.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
