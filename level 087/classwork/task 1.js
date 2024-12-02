let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
  
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
  
    slides[slideIndex].classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    moveSlide(0);
});