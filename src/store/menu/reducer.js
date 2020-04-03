import {MENU_IS_OPEN, MENU_IS_ANIMATED} from './actions';

const initialState = {
    isOpen: false,
    isAnimated: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MENU_IS_OPEN:
            return ({
                ...state,
                ...action.payload,
            });
        case MENU_IS_ANIMATED:
            return ({
                ...state,
                ...action.payload,
            });
        default:
            return state;
    }
};
