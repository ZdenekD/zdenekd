import {MENU_IS_OPEN} from './actions';

const initialState = {isOpen: false};

export default (state = initialState, action) => {
    switch (action.type) {
        case MENU_IS_OPEN:
            return ({
                ...state,
                isOpen: action.isOpen,
            });
        default:
            return state;
    }
};
