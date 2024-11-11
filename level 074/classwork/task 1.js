// პარაგრაფების დამატება
document.getElementById('addParagraphsBtn').addEventListener('click', function() {
    const contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML += `
        <p>ეს არის პირველი პარაგრაფი.</p>
        <p>ეს არის მეორე პარაგრაფი.</p>
        <p>ეს არის მესამე პარაგრაფი.</p>
    `;
    console.log('პარაგრაფები დაემატა.');
});

// შინაარსის წაშლა
document.getElementById('clearContentBtn').addEventListener('click', function() {
    const contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML = '';
    console.log('შინაარსი წაიშალა.');
});

// მომხმარებლის მიერ შეყვანილი პარაგრაფის დამატება
document.getElementById('addCustomParagraphBtn').addEventListener('click', function() {
    const input = document.getElementById('newParagraphInput').value;
    const contentDiv = document.getElementById('contentDiv');

    if (input) {
        contentDiv.innerHTML += `<p>${input}</p>`;
        document.getElementById('newParagraphInput').value = '';
        console.log('ახალი პარაგრაფი დაემატა:', input);
    } else {
        console.log('გთხოვთ, შეყვანოთ ტექსტი.');
    }
});
