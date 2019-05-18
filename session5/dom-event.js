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

// let but = document.getElementById('button');

// let inputAddFood = document.getElementById('typeFood');
// inputAddFood.addEventListener('keyup', (data) => {
//     console.log(data);
// })

// but.addEventListener('click', () => {
//     let foodMenu = document.getElementById('menu');
//     console.dir(inputAddFood);
//     let newFood = inputAddFood.value
//     foodMenu.innerHTML +=
//     `
//     <li>${newFood}</li>
//     `
// ;
// })




