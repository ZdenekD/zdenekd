import {SET_PROJECT} from './actions';

const initialState = {current: 0};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECT:
            return ({
                ...state,
                ...action.payload,
            });
        default:
            return state;
    }
};
