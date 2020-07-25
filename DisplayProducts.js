const DISPLAY_PRODUCTS = (function () {
    const productDiv = document.getElementById("productDiv");
    productDiv.setAttribute("class", "productDiv");

    const headers = { name: "Name", username: "Username", email: "Email", phone: "Phone", website: "Website", address: { suite: "Address" }, delete: "Delete" }

    const displayProductTable = (products) => {
        displayProductTableHeader();
        displayProducts(products, true);
    }

    const displayProductTableHeader = () => {
        displayProducts([headers])
    }

    const displayProducts = (products, isRow) => {
        products.forEach((product, index) => {
            let isRowAlreadyAdded = document.getElementById(product.id);
            if (!isRowAlreadyAdded) {
                let productRow = document.createElement("div");
                productRow.setAttribute("class", "productRow")
                Object.keys(headers).forEach(header=> {
                    let div = document.createElement("div");
                    if(header === "address") {
                        div.innerText = `${product.address.suite ? product.address.suite : ""},${product.address.street ? product.address.street : ""} `;
                        productRow.appendChild(div);
                    } else if ( header === "delete") {
                        let deleteButton = document.createElement("button");
                        deleteButton.innerText = "Delete";
                        deleteButton.classList.add("addButton");
                        deleteButton.addEventListener("click", () => PRODUCT_FETCH.deleteProduct(product));
                        if(isRow) {
                            productRow.appendChild(deleteButton);
                        } else {
                            div.innerText = "Delete"
                            productRow.appendChild(div);
                        }
                    } else {
                        div.innerText = product[header];
                        productRow.appendChild(div);
                    }
                });

                productRow.setAttribute("id", product.id);
                productRow.setAttribute("value", product);
                productDiv.appendChild(productRow);
            }
        });
    }

    const deleteRow = (index) => {
        let prodRow = document.getElementById(index);
        productDiv.removeChild(prodRow);
    }

    return {
        displayProductTable: displayProductTable,
        deleteRow: deleteRow
    }
})();
