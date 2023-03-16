const button = document.getElementById("loginbtn")
const usernameLogin = document.getElementById("username")
const passwordLogin = document.getElementById("password")

//const loginURL = "http://localhost:8080/validateUserLogin"

const newUserURL = "http://localhost:8080/createUser"
const newUsername = document.getElementById("newUsername")
const newPassword = document.getElementById("newPassword")
const newUserBtn = document.getElementById("newUserBtn")




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


async function loginReq(username, password) {
    let userBody = {"userId" : 0, "username" : username, "password" : password, "userType" : "EMPLOYEE"}

    console.log(userBody)

    postReqLogin.body = JSON.stringify(userBody)

    return await fetch(loginURL, postReqLogin).then((response) => console.log(response))

}

function loginAction() {

    let response = loginReq(usernameLogin.value, passwordLogin.value)

    console.log(response.status)

}

function newUserAction() {

    let response = newUserReq(newUsername.value, newPassword.value)

    console.log(response)
}

button.addEventListener('click', loginAction)
newUserBtn.addEventListener('click', newUserAction)


