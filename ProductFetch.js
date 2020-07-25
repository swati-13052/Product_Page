const PRODUCT_FETCH = (function() {
    const productFetchUrl = 'https://jsonplaceholder.typicode.com/users';
    let allProducts = [];

    const setProducts = (products) => {
        products.forEach(product => {
            allProducts.push(product);
        })
    }

    const getProduct = () => {
        return allProducts;
    }

    const addProduct = (product) => {
        const allProductsLength = allProducts.length;
        debugger
        allProducts.push({id: allProductsLength + 1 , ...product});
        DISPLAY_PRODUCTS.displayProductTable(getProduct());
    }

    const deleteProduct = (product) => {
        debugger
        const prodIndex = allProducts.findIndex(prodItem => prodItem.id === product.id);
        if(prodIndex >= 0 ){
            allProducts.splice(prodIndex, 1);
        }
        DISPLAY_PRODUCTS.deleteRow(product.id)
    }

    const getProductData = () => {
        fetch(productFetchUrl)
        .then(response => response.json())
        .then(products => {
           setProducts(products);
        })
        .then(() => {
            DISPLAY_PRODUCTS.displayProductTable(getProduct());
        })
    }
    getProductData();

    return {
        addProduct: addProduct,
        deleteProduct: deleteProduct
    }
})();
