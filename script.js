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
    }, 10);
  });
});

// Close lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show'); // Remove animation
  setTimeout(() => {
    lightbox.style.display = 'none'; // Hide lightbox
  }, 400); // Wait for animation to finish
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
