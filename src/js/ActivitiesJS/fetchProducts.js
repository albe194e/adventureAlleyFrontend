

console.log("fetchProducts")
const urlProducts = "http://localhost:8081/products"
const table = document.getElementById("productTable")

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}



async function createProductTable() {
    const products = await fetchAny(urlProducts)
    console.log(products)
    const tableRowsData = products.map(product => `
    <tr>
      <td>${product.name}</td>
      <td>${product.ageLimit}</td>
      <td>${product.price}</td>
      <td>${product.equipment.name}</td>
    </tr>`)

  let tableAsString = tableRowsData.join("\n")
    console.log(tableAsString)
    document.getElementById("productTable").innerHTML = tableAsString


}

createProductTable()
