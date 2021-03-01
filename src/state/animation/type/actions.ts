import IAnimation from '.';

enum ActionsEnum {
    set = 'SET_ANIMATION'
}

export type IAction = {type: ActionsEnum, payload: IAnimation}

export default ActionsEnum;
