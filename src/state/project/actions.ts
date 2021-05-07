import {IProject} from './type';
import {
    IAction,
    IActions,
    ActionsEnum
} from './type/actions';

const dispatcher = (dispatch: (value: IAction) => void): IActions => ({
    setProject: (payload: IProject) => dispatch({
        type: ActionsEnum.set,
        payload,
    }),
});

export {dispatcher};
