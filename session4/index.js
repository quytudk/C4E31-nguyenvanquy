// let x = Number(prompt('x'));
// let y = Number(prompt('y'));
// let op = prompt(' + - * / ');
// let result  = 0;

// if (op === "+") {
//     result = x+y
// }
// else if (op === "-") {
//     result = x - y
// }
// else if (op === "*") {
//     result = x * y
// }
// else if (op === "/") {
//     result = x / y
// }
// console.log(result)


window.onload = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let opRandom = ['+', '-', '*', '/'];
    let op = opRandom[Math.floor(Math.random() * opRandom.length)];
    
    let result = calc(x,y,op);
    
    let errors = [-1, 0, 0, 1];
    let error = errors[Math.floor(Math.random() * errors.length)]
    let hienThi = result + error;
    console.log(`${x} ${op} ${y} = ${hienThi} `)
    
    let answer = prompt('Y/N?').toLowerCase();
    
    if (error === 0) {
        if (answer === 'y') {
            console.log('Yay')
        } else {    
            console.log('Wrong')
        }
    } else {
        if (answer === 'n') {
            console.log('Yay')
        } else {
            console.log('Wrong')
        }
    }
}

