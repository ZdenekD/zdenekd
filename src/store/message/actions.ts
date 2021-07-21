import initialState from './initialState';
import {IMessage} from './type';
import {
    IAction,
    IActions,
    ActionsEnum
} from './type/actions';

const dispatcher = (dispatch: (value: IAction) => void): IActions => ({
    setMessage: (payload: IMessage) => dispatch({
        type: ActionsEnum.set,
        payload,
    }),
    unsetMessage: () => dispatch({
        type: ActionsEnum.unset,
        payload: initialState,
    }),
});

export {dispatcher};
