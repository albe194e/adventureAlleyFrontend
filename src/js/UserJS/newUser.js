const newUserURL = "http://localhost:8080/createUser"

const newUsername = document.getElementById("newUsername")
const newPassword = document.getElementById("newPassword")
const newUserBtn = document.getElementById("newUserBtn")

async function createNewUser(username, password) {

    let newUserBody = {"userId": 0, "username": username, "password": password, "userType": "EMPLOYEE"}

    const postReqNewUser = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: {}
    }

    postReqNewUser.body = JSON.stringify(newUserBody)

    return await fetch(newUserURL, postReqNewUser).then((response) => response.json()).catch((error) => console.log(error));
}

function newUserAction() {

    let response = createNewUser(newUsername.value, newPassword.value)

    console.log(response)

}

newUserBtn.addEventListener('click', newUserAction)