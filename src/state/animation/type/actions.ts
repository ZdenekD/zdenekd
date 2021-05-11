import {IAnimation} from '.';

export enum ActionsEnum {
    set = 'SET_ANIMATION'
}

export type IAction = {
    readonly type: ActionsEnum,
    readonly payload: IAnimation
}

export interface IActions {
    setAnimation: (payload: IAnimation) => void
}
