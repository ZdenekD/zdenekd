import IProject from '.';

enum ActionsEnum {
    set = 'SET_PROJECT'
}

export type IAction = {type: ActionsEnum, payload?: IProject};

export default ActionsEnum;
