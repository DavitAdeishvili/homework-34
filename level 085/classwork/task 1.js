// შევქმნათ 5 ჩანესტილი დივი, თუ დივი ლუწ რიცხვზეა ჩანესტილი მაშინ გაჩერდეს პროპაგაცია, სხვა შემთხვევაში გაგრძელდეს

function checkPropagation(event, level) {
    if (level % 2 === 0) {
        event.stopPropagation();
        return;
    } else {
        console.log(`Level ${level} is odd.`);
    }}
  
document.querySelector('.div1').addEventListener('click', (event) => checkPropagation(event, 1), true);
document.querySelector('.div2').addEventListener('click', (event) => checkPropagation(event, 2), true);
document.querySelector('.div3').addEventListener('click', (event) => checkPropagation(event, 3), true);
document.querySelector('.div4').addEventListener('click', (event) => checkPropagation(event, 4), true);
document.querySelector('.div5').addEventListener('click', (event) => checkPropagation(event, 5), true);  