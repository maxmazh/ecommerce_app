export function createProductsController(model, view, storage) {
    function openProduct(id) {
        const product = model.getProduct(id);

        if (!product) {
            console.error('Товар не найден:', id);
            return;
        }

        view.openPopup(product);
    }

    view.setOnProductClick(openProduct);

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