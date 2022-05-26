const URL = 'http://localhost:3400';
const usersHTMLElement = document.getElementById('users')
let users = [];

function getUsers() {
    fetch(`${URL}/users`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            users = data.users;
            listUsers(users)
        })
}

function listUsers(users){
    usersHTMLElement.innerHTML = '';
    users.map(usr => {
        usersHTMLElement.innerHTML += `${usr.fullName}
                                       <button onclick="getSpecificUser(event)" id="${usr._id}">Ver más</button> 
                                       `
        usersHTMLElement.innerHTML += `<button onclick="deleteUser(event)" data-id=${usr._id} data-otro-dato="Algún dato">DELETE</button>
                                       <br/>`                               
    })
}

getUsers()

async function getSpecificUser(evt) {
    const id = evt.target.id
    window.location = `pages/user-datail/user-detail.html?id=${id}&otro=dsads&algomas=232dsadas`

}

async function deleteUser(event) {
    console.dir(event.target.dataset.id);
    const id = event.target.dataset.id
    const deletedUser = await axios.delete(`${URL}/users/${id}`)

    if(deletedUser) {
        getUsers()
     
    }
}