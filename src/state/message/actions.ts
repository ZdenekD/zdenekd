import IMessage, {initialState} from './type';
import ActionsEnum, {IAction} from './type/actions';

export function saveMessage(payload: IMessage): IAction {
    return {
        type: ActionsEnum.save,
        payload,
    };
}

export function removeMessage(): IAction {
    return {
        type: ActionsEnum.remove,
        payload: {...initialState},
    };
}
