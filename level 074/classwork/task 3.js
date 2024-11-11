document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault()

    // სახელი, გვარი და ემაილი
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    // ახალი რიგი ცხრილში
    const tableBody = document.getElementById('dataTable').querySelector('tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td><button class="deleteBtn">წაშლა</button></td>
    `;

    tableBody.appendChild(newRow);

    // ფორმის ველების გაწმენდა
    document.getElementById('dataForm').reset();

    console.log('მონაცემები დაემატა:', firstName, lastName, email);
});

// ცხრილში ელემენტის წაშლის ფუნქცია
document.getElementById('dataTable').addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteBtn')) {
        const row = event.target.closest('tr');
        row.remove();
        console.log('რიგი წაიშალა.');
    }
});