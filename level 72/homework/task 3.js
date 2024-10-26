const colors = ["red", "green", "blue", "yellow", "purple"];
let index = 0;

setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}, 3000);
