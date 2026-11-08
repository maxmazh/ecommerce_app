export function createCartModel(initialCart = []) {
    let cart = initialCart.map(item => ({ ...item }));

    return {
        // Получить все товары из корзины
        getCart() {
            return cart;
        },

        // Добавить товар в корзину
        addToCart(product) {
            const existingProduct = cart.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                const cartItem = {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    imageURL: product.imageURL,
                    quantity: 1
                };

                cart.push(cartItem);
            }

            return cart;
        },

        // Удалить товар из корзины
        removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);

            return cart;
        },

        // Очистить корзину
        clearCart() {
            cart = [];

            return cart;
        }
    };
}