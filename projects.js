// Select all accordion cards
const accordionCards = document.querySelectorAll('.accordion-card');

// Create a live region for screen readers
let liveRegion = document.querySelector('#aria-live-region');
if (!liveRegion) {
  liveRegion = document.createElement('div');
  liveRegion.id = 'aria-live-region';
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.classList.add('sr-only');
  document.body.appendChild(liveRegion);
}

accordionCards.forEach((card, index) => {
  const toggle = card.querySelector('.accordion-toggle');
  const content = card.querySelector('.accordion-content');

  toggle.addEventListener('click', () => {
    // Toggle 'open' class
    const isOpen = card.classList.contains('open');
    card.classList.toggle('open');

    // Update aria-expanded for accessibility
    toggle.setAttribute('aria-expanded', !isOpen);

    // Update live region for screen readers
    const title = toggle.textContent.trim();
    if (!isOpen) {
      liveRegion.textContent = `${title} expanded.`;
    } else {
      liveRegion.textContent = `${title} collapsed.`;
    }
  });
});