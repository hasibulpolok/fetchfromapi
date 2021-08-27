// console.log("api.js connected");

function getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => displayData(json));
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data));
}

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => displayPost(post));
}

function displayUsers(data){
    const ul = document.getElementById('users');
    for (const user of data){
        const li = document.createElement('li');
        li.innerText = `Name : ${user.name}
         Email : ${user.email}`;
        ul.append(li);
    }
}

function displayPost(post){
    const data = document.getElementById('data');
    const p = document.createElement('p');
    p.innerText =('Check Console by pressing ctrl+shift+i');
    p.style.border = "thick solid #0000FF";
    data.append(p);
}
function displayData(json){
    const data = document.getElementById('data');
    const p = document.createElement('p');
    p =alert('Check Console by pressing ctrl+shift+i');
    data.append(p);
}