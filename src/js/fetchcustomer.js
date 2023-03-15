console.log("Vi er i fetch costumers")
const urlCustomers = "http://localhost:8080/customers"



function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

async function compareCostumer() {
    const customers = await fetchAny(urlCustomers)

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
customerList = []
async function fetchCustomers() {
    customerList = await fetchAny(urlCustomers);
    console.log(customerList)
    customerList.forEach(fillCustomerDropDown)
}

let body = {}
const postCustomerRequest = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: body
}

function postCustomer(customer) {
    body = JSON.stringify(customer)
    console.log(body)
    postCustomerRequest.body = body
    fetch(urlCustomers, postCustomerRequest).catch((error) => console.log(error));
}

function actionPostAllCustomers() {
    if (customerList) {
        console.log("post alle customers")
        customerList.forEach(postCustomer)
    } else {
        console.log("tryk på fetchcustomer knappen fjols")
    }
}

/*const pbFetchCustomers = document.getElementById("pbFetchCustomers")
pbFetchCustomers.addEventListener('click', fetchCustomers)
const pbPostCustomers = document.getElementById("pbPostCustomers")
pbPostCustomers.addEventListener('click', actionPostAllCustomers)


bu*tton.addEventListener('click', compareCostumer)*/