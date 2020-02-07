export const MENU_IS_OPEN = 'MENU_IS_OPEN';

export function toggleMenu(isOpen) {
    return ({
        type: MENU_IS_OPEN,
        isOpen,
    });
}
