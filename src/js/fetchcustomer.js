console.log("Vi er i fetch costumers")
const urlCustomers = "http://localhost:8080/customers"
const updateCustomerURL = "http://localhost:8080/updateCustomer"
const deleteCustomerURL = "http://localhost:8080/deleteCustomer"


//fetch alle customers
function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

//delete customer
async function deleteCustomer(customer, usernameInp, passwordInp) {

    let body = {"customerId": customer.customerId, "inpUsername": usernameInp.value, "inpPassword": passwordInp.value}

    const deleteReq = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(customer)
    }

    await fetch(deleteCustomerURL + "/" + customer.customerId, deleteReq).catch((error) => console.log(error));

}

//update customer
async function updateCustomer(customer, usernameInp, passwordInp) {
    let body = {"customerId": customer.customerId, "inpUsername": usernameInp.value, "inpPassword": passwordInp.value}

    const updateReq = {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    }

    await fetch(updateCustomerURL + "/" + customer.customerId, updateReq).catch((error) => console.log(error));
}

function addToTable(customer) {

    const row = table.insertRow()

    const cell1 = row.insertCell()
    const cell2 = row.insertCell()
    const cell3 = row.insertCell()
    const updateCell = row.insertCell()
    const deleteCell = row.insertCell()

    const usernameInput = document.createElement('input')
    usernameInput.value = customer.username

    const passwordInput = document.createElement('input')
    passwordInput.value = customer.password

    createUpdateForm(updateCell, customer, usernameInput, passwordInput)

    const button = document.createElement('button')
    button.textContent = "Delete"
    button.value = customer.customerId
    button.addEventListener('click', {
        handleEvent: function () {
            row.remove()
            deleteCustomer(customer)
        }
    })
    deleteCell.appendChild(button)

    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(updateCell)
    row.appendChild(deleteCell)

}
//create update form
function createUpdateForm(cell, customer, usernameInput, passwordInput) {

    const button = document.createElement('button')
    button.textContent = "Update"
    button.addEventListener('click', {
        handleEvent: function () {
            updateCustomer(customer, usernameInput, passwordInput)
            console.log("updated")
        }
    })
    cell.appendChild(button)
}

async function createTable() {
    const customers = await fetchAny(urlCustomers)
    customers.forEach(customer => {
        addToTable(customer)
    })
}
createTable()
