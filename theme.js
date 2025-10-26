const toggle = document.getElementById('modeToggle');
const label = toggle.querySelector('.toggle-label');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark'); // toggles dark mode

  // Update the label text dynamically
  if (document.body.classList.contains('dark')) {
    label.textContent = 'Dark';
  } else {
    label.textContent = 'Light';
  }
});
