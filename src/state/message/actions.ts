import IMessage from './type';
import initialState from './initialState';
import ActionsEnum, {IAction} from './type/actions';

export function setMessage(payload: IMessage): IAction {
    return {
        type: ActionsEnum.set,
        payload,
    };
}

export function unsetMessage(): IAction {
    return {
        type: ActionsEnum.unset,
        payload: initialState,
    };
}
