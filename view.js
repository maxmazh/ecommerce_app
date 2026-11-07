export function createProductsView(selector) {
    const productsNode = document.querySelector(selector);

    const popupNode = document.querySelector('.js_popup');
    const popupContentNode = document.querySelector('.js_popup_content');
    const btnCloseNode = document.querySelector('.js_popup_close_btn');

    let onProductClick = () => {};

    function createProductCard(product) {
        const card = document.createElement('li');
        card.classList.add('product-card');

        const image = document.createElement('img');
        image.classList.add('img_item');
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

        title.addEventListener('click', () => {
            onProductClick(product.id);
        });

        description.addEventListener('click', () => {
            onProductClick(product.id);
        });

        image.addEventListener('click', () => {
            onProductClick(product.id);
        });

        card.append(image, item);
        item.append(title, description, row);
        row.append(price, btn);

        return card;
    }

    function renderPopup(product) {
        popupContentNode.replaceChildren();

        const image = document.createElement('img');
        image.src = product.imageURL;
        image.alt = product.title;

        const title = document.createElement('h2');
        title.textContent = product.title;

        const description = document.createElement('p');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.textContent = `${product.price} ₽`;

        popupContentNode.append(image,
        title,
        description,
        price
        );

        popupNode.classList.add('popup_item_open');
    }

    function closePopup() {
        popupNode.classList.remove('popup_item_open');
    }

    btnCloseNode.addEventListener('click', closePopup);

    popupNode.addEventListener('click', (event) => {
        if (event.target === popupNode) {
            closePopup();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePopup();
        }
    });


    return {
        setOnProductClick(callback) {
            onProductClick = callback;
        },
        render(products) {
            productsNode.replaceChildren();

            products.forEach((product) => {
                const card = createProductCard(product);
                productsNode.append(card);
            });
        },
        openPopup(product) {
            renderPopup(product);
        },
        closePopup
    };
}