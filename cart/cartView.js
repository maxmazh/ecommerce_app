
export function createCartView() {
    const cartProductsNode = document.querySelector('.js_cart_products');

    const totalQuantityNode = document.querySelector('.js_cart_total_quantity');

    const totalPriceNode = document.querySelector('.js_cart_total_price');

    // Создание карточки товара
    function createCartProduct(product) {
        const item = document.createElement('div');
        item.classList.add('cart_product');

        const image = document.createElement('img');
        image.classList.add('cart_product_img');
        image.src = product.imageURL;
        image.alt = product.title;
        image.onerror = () => {
            image.onerror = null;
            image.src = '/resourses/img_nodownload.png';
        };

        const info = document.createElement('div');
        info.classList.add('cart_product_info');

        const title = document.createElement('h3');
        title.textContent = product.title;

        const price = document.createElement('p');
        price.textContent = `$ ${product.price}`;

        info.append(title, price);

        item.append(image, info);

        return item;
    }

    // Отображение всех товаров корзины
    function render(cart) {
        cartProductsNode.replaceChildren();

        cart.forEach((product) => {
            const productNode = createCartProduct(product);

            cartProductsNode.append(productNode);
        });
    }

    return {
        render
    };
}
