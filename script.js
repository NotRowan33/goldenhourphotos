document.addEventListener("DOMContentLoaded", function () {
  // Lightbox functionality
  const galleryImages = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  if (galleryImages && lightbox && lightboxImg && closeBtn) {
    galleryImages.forEach(image => {
      image.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Show lightbox
        lightboxImg.src = image.src; // Set clicked image source
        setTimeout(() => {
          lightbox.classList.add('show'); // Trigger animation
        }, 10);
      });
    });

    // Close lightbox when the close button is clicked
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('show');
      setTimeout(() => {
        lightbox.style.display = 'none';
      }, 400);
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
      if (e.target !== lightboxImg) {
        lightbox.classList.remove('show');
        setTimeout(() => {
          lightbox.style.display = 'none';
        }, 400);
      }
    });
  } else {
    console.error("Lightbox elements not found! Check the HTML.");
  }
});
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
