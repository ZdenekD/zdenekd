import {IMenu} from '.';

export enum ActionsEnum {
    set = 'SET_MENU'
}

export type IAction = {
    readonly type: ActionsEnum,
    readonly payload: IMenu
}

export type IActions = {
    setMenu: (payload: IMenu) => void
}
