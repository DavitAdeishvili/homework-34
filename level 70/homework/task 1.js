let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function changeSlide(direction) {
            currentSlide += direction;
            if (currentSlide < 0) {
                currentSlide = 0;
            }
            if (currentSlide >= slides.length) {
                currentSlide = slides.length - 1;
            }
            showSlide(currentSlide);
        }

        // Show the first slide initially
        showSlide(currentSlide);