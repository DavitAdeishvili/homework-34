function loadUsers() {
    const users = getUsers();
    users.forEach(user => {
    createUserCard(user.firstName, user.lastName, user.age, user.id, user.height, user.description, user.email);
});
}
window.addEventListener('load', loadUsers)
document.getElementById('form').addEventListener('submit', function (event) {
event.preventDefault();

const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const age = document.getElementById('age').value;
const id = document.getElementById('id').value;
const height = document.getElementById('height').value;
const description = document.getElementById('description').value;
const email = generateEmail(firstName, lastName, age);
const userCard = createUserCard(firstName, lastName, age, id, height, description, email);
document.getElementById('user-list').appendChild(userCard);
const newUser = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    id: id,
    height: height,
    description: description,
    email: email
};

const users = getUsers();
users.push(newUser);
localStorage.setItem('users', JSON.stringify(users));

createUserCard(newUser);
document.getElementById('form').reset();
});

function getUsers() {
const users = localStorage.getItem('users');
return users ? JSON.parse(users) : [];
}

function generateEmail(firstName, lastName, age) {
const randomNumber = Math.floor(Math.random() * 1000);
return `${firstName.toLowerCase()}${lastName.toLowerCase()}${age}${randomNumber}@gmail.com`;
}

function createUserCard(firstName, lastName, age, id, height, description, email) {
const userCard = document.createElement('div');
userCard.className = 'user-card';

userCard.innerHTML = `
    <p><b>Name:</b> ${firstName} ${lastName}</p>
    <p><strong>Age:</b> ${age}</p>
    <p><b>ID Number:</b> ${id}</p>
    <p><b>Height:</b> ${height} m</p>
    <p><b>Description:</b> ${description}</p>
    <p class="email"><b>Email:</b> ${email}</p>`;
document.getElementById('user-list').appendChild(userCard);}