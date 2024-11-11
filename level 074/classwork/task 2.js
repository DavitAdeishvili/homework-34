// პროგრამირების ენების სია
const programmingLanguages = [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'C++',
    'Ruby',
    'Go',
    'PHP',
    'Swift',
    'Kotlin'
];

// სიის ელემენტების დამატება
document.getElementById('addLanguagesBtn').addEventListener('click', function() {
    const list = document.getElementById('languageList');

    programmingLanguages.forEach(language => {
        const listItem = document.createElement('li');
        listItem.textContent = language;
        list.appendChild(listItem);

    console.log('პროგრამირების ენები დაემატა.');
})});
