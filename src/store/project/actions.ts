import {IProject} from './types';
import {
    IAction,
    IActions,
    ActionsEnum
} from './types/actions';

const dispatcher = (dispatch: (value: IAction) => void): IActions => ({
    setProject: (payload: IProject) => dispatch({
        type: ActionsEnum.set,
        payload,
    }),
});

export {dispatcher};
