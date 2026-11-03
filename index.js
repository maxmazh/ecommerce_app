import { getProducts } from './storage.js';

import { createProductsModel } from './model.js';

import { createProductsView } from './view.js';

import { createProductsController } from './controller.js';

const model = createProductsModel();

const view = createProductsView('.js_products');

const controller = createProductsController(
    model,
    view,
    { getProducts }
);

controller.init();