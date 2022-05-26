const params = new URLSearchParams(window.location.search)

const URL = 'http://localhost:3400';
const pName = document.getElementById('name')

// const id = window.location.search.split('=')[1];
const id = params.get('id');

getUser(id)

async function getUser(id) {

    const completeURL = `${URL}/users/` + id;

    const response = await axios.get(completeURL)

    console.log(response)

    const user = response.data.user;
    console.log(user)
    pName.innerText = user.fullName
}