console.log('Hello World!');


var carouselImages = document.querySelector('.carousel-images');
var imageWidth = document.querySelector('.carousel-image').clientWidth;
var currentIndex = 0;

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
  }
}

function nextImage() {
  if (currentIndex < carouselImages.children.length - 1) {
    currentIndex++;
    carouselImages.style.transform = `translateX(${-currentIndex 
