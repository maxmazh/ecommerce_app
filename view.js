export function createProductsView(selector) {
    const productsNode = document.querySelector(selector);

    function createProductCard(product) {
        const card = document.createElement('li');
        card.classList.add('product-card');

        const image = document.createElement('img');
        image.src = product.imageURL;
        image.alt = product.title;
        image.onerror = () => {
            image.style.display = 'none';
            console.warn('Картинка не загрузилась:', product.imageURL);
        };

        const item = document.createElement('div');
        item.classList.add('item_product');

        const row = document.createElement('div');
        row.classList.add('row_price');

        const title = document.createElement('h2');
        title.textContent = product.title;

        const description = document.createElement('h3');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.textContent = `$ ${product.price}`;

        const btn = document.createElement('button');
        btn.classList.add('btn_basket');
        btn.type = 'button';

        card.append(image, item);
        item.append(title, description, row);
        row.append(price, btn);

        return card;
    }

    return {
        render(products) {
            productsNode.replaceChildren();

            products.forEach((product) => {
                const card = createProductCard(product);
                productsNode.append(card);
            });
        }
    };
}