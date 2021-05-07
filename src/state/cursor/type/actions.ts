import {ICursor} from '.';

export enum ActionsEnum {
    set = 'SET_CURSOR',
    unset = 'UNSET_CURSOR'
}

export type IAction = {
    readonly type: ActionsEnum,
    readonly payload: ICursor
};

export interface IActions {
    setCursor: (payload: ICursor) => void
    unsetCursor: () => void
}
