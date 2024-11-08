// ფერის შეცვლა
document.getElementById('colorSwapBtn').addEventListener('click', function() {
    const div = document.getElementById('myDiv');
    const currentColor = div.style.color;
    const currentBgColor = div.style.backgroundColor;

    div.style.color = currentBgColor;
    div.style.backgroundColor = currentColor;

    console.log(`ფერი შეიცვალა: ტექსტი - ${div.style.color}, ფონდი - ${div.style.backgroundColor}`);
});

// დივის წაშლა
document.getElementById('removeDivBtn').addEventListener('click', function() {
    const div = document.getElementById('myDiv');
    div.style.display = 'none';
    console.log('დივი წაიშალა');
});

// ფონტის შეცვლა კლასების მიხედვით
document.getElementById('changeFontBtn').addEventListener('click', function() {
    const elements = document.querySelectorAll('.change-font');
    elements.forEach(element => {
        element.style.fontFamily = 'Arial, sans-serif';
    });
    console.log('ფონტი შეიცვალა სამ ელემენტზე');
});