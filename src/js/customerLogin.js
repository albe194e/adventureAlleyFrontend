console.log("Vi er i customerLogin.js")
const urlCustomers = "http://localhost:8080/customers"
const btnLogin = document.getElementById("pbLogin")
const usernameInput = document.getElementById("usernameLogin")
const passwordInput = document.getElementById("passwordLogin")


function fetchAny(url, req) {
    return fetch(url, req).then((response) => response.json())
}


async function loginAction() {
    const customers = await fetchAny(urlCustomers)
    let customer = customers.find(customer => customer.username === usernameInput.value
        && customer.password === passwordInput.value)

    if (customer) {
        console.log("Customer found")
        window.location.href = "../CustomerSites/customerPage.html"
    } else {
        console.log("Customer not found")
    }

}

btnLogin.addEventListener('click', loginAction)



