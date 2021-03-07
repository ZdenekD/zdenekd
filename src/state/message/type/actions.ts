import IMessage from '.';

enum ActionsEnum {
    set = 'SET_MESSAGE',
    unset = 'UNSET_MESSAGE'
}

export type IAction = {type: ActionsEnum, payload?: IMessage};

export default ActionsEnum;
