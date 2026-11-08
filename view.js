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

        const item = document.createElement('div');
        item.classList.add('popup_item_product');

        const short_item_wr = document.createElement('div');
        short_item_wr.classList.add('popup_short_item_wrapper');

        const full_item = document.createElement('div');
        full_item.classList.add('popup_full_item');
        
        const image = document.createElement('img');
        image.classList.add('img_popup_item');
        image.src = product.imageURL;
        image.alt = product.title;
        image.onerror = () => {
            image.style.display = 'none';
            console.warn('Картинка не загрузилась:', product.imageURL);
        };

        const short_item = document.createElement('div');
        short_item.classList.add('popup_short_item');

        const title = document.createElement('h2');
        title.textContent = product.title;

        const description = document.createElement('h3');
        description.textContent = product.description;

        const evaluation = document.createElement('img');
        evaluation.classList.add('img_popup_evaluation');
        evaluation.src = "/resourses/evaluation1.svg";

        const price = document.createElement('p');
        price.classList.add('product_price');
        price.textContent = `$ ${product.price}`;

        const short_description_text = document.createElement('p');
        short_description_text.classList.add('short_description_text');
        short_description_text.textContent = product.short_description_text;


        const full_description_title = document.createElement('h4');
        full_description_title.textContent = "Описание";

        const full_description_text = document.createElement('p');
        full_description_text.classList.add('full_description_text');
        full_description_text.textContent = product.full_description_text;

        popupContentNode.append(short_item_wr, full_item);

        short_item_wr.append(image, short_item);

        full_item.append(full_description_title, full_description_text);

        short_item.append(title, description, evaluation, price, short_description_text);

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