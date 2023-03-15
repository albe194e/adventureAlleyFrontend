const button = document.getElementById("loginbtn")
const usernameLogin = document.getElementById("username")
const passwordLogin = document.getElementById("password")

const loginURL = "http://localhost:8080/validateUserLogin"


const postReq = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: {}
}


async function postReqAction(username, password) {
    let userBody = {"userId" : 0, "username" : username, "password" : password, "userType" : null}

    console.log(userBody)

    postReq.body = JSON.stringify(userBody)

    return await fetch(loginURL, postReq).catch((error) => console.log(error));

}

function loginAction() {

    let response = postReqAction(usernameLogin.value, passwordLogin.value)

    console.log(response)

}

button.addEventListener('click', loginAction)


