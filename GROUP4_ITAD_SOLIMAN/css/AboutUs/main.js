// Get the image elements and the popup container
const images = document.querySelectorAll('.image img');
const popup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.querySelector('.close');

// Attach click event listener to each image
images.forEach((image) => {
  image.addEventListener('click', () => {
    const src = image.getAttribute('src');
    popupImage.setAttribute('src', src);
    popup.style.display = 'block';
  });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close the popup when the user clicks outside the image
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
