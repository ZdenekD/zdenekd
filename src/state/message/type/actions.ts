import IMessage from '.';

enum ActionsEnum {
    save = 'SAVE_MESSAGE',
    remove = 'REMOVE_MESSAGE'
}

export type IAction = {type: ActionsEnum, payload?: IMessage};

export default ActionsEnum;
