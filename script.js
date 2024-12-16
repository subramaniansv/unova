let currentImageIndex = 0;
const images = document.querySelectorAll('.banner-image');
const totalImages = images.length;

function rotateImages() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add('active');
}

setInterval(rotateImages, 3000); // Rotate every 3 seconds
