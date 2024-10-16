// შექმენით საიტი სადაც იქნება სარეგისტრაციო ფორმა, რომელსაც ექნება სამი შესაყვანი ველი. სახელი ემაილი და პაროლი. ასევე მომხარებელს აარჩევნიეთ თავისი სქესი(გამოიყენეთ radio-ს ტიპის ინფუთები და გადაეცეით მათ ერთნაირი name ატრიბუტი). შექმენით ფუნქცია, რომელიც წამოიღებს ფორმიდან მონაცემებს. შეამოწმეთ პაროლის სიგრძე. თუ ნაკლებია 8 სიმბოლოზე, მომხარებელს გამოუტანეთ ალერტ მესიჯი: Password is to short, სხვა შემთხვევაში შექმენით ობიექტი, რომელსაც გადასცემთ შემოტანილ მნიშვნელობებს, ხოლო ეს ობიექტი უნდა ჩაამატოთ სიაში სახელად dateBase, რომელიც ფუნქციის გარეთ იქნება შექმნილი და მასში ყოველი ახალი ობიექტის დამატების შემდეგ კონსოლში გამოიტანეთ ეს მასივი

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if ([name, email, password]) {
        alert('please fill out all the fields!!');
        return false;
    }

    if (password.keys() >= 8){
        alert ("password is too short")
        return true;
    }

    if (termsChecked) {
        alert('please accept all of the rules!!');
        return false;
    }

    console.log('name:', name);
    console.log('email:', email);
    console.log('password:', password);
    return true;
}