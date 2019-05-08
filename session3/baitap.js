// Study
// A nested list is a list that appears as an element in another list
// Yes it can
// let list = [1, 2, 4, 'anything'];


// //Ex1
// let inventory = {
//     'gold': 500,
//     'pouch': ['flint', 'twine', 'gemstone'],
//     'backpack': ['xylophone', 'dagger', 'bedroll', 'bread loaf']
// };
// inventory.pocket = ['seashell', 'strange berry', 'lint'];

// inventory.backpack.splice(1, 1);

// inventory.gold += 50;

// //Ex2
// let prices = {
//     "banana": 4,
//     "apple": 2,
//     "orange": 1.5,
//     "pear": 3
// };
// let stock = {
//     "banana": 6,
//     "apple": 0,
//     "orange": 32,
//     "pear": 15
// };

// let key = Object.keys(prices)
// for (let i = 0; i < key.length; i++) {
//     console.log(`*${key[i]}
//   prices: ${prices[key[i]]}
//   stock: ${stock[key[i]]}
//         `)
// };

// let tong = 0
// for (let j = 0; j < key.length; j++) {
//     let a = prices[key[j]] * stock[key[j]]
//     tong += a
// };
// console.log(tong)

// //Ex3

// let shop = ['T-Shirt', 'Sweater']
// let answer = prompt('Welcome to our shop, what do you want (C, R, U, D)?')
// let a = answer.toUpperCase()
// if (a === 'R') {
//     console.log('Our items:', shop)
// }
// else if (a === 'C') {
//     let newItem = prompt('Enter new item: ')
//     shop.push(newItem)
//     console.log('Our items:', shop)
// }
// else if (a === 'U') {
//     let updatePosition = prompt('Update position ? ')
//     let updateItem = prompt('New item ? ')
//     shop.splice(updatePosition - 1, 1, updateItem)
//     console.log('Our items:', shop)
// }
// else if (a === 'D') {
//     let deletePosition = prompt('Delete position ? ')
//     shop.splice(deletePosition - 1, 1)
//     console.log('Our items:', shop)
// };

// //Ex4
// let sizes = [5, 7, 300, 90, 24, 50, 75]
// console.log('Hello, my name is Quy and these are my ship sizes', sizes)

// for (let j = 0; j < 3; j++) {
//     let biggest = Math.max(...sizes)
//     console.log('Now my biggest sheep has size', biggest, "let's shear it")

//     let viTri = sizes.indexOf(biggest)
//     sizes[viTri] = 8;
//     console.log('After shearing, here is my flock', sizes)

//     console.log('MONTH', j + 1)
//     for (let i = 0; i < sizes.length; i++) {
//         sizes[i] += 50
//     }
//     console.log('One month has passed, now here is my flock', sizes);

//     let totalSize = sizes.reduce((a, b) => { return a + b })
//     console.log('My flock has size in total:', totalSize)
//     console.log('I would get', totalSize * 2, '$')
// }
