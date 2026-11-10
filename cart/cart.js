import { createCartModel } from './cartModel.js';
import { getCart, saveCart } from './cartStorage.js';
import { createCartView } from './cartView.js';
import { createCartController } from './cartController.js';

// Создаём модель и загружаем сохранённую корзину
const cartModel = createCartModel(getCart());

// Создаём представление
const cartView = createCartView();

// Создаём контроллер
const cartController = createCartController(
    cartModel,
    cartView,
    { saveCart }
);

// Запускаем корзину
cartController.init();