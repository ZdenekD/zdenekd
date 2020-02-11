export const APP_IS_ANIMATED = 'APP_IS_ANIMATED';

export function handleAppAnimation(value) {
    return ({
        type: APP_IS_ANIMATED,
        payload: value,
    });
}
