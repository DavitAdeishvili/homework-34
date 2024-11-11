const paragraph = document.getElementById("myParagraph");
const messages = ["პირველი მესიჯი", "მეორე მესიჯი", "მესამე მესიჯი"];
let msgIndex = 0;

setInterval(() => {
    paragraph.textContent = messages[msgIndex];
    msgIndex = (msgIndex + 1) % messages.length;
}, 5000);
