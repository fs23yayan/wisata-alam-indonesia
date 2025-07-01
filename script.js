const images = [
  "assets/images/galeri1.jpg",
  "assets/images/galeri2.jpg",
  "assets/images/galeri3.jpg"
];

let current = 0;
const imgElement = document.getElementById("slider-img");

function showSlide(index) {
  imgElement.src = images[index];
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
}
