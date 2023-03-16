const button = document.getElementById("loginbtn")
const usernameLogin = document.getElementById("username")
const passwordLogin = document.getElementById("password")

const loginURL = "http://localhost:8080/users"

const newUserURL = "http://localhost:8080/createUser"
const newUsername = document.getElementById("newUsername")
const newPassword = document.getElementById("newPassword")
const newUserBtn = document.getElementById("newUserBtn")

function fetchAny(URL, req) {
    return fetch(URL, req).then((response) => response.json())
}


const postReqLogin = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: {}
}
const postReqNewUser = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: {}
}
async function newUserReq(username, password) {

    let newUserBody = {"userId": 0,"username" : username, "password" : password, "userType" : "EMPLOYEE"}

    console.log(newUserBody)

    postReqNewUser.body = JSON.stringify(newUserBody)

    return await fetch(newUserURL,postReqNewUser).then((response) => response.json())


}

async function loginAction() {

    const users = await fetchAny(loginURL)

    let user = users.find(user => user.username === usernameLogin.value && user.password === passwordLogin.value)

    if (user) {
        console.log("User found")
        window.location.href = "../UserSites/employeePage.html"
    } else {
        console.log("User not found")
    }
}

function newUserAction() {

    let response = newUserReq(newUsername.value, newPassword.value)

    console.log(response)
}

button.addEventListener('click', loginAction)
newUserBtn.addEventListener('click', newUserAction)


