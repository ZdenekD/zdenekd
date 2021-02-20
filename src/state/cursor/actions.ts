import ICursor, {initialState} from './type';
import ActionsEnum, {IAction} from './type/actions';

export function setCursor(payload: ICursor): IAction {
    return {
        type: ActionsEnum.set,
        payload,
    };
}

export function unsetCursor(): IAction {
    return {
        type: ActionsEnum.unset,
        payload: {...initialState},
    };
}
