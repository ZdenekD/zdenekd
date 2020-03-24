export const SET_PROJECT_NEXT = 'SET_PROJECT_NEXT';
export const SET_PROJECT_PREV = 'SET_PROJECT_PREV';
export const TRIGGER_PROJECT_NEXT = 'TRIGGER_PROJECT_NEXT';
export const TRIGGER_PROJECT_PREV = 'TRIGGER_PROJECT_PREV';

export function setProjectNext(value) {
    return ({
        type: SET_PROJECT_NEXT,
        payload: value,
    });
}

export function setProjectPrev(value) {
    return ({
        type: SET_PROJECT_PREV,
        payload: value,
    });
}

export function triggerProjectNext(value) {
    return ({
        type: TRIGGER_PROJECT_NEXT,
        payload: value,
    });
}

export function triggerProjectPrev(value) {
    return ({
        type: TRIGGER_PROJECT_PREV,
        payload: value,
    });
}
