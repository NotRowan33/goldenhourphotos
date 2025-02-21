document.addEventListener("DOMContentLoaded", function () {
  // Menu functionality
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.querySelector('.sidebar');
  const closeMenuBtn = document.querySelector('.close-menu');
  const overlay = document.createElement('div');
  
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  function toggleMenu() {
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
  }

  function closeMenu() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
  }

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  }
});
