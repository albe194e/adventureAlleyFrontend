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


//button.addEventListener('click', compareCostumer)