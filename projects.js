document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".accordion-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const card = toggle.closest(".accordion-card");
      card.classList.toggle("open");
    });
  });
});