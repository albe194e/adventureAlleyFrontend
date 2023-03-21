console.log("Vi er i create new equipment")

const newEquipmentURL = "http://localhost:8080/createEquipment"

const inputEquipmentName = document.getElementById("name")
const inputEquipmentStock = document.getElementById("stock")

const newEquipmentButton = document.getElementById("pbCreateEquipment")

async function newEquipmentRequest(name, stock) {
    let newEquipmentBody = {
        "equipmentId": 0,
        "name": name, "stock": stock
    }
    const postReqNewEquipment = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: {}
    }
    console.log(newEquipmentBody)
    postReqNewEquipment.body = JSON.stringify(newEquipmentBody)
    return await fetch(newEquipmentURL, postReqNewEquipment).then((response) => response.json())
}

function newEquipmentAction() {
    let response = newEquipmentRequest(inputEquipmentName.value, inputEquipmentStock.value)
    console.log(response)
}

newEquipmentButton.addEventListener('click', newEquipmentAction)