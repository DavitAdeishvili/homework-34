//  შექმენით html პარაგრაფი და მიანიჭეთ ID ხოლო შექმენით სამი ახალი პარაგრაფი და მიანიჭეთ მათ ერთი class, შემდეგ .js ფაილში for loop ის გამოტყენებით შეცვალეთ ამ პარაგრაფერის შინაარსი და ფერი. ელემენტს რომელსაც მიანიჭებს ID უნდა მისცეთ on click eventListiner გამოიტანოს მოსწავლის სახელი და გვარი. 

const studentName = "Davit Adeishvili";


const idParagraph = document.getElementById('yourParagraph');
idParagraph.addEventListener('click', function() {
    alert(studentName);
});


const sameParagraphs = document.getElementsByClassName('myParagraph');


for (let i = 0; i < sameParagraphs.length; i++) {
    const newText = "ახალი ტექსტი " + (i + 1);
    sameParagraphs[i].textContent = newText;
    sameParagraphs[i].style.color = 'blue';
}