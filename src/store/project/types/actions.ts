import {IProject} from '.';

export enum ActionsEnum {
    set = 'SET_PROJECT'
}

export type IAction = {
    readonly type: ActionsEnum,
    readonly payload: IProject
};

export type IActions = {
    setProject: (payload: IProject) => void
}
