const ADD_PRODUCT = (function(){
    //constants to get div 
    const buttonDiv = document.getElementById("addButton");

    //new Product Object
    let newProduct = {
        name: "", 
        username: "",
        email: "", 
        website: "", 
        suite: "", 
        street: "", 
        phone: ""
    };

    //Keys required to add product in
    const productKeys = {
        name: "", username: "", email: "", website: "", suite: "", street: "", phone: ""
    }

    //Show form when Add product button is clicked
    buttonDiv.addEventListener("click", () => {
        const addProductForm = document.getElementById("addForm");
        if(!addProductForm.innerHTML) {
            showAddForm();
        }
    })

    //Display add Product form
    const showAddForm = () => {
        const addProductForm = document.getElementById("addForm");
        addProductForm.classList.add("addForm");
        addProductForm.classList.remove("hide");

        //Display input fields to add product
        Object.keys(productKeys).forEach(newProductKey => {
            let inputDiv = document.createElement("input");
            inputDiv.setAttribute("class", "addFormInput")
            inputDiv.setAttribute("value", newProduct[newProductKey]);
            inputDiv.placeholder = newProductKey;
            inputDiv.addEventListener("change", (event) => {
                const value = event.target.value;
                handleAddFormChange(newProductKey, value)
            });
            addProductForm.appendChild(inputDiv);
        });

        //Add button to add new product
        let addFormButton = document.createElement("button");
        addFormButton.innerText = "Add +";
        addFormButton.setAttribute("id", "addFormButton");
        addFormButton.addEventListener("click", saveProduct );
        addFormButton.classList.add("hide");
        addFormButton.classList.add("addButton");
        addProductForm.appendChild(addFormButton);

        //Cancel button to cancel add form
        let cancelFormbutton = document.createElement("button");
        cancelFormbutton.innerText = "Cancel";
        cancelFormbutton.classList.add("addButton");
        cancelFormbutton.addEventListener("click", clearFormData );
        addProductForm.appendChild(cancelFormbutton);

    }

    const handleAddFormChange = (key, value) => {
        newProduct[key] = value;
        validateForm();
    }

    //validate form on every change in input fields
    const validateForm = () => {
        const isValidated =  VALIDATE_FORM.validateForm(newProduct);

        const addFormButton = document.getElementById("addFormButton");
        if(isValidated && addFormButton) {
            addFormButton.classList.remove("hide");
        }
    }

    //Add product once product is validated successfully
    const saveProduct = () => {
        let productToBeSaved = {
            name: newProduct.name,
            email: newProduct.email,
            username: newProduct.username,
            phone: newProduct.phone,
            website: newProduct.website,
            address:  {
                suite : newProduct.suite,
                street: newProduct.street
            }
        }
        PRODUCT_FETCH.addProduct(productToBeSaved);
        clearFormData();
    }

    //Once added clear new product and new product form
    const clearFormData = () => {
        const addProductForm = document.getElementById("addForm");
        newProduct = {
            name: "", 
            username: "",
            email: "", 
            website: "", 
            suite: "", 
            street: "", 
            phone: ""
        };
        addProductForm.innerHTML = "";
        addProductForm.classList.add("hide")
    }
})();