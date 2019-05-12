let h1 = document.getElementById('event-h1');

h1.addEventListener('click', () => {
    console.log('you have click')
})


let menu = document.getElementById("menu");
let addFood = document.getElementById('btnAddFood')

let inputAddFood = document.getElementById('typeFood')
inputAddFood.addEventListener('keypress', () => {
    console.log('Bấm nhẹ thôi')
})


addFood.addEventListener('click', () => {
    let newFood = prompt("Thêm món gì? ")
    menu.innerHTML += `<li>${newFood}</li>`
})






