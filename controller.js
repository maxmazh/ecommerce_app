export function createProductsController(model, view, storage, cartModel, cartStorage) {
    function openProduct(id) {
        const product = model.getProduct(id);

        if (!product) {
            console.error('Товар не найден:', id);
            return;
        }

        view.openPopup(product);
    }

    view.setOnProductClick(openProduct);
    view.setOnAddToCart(addToCart);

    function addToCart(id) {
        const product = model.getProduct(id);

        if (!product) {
            console.error('Товар не найден:', id);
            return;
        }

        const cart = cartModel.addToCart(product);

        cartStorage.saveCart(cart);

        view.renderCart(cart);

        console.log('Корзина:', cart);
    }

    return {
        async init() {
            try {
                const products = await storage.getProducts();

                model.setProducts(products);

                view.render(model.getProducts());

                view.renderCart(cartModel.getCart());
            } catch (error) {
                console.error('Ошибка загрузки товаров:', error);
            }
        }
    };
}