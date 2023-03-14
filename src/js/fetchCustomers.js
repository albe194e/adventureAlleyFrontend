const customerUrl = "http://localhost:8080/customers";

const loginBtn = document.getElementById('loginBtn');
const loginUsername = document.getElementById('usernameLogin');
const loginPassword = document.getElementById('passwordLogin');

function fetchSmth(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

async function validateLogin() {

    const customers = await fetchSmth(customerUrl)

    console.log(customers)

    customers.forEach(customer => {
        if (customer.username === loginUsername.value && customer.password === loginPassword.value) {
            console.log('login succesful')
        } else {
            console.log('login failed')
        }
    })
}

loginBtn.addEventListener('click', validateLogin);


