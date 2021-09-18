import initialState from './initialState';
import {
    IAction,
    IActions,
    ActionsEnum
} from './types/actions';
import {IMessage} from './types';

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
