// Select all gallery images
const galleryImages = document.querySelectorAll('.gallery-img');
// Select the lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Open lightbox when an image is clicked
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = image.src; // Use the clicked image's source
    lightboxImg.alt = image.alt; // Use the clicked image's alt text
  });
});

// Close lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});
