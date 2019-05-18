// console.log(1);

// setTimeout(() => {
//     console.log(2)
// }, 2000 );

// console.log(3)

// Call Stack(Thực hiện lệnh)
// Call Stack(console.log(1)) => Browser(hiển thị trên trình duyệt)
// Call Stack(setTimeout(() => {console.log(2)}, 2000 );) => Web API (chờ setTimeout 2s) => đẩy vào Callback queue
// Call Stack(console.log(3)) => Browser(hiển thị trên trình duyệt)
//Event loop quản lí ko còn dòng lệnh nào trong Call Stack, (console.log) được đẩy vào => Browser
// JS đồng bộ và bất đồng bộ
// đồng bộ là xuất hiện từ trên xuống dưới
// bất đồng bộ là JS ko chờ câu lệnh thực hiện xong mới làm lần lượt. nó sẽ chạy hết câu lệnh

// async / await

const context = {
    users: null,
};

window.onload = async () => {
    await getUsers();
    renderUsers();
    viewInfoUsers();
};

const getUsers = async () => {
    const res = await fetch('https://reqres.in/api/users');
    const usersData = await res.json();
    context.users = usersData.data
};

const renderUsers = () => {
    console.log(context.users);
    let ul = document.getElementById('ul')
    for(let i=0; i<context.users.length; i++){
        eachUsers = context.users[i]
        let li = `<li id="user_${i}">
       ${eachUsers.first_name}
        </li>`
        ul.innerHTML += li
    }

    // context.users.forEach((eachUsers) => {
    //     let ul = document.getElementById('ul')
    //     ul.innerHTML += `<li><a href ="">${eachUsers.first_name}</a></li>`
    // }
    // )
}


const viewInfoUsers = () =>{
     for (let i=0; i< context.users.length; i++){
        let li = document.getElementById(`user_${i}`)
        let user_info = document.getElementById('user_info')
        li.addEventListener('click', () =>{
            //clear user_info
            user_info.innerHTML =''


            let eachUser =  context.users[i]
            user_info.innerHTML += `
            <img src=${eachUser.avatar}>
            <br />
            <b>First Name:</b>${eachUser.first_name}
            <br />
            <b>Last Name: </b>${eachUser.last_name}
            <br />
            <b>Email: </b>${eachUser.email}
            `
        })
    }
}