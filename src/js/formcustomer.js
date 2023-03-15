console.log("Vi er i create new account")

document.addEventListener('DOMContentLoaded', createFormEventListener);
let formCustomer;

function createFormEventListener() {
    formCustomer = document.getElementById("formCustomer");
    formCustomer.addEventListener("submit", handleFormSubmit);
}

async function handleFormSubmit(event) {
//Vi handler submit her, i stedet for default html behaviour
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;
    console.log(form)
    console.log(url)
    console.log(form === formCustomer)
    try {
        const formData = new FormData(form)
        console.log(formData)
        const responseData = await postFormData(url, formData)
    } catch (error) {
        alert(error.message)
        console.log(error)
    }
}

async function postFormData(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries())
    console.log(plainFormData)
    /*const ix = cnCustomer.selectedIndex;
    console.log(ix)
    const linje = cnCustomer[ix]
    console.log(linje.customer)
    plainFormData.customer = linje.customer*/
    const formDataJsonString = JSON.stringify(plainFormData)
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: formDataJsonString

    }
    const response = await fetch(url, fetchOptions)
    if (!response.ok) {
        const errorMessage = await response.text()
        throw new Error(errorMessage)
    }
    return response.json();
}

const cnCustomer = document.getElementById("cnCustomer")

