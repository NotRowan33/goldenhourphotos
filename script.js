// Select all gallery images
const galleryImages = document.querySelectorAll('.gallery-img');
// Select the lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Open lightbox when an image is clicked
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex'; // Show the lightbox
    lightboxImg.src = image.src; // Set the clicked image as the source
    lightboxImg.alt = image.alt; // Set alt text for accessibility
    setTimeout(() => {
      lightbox.classList.add('show'); // Add animation class after a slight delay
    }, 10); // Slight delay to ensure transition works
  });
});

// Close lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show'); // Remove animation class
  setTimeout(() => {
    lightbox.style.display = 'none'; // Hide the lightbox after transition
  }, 400); // Match the CSS transition duration
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove('show'); // Remove animation class
    setTimeout(() => {
      lightbox.style.display = 'none'; // Hide the lightbox after transition
    }, 400); // Match the CSS transition duration
  }
});
