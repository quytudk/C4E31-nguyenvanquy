//Ex1
// let button = document.getElementById('btn')
// let input = document.getElementById('input')
// let a = document.getElementById('a')
// let link = a.href

// button.addEventListener('click',() => {
//     input.value = link
// })


//Ex2
let menu = document.getElementById('menu')
let btn = document.getElementById('btn')
btn.addEventListener('click', () => {
console.dir(menu)
menu.remove(menu.selectedIndex)
})
