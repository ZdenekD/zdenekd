import {APP_IS_ANIMATED} from './actions';

const initialState = {isAnimated: false};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_IS_ANIMATED:
            return ({
                ...state,
                ...action.payload,
            });
        default:
            return state;
    }
};

export default reducer;
