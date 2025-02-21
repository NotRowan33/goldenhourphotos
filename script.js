// Select all gallery images
const galleryImages = document.querySelectorAll('.gallery-img');
// Select the lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Open lightbox when an image is clicked
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex'; // Show lightbox
    lightboxImg.src = image.src; // Set clicked image source
    setTimeout(() => {
      lightbox.classList.add('show'); // Trigger animation
    }, 10); // Slight delay for smooth transition
  });
});

// Close lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show'); // Remove animation class
  setTimeout(() => {
    lightbox.style.display = 'none'; // Hide the lightbox after animation
  }, 400); // Match CSS animation duration
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove('show'); // Remove animation class
    setTimeout(() => {
      lightbox.style.display = 'none'; // Hide the lightbox after animation
    }, 400); // Match the CSS animation duration
  }
});
// Select the menu button and sidebar
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

// Toggle menu on button click
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});
