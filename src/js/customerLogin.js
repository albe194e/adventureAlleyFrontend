console.log("Vi er i customerLogin.js")

const btnLogin = document.getElementById("pbLogin")
const usernameInput = document.getElementById("usernameLogin")
const passwordInput = document.getElementById("passwordLogin")


const postReqLogin = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: {}
}

async function loginReq(username, password) {
    let customerBody = {"username" : username, "password" : password}

    console.log(customerBody)

    postReqLogin.body = JSON.stringify(customerBody)

    return await fetch(urlCustomers, postReqLogin).then((response) => response.json())
}

async function loginAction() {
    const customers = await loginReq(usernameInput.value, passwordInput.value)

    console.log(usernameLogin.value)
    customers.forEach(customer => {
        if (customer.username === usernameLogin.value) {
            console.log("customer er i system")
            if (customer.password === passwordLogin.value) {
                console.log("password er korrekt")
            } else {
                console.log("forkert password")
            }
        }
    })
}

btnLogin.addEventListener('click', loginAction)



