const CART_STORAGE_KEY = 'ecommerce_cart';

// Получить корзину из localStorage
export function getCart() {
    try {
        const cart = localStorage.getItem(CART_STORAGE_KEY);

        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error('Ошибка загрузки корзины:', error);

        return [];
    }
}

// Сохранить корзину в localStorage
export function saveCart(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error('Ошибка сохранения корзины:', error);
    }
}