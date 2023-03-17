const table = document.getElementById("userTable")

const usersURL = "http://localhost:8080/users"
const deleteURL = "http://localhost:8080/deleteUser"
const updateURL = "http://localhost:8080/updateUser"



function fetchAny(url) {
    return fetch(url).then((response) => response.json())
}

async function deleteUser(user) {


    const deleteReq = {
        method: "DELETE"
    }

    await fetch(deleteURL + "/" + user.userId, deleteReq).catch((error) => console.log(error));

}

async function updateUser(user, usernameInput, userTypeDD) {

    let body = {"userId": user.userId, "username": usernameInput.value, "password": null, "userType": userTypeDD.value}

    const updateReq = {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    }

    await fetch(updateURL + "/" + user.userId, updateReq).catch((error) => console.log(error));
}



function addToTable(user) {

    const row = table.insertRow()

    const cell1 = row.insertCell()
    const cell2 = row.insertCell()
    const cell3 = row.insertCell()
    const updateCell = row.insertCell()
    const deleteCell = row.insertCell()


    const usernameInput = document.createElement('input')
    usernameInput.value = user.username

    const userTypeDD = document.createElement('select')
    const option1 = document.createElement('option')
    const option2 = document.createElement('option')
    option1.textContent = "ADMIN"
    option2.textContent = "EMPLOYEE"

    userTypeDD.appendChild(option1)
    userTypeDD.appendChild(option2)

    cell1.textContent = user.userId
    cell2.appendChild(usernameInput)
    cell3.appendChild(userTypeDD)

    createUpdateForm(updateCell, user, usernameInput, userTypeDD)

    const button = document.createElement('button')
    button.textContent = "Slet bruger"
    button.value = user.userId
    button.addEventListener('click', {
        handleEvent: function () {
            row.remove()
            deleteUser(user)
        }
    })
    deleteCell.appendChild(button)


    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(updateCell)
    row.appendChild(deleteCell)

}

function createUpdateForm(cell, user, usernameInput, userTypeDD) {

    const button = document.createElement('button')
    button.textContent = "Opdater bruger"
    button.addEventListener('click', {
        handleEvent: function () {
            updateUser(user, usernameInput, userTypeDD)
            console.log("opdateret")
        }
    })
    cell.appendChild(button)

}

async function createTable() {

    const users = await fetchAny(usersURL)

    users.forEach(user => {
        addToTable(user)
    })

}
createTable()


