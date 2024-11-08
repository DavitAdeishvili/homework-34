// ტექსტის შეცვლა პარაგრაფში
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const paragraph = document.getElementById('myParagraph');
    paragraph.textContent = 'ტექსტი შეიცვალა!';
    console.log('პარაგრაფის შიგთავსი შეიცვალა.');
});

// ბილდის ლინკის შეცვლა
document.getElementById('changeImageBtn').addEventListener('click', function() {
    const image = document.getElementById('myImage');
    image.src = 'https://via.placeholder.com/200';
    console.log('ბილდის ლინკი შეიცვალა.');
});

// input ველში შეყვანილი ტექსტის ჩვენება პარაგრაფში
document.getElementById('displayTextBtn').addEventListener('click', function() {
    const input = document.getElementById('myInput').value;
    const paragraph = document.getElementById('myParagraph');
    paragraph.textContent = input;
    console.log('პარაგრაფში ახალი ტექსტი იყო:', input);
});