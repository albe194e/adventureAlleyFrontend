const firstName = document.getElementById("fornavn");
const lastName = document.getElementById("efternavn");
const email = document.getElementById("email");
const phone = document.getElementById("telefon");
const address = document.getElementById("adresse");
const username = document.getElementById("username");
const reservationTable = document.getElementById("reserveringer");

const customerURL = "http://localhost:8080/customer";
const reservationByCustomer = "http://localhost:8080/getReservationByCustomer/";

function fetchAny(URL) {
    return fetch(URL).then((response) => response.json());
}

async function showReservations(){

    const reservations = await fetchAny(reservationByCustomer + 1);

    reservations.forEach(reservation => {

        const row = reservationTable.insertRow();

        const activityName = row.insertCell();
        const date = row.insertCell();
        const startTime = row.insertCell();
        const endTime = row.insertCell();

        activityName.textContent = reservation.timeSlot.activity.name;
        date.textContent = reservation.timeSlot.date;
        startTime.textContent = reservation.timeSlot.startTime;
        endTime.textContent = reservation.timeSlot.endTime;

        row.appendChild(activityName);
        row.appendChild(date);
        row.appendChild(startTime);
        row.appendChild(endTime);
    });
}

async function fillCustomerInfo() {
    const customer = await fetchAny(customerURL + '/' + 1)

    firstName.textContent = 'Fornavn: ' + customer.firstName;
    lastName.textContent = 'Efternavn: ' + customer.lastName;
    email.textContent = 'Email: ' + customer.email;
    phone.textContent = 'Telefon: ' + customer.phone;
    address.textContent = 'Adresse: ' + customer.address;
    username.textContent = 'Brugernavn: ' + customer.username;

}

fillCustomerInfo();
showReservations();

