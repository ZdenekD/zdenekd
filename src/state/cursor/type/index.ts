type ICursor = {
    cursor: {
        isStuck: boolean,
        props: {
            width: number,
            height: number,
            top: number,
            left: number,
        }
    }
}

export const initialState: ICursor = {
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

export default ICursor;
