const form = document.querySelector("form");
const tbody = document.querySelector("tbody");


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstname = form.firstname.value;
    const email = form.email.value;
    const pass = form.pass.value;

    const data = [firstname, email, pass];

    const tr = document.createElement("tr");

    for(let i = 0; i < data.length; i++) {
        const td = document.createElement("td");
        td.textContent = data[i];
        tr.appendChild(td);
    }


    form.firstname.value = "";
    form.email.value = "";
    form.pass.value = "";

    tbody.appendChild(tr);

})