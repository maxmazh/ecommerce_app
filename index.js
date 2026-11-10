import { getProducts } from './storage.js';

import { createProductsModel } from './model.js';

import { createProductsView } from './view.js';

import { createProductsController } from './controller.js';

import { createCartModel } from './cart/cartModel.js';

import { getCart, saveCart } from './cart/cartStorage.js';

const model = createProductsModel();

const cartModel = createCartModel(getCart());

const view = createProductsView('.js_products');

const controller = createProductsController(
    model,
    view,
    { getProducts },
    cartModel,
    { saveCart }
);

controller.init();