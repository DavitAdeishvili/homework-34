// 2) შევქმნათ წრე და ღილაკი, ღილაკის დაკლიკების დროს წრე ავარდეს და დავარდეს ძირს (საწყის პოზიციაზე) 

const button = document.getElementById('move-button');
const circle = document.getElementById('circle');

button.addEventListener('click', () => {
    circle.style.bottom = '300px';

    setTimeout(() => {
        circle.style.bottom = '50px';
    }, 1000);
});