export const CURSOR_STICK = 'CURSOR_STICK';

export function handleCursor(value) {
    return ({
        type: CURSOR_STICK,
        payload: value,
    });
}
