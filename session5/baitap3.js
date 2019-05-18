let table = document.getElementById('table');
let button = document.getElementById('button')

button.addEventListener('click',() =>{
    console.dir(table)
    let row = Number(prompt("Enter row number"));
    let cell = Number(prompt("Enter cell number"));
    let content = prompt("Enter content");
    table.rows[`${row - 1}`].cells[`${cell - 1}`].innerHTML = `${content}`
    
})
