const activitiesURL = "http://localhost:8080/products";
const activityOptions = document.getElementById("activities");
const timeSlotsTable = document.getElementById("timeSlotsTable");
const timeSlotsByActivityURL = "http://localhost:8080/timeslotsByActivity";
const btn = document.getElementById("submitTimeslot");

let selectedTimeslot;


function fetchAny(URL) {
    return fetch(URL)
        .then(response => response.json())
}


async function actionActivities() {

    const activities = await fetchAny(activitiesURL)

    activities.forEach(activity => {
        const option = document.createElement('option');
        option.textContent = activity.name;
        option.value = activity.activityId;
        activityOptions.appendChild(option);
    })
}


async function createTimeslotsTable() {

    timeSlotsTable.innerHTML = "";

    const activityId = activityOptions.value;
    const timeSlots = await fetchAny(timeSlotsByActivityURL + "/" + activityId);


    timeSlots.forEach(timeSlot => {

        if (!timeSlot.booked){
            const row = timeSlotsTable.insertRow();

            const dateCell = row.insertCell();
            const startTimeCell = row.insertCell();
            const endtimeCell = row.insertCell();
            const selectCell = row.insertCell();

            dateCell.textContent = timeSlot.date;
            startTimeCell.textContent = timeSlot.startTime;
            endtimeCell.textContent = timeSlot.endTime;


            const input = document.createElement('input');
            input.type = "checkbox";
            input.value = timeSlot.timeSlotId;
            input.id = timeSlot.timeSlotId;
            input.addEventListener('click', () => {
                selectedTimeslot = input.value
            });
            selectCell.appendChild(input);

            row.appendChild(dateCell);
            row.appendChild(startTimeCell);
            row.appendChild(endtimeCell);
            row.appendChild(selectCell);

            timeSlotsTable.appendChild(row);
        }


    })
}

async function createNewReservation() {

    const customer = await fetchAny('http://localhost:8080/customer/1')
    const timeslot = await fetchAny('http://localhost:8080/timeSlot/' + selectedTimeslot)

    let newReservation = {"reservationId": 0, "customer": customer, "timeSlot": timeslot}

    const postReq = {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: {}
    }

    postReq.body = JSON.stringify(newReservation)

    return await fetch("http://localhost:8080/createReservation", postReq).then((response) => response.json()).catch((error) => console.log(error));
}


function newReservationAction() {

    let response = createNewReservation()

    console.log(response)
}


activityOptions.addEventListener('change', createTimeslotsTable);
actionActivities();
btn.addEventListener('click', newReservationAction);

