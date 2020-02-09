export const MENU_IS_OPEN = 'MENU_IS_OPEN';

export function toggleMenu(value) {
    return ({
        type: MENU_IS_OPEN,
        payload: value,
    });
}
