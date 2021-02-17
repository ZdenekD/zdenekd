import ICursor from '.';

enum ActionsEnum {
    save = 'SAVE_POSITION'
}

export type IAction = {type: ActionsEnum, payload: ICursor}

export default ActionsEnum;
