const button = document.getElementById("loginbtn")
const usernameLogin = document.getElementById("username")
const passwordLogin = document.getElementById("password")

const loginURL = "http://localhost:8080/users"



function fetchAny(URL, req) {
    return fetch(URL, req).then((response) => response.json())
}


async function newUserReq(username, password) {

    let newUserBody = {"userId": 0,"username" : username, "password" : password, "userType" : "EMPLOYEE"}

    console.log(newUserBody)

    postReqNewUser.body = JSON.stringify(newUserBody)

    return await fetch(newUserURL,postReqNewUser).then((response) => response.json())


}

async function loginAction() {

    const users = await fetchAny(loginURL)

    //Finder brugeren i listen af brugere
    let user = users.find(user => user.username === usernameLogin.value && user.password === passwordLogin.value)

    //Hvis brugeren findes, så sendes brugeren videre til den rigtige side
    if (user) {
        console.log("User found")

        if (user.userType === "ADMIN") {
            window.location.href = "../UserSites/adminPage.html"
        } else{
            window.location.href = "../UserSites/employeePage.html"
        }
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


