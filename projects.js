// projects.js

document.addEventListener('DOMContentLoaded', () => {
  const accordionToggles = document.querySelectorAll('.accordion-toggle');

  accordionToggles.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.accordion-card');
      card.classList.toggle('open');

      // Update aria-expanded
      const expanded = card.classList.contains('open');
      button.setAttribute('aria-expanded', expanded);

      // Live region for screen readers
      let liveRegion = document.getElementById('live-region');
      if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.className = 'sr-only';
        liveRegion.setAttribute('aria-live', 'polite');
        document.body.appendChild(liveRegion);
      }
      liveRegion.textContent = expanded 
        ? `${card.querySelector('h3').textContent} expanded` 
        : `${card.querySelector('h3').textContent} collapsed`;
    });
  });
});
