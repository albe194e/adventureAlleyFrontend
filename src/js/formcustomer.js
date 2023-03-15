console.log("Vi er i create new account")
const button = document.getElementById("pbCreateCustomer")
const newCustomerURL = "http://localhost:8080/createCustomer"

const inputUsername = document.getElementById("inpUsername")
const inputPassword = document.getElementById("inpPassword")
const inputFirstname = document.getElementById("inpFornavn")
const inputLastname = document.getElementById("inpEfternavn")
const inputAddress = document.getElementById("inpAdresse")
const inputTlf = document.getElementById("inpTlf")
const inputEmail = document.getElementById("inpEmail")


const postCustomerReq = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: {}
}

async function newCustomerReq(username, password, firstName, lastName, address, tlf, mail) {
    let newCustomerBody = {
        "inpUsername": username, "inpPassword": password, "inpFornavn": firstName,
        "inpEfternavn": lastName, "inpAdresse": address, "inpTlf": tlf, "inpEmail": mail
    }
    console.log(newCustomerBody)
    postCustomerReq.body = JSON.stringify(newCustomerBody)
    return await fetch(newCustomerURL, postCustomerReq).then((response) => response.json())
}

function newCustomerAction() {
    let response = newCustomerReq(inputUsername.value, inputPassword.value, inputFirstname.value,
        inputLastname.value, inputAddress.value, inputTlf.value, inputEmail.value)
    console.log(response)
}

button.addEventListener('click', newCustomerAction)

