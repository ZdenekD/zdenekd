import {IMessage} from '.';

export enum ActionsEnum {
    set = 'SET_MESSAGE',
    unset = 'UNSET_MESSAGE'
}

export type IAction = {
    readonly type: ActionsEnum,
    readonly payload: IMessage
};

export interface IActions {
    setMessage: (payload: IMessage) => void
    unsetMessage: () => void
}
