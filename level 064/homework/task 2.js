// შექმენით საიტი სადაც გექნებათ სარეგისტრაციო ფორმა. მომხარებელს უნდა შემოატანინოთ სახელი, ემაილი, პაროლი და გამოუტანოთ checkbox-ი. ფორმა არ დადასტურდეს იქამდე სანამ მომხარებელი არ მონიშნავს ჩექმბოქსს. შეამოწმეთ არის თუ არა ინფუთები ცარიელი. თუ კი გამოუტანეთ გამაფრთხილებელი მესიჯი და გათიშეთ ფუნქცია, ხოლო თუ მომხარებელმა ყველაფერი სწორად შეიყვანა გამოიტანეთ ინფუთების მნიშვნელობა კონსოლში


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const surname = document.getElementById('surname').value;
    const mesenger = document.getElementById('mesenger').value;
    const termsChecked = document.getElementById('terms').checked;

    if ([name, email, password, surname, mesenger]) {
        alert('please fill out all the fields!!!');
        return false;
    }

    if (termsChecked) {
        alert('please accept all of the rules!!!');
        return false;
    }

    console.log('name:', name);
    console.log('email:', email);
    console.log('password:', password);
    return true;
}