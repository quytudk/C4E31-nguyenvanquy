let h1 = document.getElementById('demo-h1');
console.dir(h1)
h1.innerText = 'HAHAHA';

let h2 = `<h2>Heading level 2</h2>`;
let body = document.getElementById('demo-body');
body.innerHTML += h2;

let p = document.getElementById('demo-paragraph')
p.remove();

let li1 = `<h2><li>Miến</li></h2>`
let li2 =`<h2><li>Cháo</li></h2>`
let ul= document.getElementById('demo-ul');
ul.innerHTML += li1 += li2
