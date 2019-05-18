const context = {
    users: null
}
let button = document.getElementById('button');
let ul = document.getElementById("ul")

let datapost = {

    "name": 'tung',
    "salary": 123123,
}
let url = `http://5b8febb1eb676700148a4dc6.mockapi.io/api/user`
window.onload = async () => {
    await getUsers();
    await  renderUsers()
    salary();
}

const getUsers = async () => {
    const res = await fetch(url);
    const usersData = await res.json();
    console.log(usersData)
    context.users = usersData
}

const renderUsers = () => {
    // // console.log(context.users)
    let a = context.users.map((item, index) => {
        return (
            `<li  id="user_${index}">${item.name}</li>`
        )
    }).join('')
    ul.innerHTML += a
}

const salary = () => {
    for (let i = 0; i < context.users.length; i++) {
        let li = document.getElementById(`user_${i}`)
        let employee_salary = document.getElementById('employee_salary')
        li.addEventListener('mouseover', (event) => {
            event.target.style.color = 'orange'
            let eachUsers = context.users[i]
           let item = `<b>salary: </b>${eachUsers.salary}`
            // console.log(eachUsers.salary)
            employee_salary.innerHTML = item
        })
        li.addEventListener('mouseout', (event) => {
            event.target.style.color = 'black'
        })
    
    }
}

// button.addEventListener('click',()=>{
//     postDataServer()
// })
// postDataServer = () => {
//     return fetch(url,{
//         method: 'POST',
//         body : JSON.stringify(datapost)
//     }).then(response => {
//         console.log(response.json);
        // ul.innerHTML= '<li></li>';
        // renderUsers()
//     })
// }

let name = document.getElementById('name')
let age = document.getElementById('age')
let luong = document.getElementById('salary')
button.addEventListener('click', () => {
    console.log(document.getElementById('name').value)
})