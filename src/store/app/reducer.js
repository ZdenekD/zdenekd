import {APP_IS_ANIMATED} from './actions';

const initialState = {isAnimated: false};

export default (state = initialState, action) => {
    switch (action.type) {
        case APP_IS_ANIMATED:
            return ({
                ...state,
                isAnimated: action.payload,
            });
        default:
            return state;
    }
};
