export const SET_PROJECT = 'SET_PROJECT';

export function setProject(value) {
    return ({
        type: SET_PROJECT,
        payload: value,
    });
}
