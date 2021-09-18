import {IMenu} from './types';
import {
    IAction,
    IActions,
    ActionsEnum
} from './types/actions';

const dispatcher = (dispatch: (value: IAction) => void): IActions => ({
    setMenu: (payload: IMenu) => dispatch({
        type: ActionsEnum.set,
        payload,
    }),
});

export {dispatcher};
