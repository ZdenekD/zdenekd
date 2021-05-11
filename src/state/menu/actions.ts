import {IMenu} from './type';
import {
    IAction,
    IActions,
    ActionsEnum
} from './type/actions';

const dispatcher = (dispatch: (value: IAction) => void): IActions => ({
    setMenu: (payload: IMenu) => dispatch({
        type: ActionsEnum.set,
        payload,
    }),
});

export {dispatcher};
