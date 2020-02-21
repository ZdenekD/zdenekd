export const MENU_IS_OPEN = 'MENU_IS_OPEN';
export const MENU_IS_ANIMATED = 'MENU_IS_ANIMATED';

export function toggleMenu(value) {
    return ({
        type: MENU_IS_OPEN,
        payload: value,
    });
}

export function handleMenuAnimation(value) {
    return ({
        type: MENU_IS_ANIMATED,
        payload: value,
    });
}
