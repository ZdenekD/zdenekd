import {IAnimation} from './types';
import {
    IAction,
    IActions,
    ActionsEnum
} from './types/actions';

const dispatcher = (dispatch: (value: IAction) => void): IActions => ({
    setAnimation: (payload: IAnimation) => dispatch({
        type: ActionsEnum.set,
        payload,
    }),
});

export {dispatcher};
