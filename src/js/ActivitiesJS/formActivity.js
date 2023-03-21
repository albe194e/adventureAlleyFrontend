console.log("Vi er i create new activity")

const fetchEquipmentURL = "http://localhost:8080/equipment"
const newActivityURL = "http://localhost:8080/createActivity"

const inputActivityName = document.getElementById("name")
const inputAgeLimit = document.getElementById("ageLimit")
const inputPrice = document.getElementById("price")

const newActButton = document.getElementById("pbCreateActivity")


function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

let equipmentList = []

async function fetchEquipment() {
    equipmentList = await fetchAny(fetchEquipmentURL);
    console.log(equipmentList)
}

async function newActivityRequest(name, ageLimit, price, equipment) {
    let newActivityBody = {
        "activityId": 0,
        "name": name, "ageLimit": ageLimit, "price": price, "equipment": equipment
    }
    const postReqNewActivity = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: {}
    }
    console.log(newActivityBody)
    postReqNewActivity.body = JSON.stringify(newActivityBody)
    return await fetch(newActivityURL, postReqNewActivity).then((response) => response.json())
}

function newActivityAction() {
    let response = newActivityRequest(inputActivityName.value, inputAgeLimit.value,
        inputPrice.value, ddEquipment.options[ddEquipment.selectedIndex].equipment)
    console.log(response)
}

newActButton.addEventListener('click', newActivityAction)

const ddEquipment = document.getElementById("ddEquipment")

function fillEquipmentDropDown(equipment) {
    const el = document.createElement("option")
    el.textContent = equipment.name
    el.value = equipment.stock
    el.equipment = equipment
    ddEquipment.appendChild(el)
}

async function getEquipment() {
    await fetchEquipment()
    console.log(equipmentList)
    equipmentList.forEach(fillEquipmentDropDown)
}

getEquipment();
