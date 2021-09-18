import initialState from './initialState';
import {IMessage} from './types';
import {
    IAction,
    IActions,
    ActionsEnum
} from './types/actions';

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
