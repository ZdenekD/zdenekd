import {ICursor} from './type';

const initialState: ICursor = {
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

export default initialState;
