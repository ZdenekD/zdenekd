type IProject = {
    project: {
        index: number
        isFirst: boolean
        isLast: boolean
    }
}

export const initialState: IProject = {
    project: {
        index: 0,
        isFirst: true,
        isLast: false,
    },
};

export default IProject;
