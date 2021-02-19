import ICursor from './type';
import ActionsEnum, {IAction} from './type/actions';

export default function setCursor(payload: ICursor): IAction {
    return {
        type: ActionsEnum.save,
        payload,
    };
}
