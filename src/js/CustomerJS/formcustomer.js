console.log("Vi er i create new account")


const newCustomerURL = "http://localhost:8080/createCustomer"

const inputUsername = document.getElementById("username")
const inputPassword = document.getElementById("password")
const inputFirstname = document.getElementById("firstName")
const inputLastname = document.getElementById("lastName")
const inputAddress = document.getElementById("address")
const inputTlf = document.getElementById("phone")
const inputEmail = document.getElementById("email")
const newCstmButton = document.getElementById("pbCreateCustomer")



const postReqNewCustomer = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: {}
}

async function newCustomerReq(username, password, firstName, lastName, address, tlf, mail) {
    let newCustomerBody = {"customerId": 0,
        "username": username, "password": password, "firstName": firstName,
        "lastName": lastName, "address": address, "phone": tlf, "email": mail
    }
    console.log(newCustomerBody)
    postReqNewCustomer.body = JSON.stringify(newCustomerBody)
    return await fetch(newCustomerURL, postReqNewCustomer).then((response) => response.json())
}

function newCustomerAction() {
    let response = newCustomerReq(inputUsername.value, inputPassword.value, inputFirstname.value,
        inputLastname.value, inputAddress.value, inputTlf.value, inputEmail.value)
    console.log(response)
}

newCstmButton.addEventListener('click', newCustomerAction)
