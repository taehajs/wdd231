document.addEventListener("DOMContentLoaded", () => {
  const timestamp = document.querySelector("#timestamp");
  timestamp.value = new Date().toISOString();

  document.querySelectorAll(".info-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.parentElement.dataset.modal;
      document.getElementById(modalId).showModal();
    });
  });

  document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.close();
    });
  });
});
