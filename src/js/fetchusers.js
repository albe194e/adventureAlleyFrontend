console.log("Vi er i fetch users")
const urlUsers = "http://localhost:8080/users"
const button = document.getElementById("knap")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

async function compareUsername() {
    const users = await fetchAny(urlUsers)
    console.log(usernameInput.value)
    users.forEach(user => {
        if (user.username === usernameInput.value) {
            console.log("user er i system")
            if (user.password === passwordInput.value) {
                console.log("password er korrekt")
            } else {
                console.log("forkert password")
            }
        }
    })
}

button.addEventListener('click', compareUsername)