// შევქმნათ ჯავასკრიპტით ანიმაცია რომელიც შექმნილ ოთკუდხედს შემოავლებინებს მთელ ვებსაიტს

const box = document.getElementById('animation-box');
const boxSize = 200;
const speed = 5;
let currentX = window.innerWidth / 2 - boxSize / 2;
let currentY = window.innerHeight / 2 - boxSize / 2;
let direction = 'right';

function animateBox() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    switch (direction) {
        case 'right':
            if (currentX < width - boxSize) {
                currentX += speed;
            } else {
                direction = 'down';
            }
            break;
        case 'down':
            if (currentY < height - boxSize) {
                currentY += speed;
            } else {
                direction = 'left';
            }
            break;
        case 'left':
            if (currentX > 0) {
                currentX -= speed;
            } else {
                direction = 'up';
            }
            break;
        case 'up':
            if (currentY > 0) {
                currentY -= speed;
            } else {
                direction = 'right';
            }
            break;
    }

    box.style.left = `${currentX}px`;
    box.style.top = `${currentY}px`;

    requestAnimationFrame(animateBox);
}

animateBox();