// Fade In / Fade Out
const fadeButton = document.getElementById('fade-button');
const fadeElement = document.getElementById('fade-element');

fadeButton.addEventListener('click', () => {
    if (fadeElement.classList.contains('hidden')) {
        fadeElement.classList.remove('hidden');
        fadeElement.style.opacity = 0;
        let opacity = 0;
        const fadeIn = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.05;
                fadeElement.style.opacity = opacity;
            } else {
                clearInterval(fadeIn);
            }
        }, 30);
    } else {
        let opacity = 1;
        const fadeOut = setInterval(() => {
            if (opacity > 0) {
                opacity -= 0.05;
                fadeElement.style.opacity = opacity;
            } else {
                clearInterval(fadeOut);
                fadeElement.classList.add('hidden');
            }
        }, 30);
    }
});

// Slide In
const slideButton = document.getElementById('slide-button');
const slideElement = document.getElementById('slide-element');

slideButton.addEventListener('click', () => {
    if (slideElement.style.left === '-500px') {
        slideElement.style.left = '50px';
    } else {
        slideElement.style.left = '-500px';
    }
});

// Move Ball
const moveBallButton = document.getElementById('move-ball-button');
const ball = document.getElementById('ball');

moveBallButton.addEventListener('click', () => {
    let position = 10;
    const moveBall = setInterval(() => {
        if (position < window.innerWidth - 60) {
            position += 5;
            ball.style.left = position + 'px';
        } else {
            clearInterval(moveBall);
            const moveBack = setInterval(() => {
                if (position > 10) {
                    position -= 5;
                    ball.style.left = position + 'px';
                } else {
                    clearInterval(moveBack);
                }
            }, 10);
        }
    }, 10);
});

// Resize Text
const resizeTextButton = document.getElementById('resize-text-button');
const resizeText = document.getElementById('resize-text');

resizeTextButton.addEventListener('click', () => {
    let size = 24;
    resizeText.classList.remove('hidden');
    const resizeIn = setInterval(() => {
        if (size < 48) {
            size += 2;
            resizeText.style.fontSize = size + 'px';
        } else {
            clearInterval(resizeIn);
            const resizeOut = setInterval(() => {
                if (size > 24) {
                    size -= 2;
                    resizeText.style.fontSize = size + 'px';
                } else {
                    clearInterval(resizeOut);
                }
            }, 30);
        }
    }, 30);
});

// Rotate Element
const rotateButton = document.getElementById('rotate-button');
const rotateElement = document.getElementById('rotate-element');

rotateButton.addEventListener('click', () => {
    let angle = 0;
    const rotate = setInterval(() => {
        if (angle < 1080) {
            angle += 5;
            rotateElement.style.transform = `rotate(${angle}deg)`;
        } else {
            clearInterval(rotate);
        }
    }, 10);
});