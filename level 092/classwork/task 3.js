let input1 = document.getElementById('input1');
let p1 = document.getElementById('paragraph');

input1.addEventListener('input', function smth() {
    let text = input1.value;
    let hasNumber = /[0-9]/.test(text); 
    
    if (hasNumber) {
        input1.style.backgroundColor = "red"; 
        p1.textContent = "Error";  
    } else {
        input1.style.backgroundColor = "";  
        p1.textContent = `Text length: ${text.length}`; 
    }
});