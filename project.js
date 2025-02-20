document.addEventListener("DOMContentLoaded", loadProducts);

function openForm() {
    document.getElementById("product-form").classList.remove("hidden");
}

function closeForm() {
    document.getElementById("product-form").classList.add("hidden");
}

function addProduct() {
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let contact = document.getElementById("contact").value;

    if (title && price && contact) {
        let product = { title, price, contact };
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));

        loadProducts();
        closeForm();
    } else {
        alert("Please fill all fields!");
    }
}

function loadProducts() {
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";

    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.forEach((product, index) => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Contact: ${product.contact}</p>
        `;
        productList.appendChild(productDiv);
    });
}

function searchProducts() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";

    let products = JSON.parse(localStorage.getItem("products")) || [];

    let filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );

    filteredProducts.forEach((product, index) => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Contact: ${product.contact}</p>
        `;
        productList.appendChild(productDiv);
    });
}
  