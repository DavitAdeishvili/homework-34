let slideIndex = 0;
let slides = document.querySelectorAll('.slide');

function moveSlide(step) {
    slides[slideIndex].style.opacity = 0;

    slideIndex = (slideIndex + step + slides.length) % slides.length;

    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].style.transition = 'opacity 1s ease-in-out';
}

document.addEventListener("DOMContentLoaded", () => {
  slides[slideIndex].style.opacity = 1; 
});