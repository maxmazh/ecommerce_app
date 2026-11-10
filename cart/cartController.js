export function createCartController(model, view, storage) {

    function init() {
        view.render(model.getCart());
    }

    return {
        init
    };
}