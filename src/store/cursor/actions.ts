import initialState from './initialState';
import {ICursor} from './types';
import {
    IAction,
    IActions,
    ActionsEnum
} from './types/actions';

const dispatcher = (dispatch: (value: IAction) => void): IActions => ({
    setCursor: (payload: ICursor) => dispatch({
        type: ActionsEnum.set,
        payload,
    }),
    unsetCursor: () => dispatch({
        type: ActionsEnum.unset,
        payload: initialState,
    }),
});

export {dispatcher};
