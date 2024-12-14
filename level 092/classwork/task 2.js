const input1 = document.getElementById('input1');
const p1 = document.getElementById('paragraph');

input1.addEventListener('input', function() {
    const text = input1.value;
    p1.textContent = text.length;
});