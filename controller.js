export function createProductsController(
    model,
    view,
    storage
) {
    return {
        async init() {
            try {
                const products = await storage.getProducts();

                model.setProducts(products);

                view.render(model.getProducts());
            } catch (error) {
                console.error('Ошибка загрузки товаров:', error);
            }
        }
    };
}