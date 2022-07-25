let btnAdd = document.querySelector('#add');
let btnrem = document.querySelector('#rem');

let table = document.querySelector('table');

let idInput = document.querySelector('#id');
let nameInput = document.querySelector('#name');
let mobileInput = document.querySelector('#mobile');
let emailInput = document.querySelector('#email');



btnAdd.addEventListener('click', () => {
    let id = idInput.value;
    let name = nameInput.value;
    let mobile = mobileInput.value;
    let email = emailInput.value;

    let template = `
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${mobile}</td>
                    <td>${email}</td>
                </tr>`;

    table.innerHTML += template;

});

function myFunction(){
    document.getElementById("Mytable").deleteRow(-1);
}


