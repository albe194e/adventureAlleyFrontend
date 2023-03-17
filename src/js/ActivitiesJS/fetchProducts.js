

console.log("fetchProducts")
const deleteURL = "http://localhost:8080/deleteActivity"
const urlProducts = "http://localhost:8080/products"
const table = document.getElementById("productTable")




function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

async function deleteActivity(id) {
    console.log(id)

    const deleteReq = {
        method: "DELETE"
    }
    await fetch(deleteURL + "/" + id, deleteReq).catch((error) => console.log(error));
    createProductTable()

}



async function createProductTable() {

    const products = await fetchAny(urlProducts)

    const tableRowsData = products.map(product => `
    <tr>
      <td>${product.name}</td>
      <td>${product.ageLimit}</td>
      <td>${product.price}</td>
      <td>${product.equipment.name}</td>
      <td><button id="${product.activityId}" onclick="deleteActivity(${product.activityId})">delete</button></td>
    </tr>`)

  let tableAsString = tableRowsData.join("\n")
    console.log(tableAsString)
    document.getElementById("productTable").innerHTML = tableAsString


}


createProductTable()
