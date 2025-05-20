document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const html = document.documentElement;

  // Load dark mode from localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    html.classList.add('dark');
    toggleButton.textContent = '☀️ Light Mode';
  }

  toggleButton.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled');
      toggleButton.textContent = '☀️ Light Mode';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      toggleButton.textContent = '🌙 Dark Mode';
    }
  });
});