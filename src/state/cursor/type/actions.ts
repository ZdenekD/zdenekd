import ICursor from '.';

enum ActionsEnum {
    set = 'SET_CURSOR',
    unset = 'UNSET_CURSOR'
}

export type IAction = {type: ActionsEnum, payload: ICursor}

export default ActionsEnum;
