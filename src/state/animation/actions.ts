import {IAnimation} from './type';
import {
    IAction,
    IActions,
    ActionsEnum
} from './type/actions';

const dispatcher = (dispatch: (value: IAction) => void): IActions => ({
    setAnimation: (payload: IAnimation) => dispatch({
        type: ActionsEnum.set,
        payload,
    }),
});

export {dispatcher};
