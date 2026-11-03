export function createProductsModel() {
    let products = [];

    return {
        setProducts(newProducts) {
            products = newProducts;
        },

        getProducts() {
            return products;
        },

        getProduct(id) {
            return products.find((product) => product.id === id);
        }
    };
}