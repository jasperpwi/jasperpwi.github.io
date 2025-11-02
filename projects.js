const cards = document.querySelectorAll('.accordion-card');

cards.forEach(card => {
  const toggle = card.querySelector('.accordion-toggle');
  toggle.addEventListener('click', () => {
    card.classList.toggle('open'); // toggle open state
    
    // Optional: update aria-expanded for accessibility
    const status = card.classList.contains('open') ? 'true' : 'false';
    toggle.setAttribute('aria-expanded', status);
  });
});