const CURSOR_STICK = 'CURSOR_STICK';

export const initialState = {
    cursor: {
        isStuck: false,
        props: {
            width: 0,
            height: 0,
            top: 0,
            left: 0,
        },
    },
};

export default (state, action) => {
    console.log(action);


    switch (action.type) {
        case CURSOR_STICK:
            return ({
                ...state,
                ...action.payload,
            });
        default:
            return state;
    }
};
