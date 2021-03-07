import IAnimation from './type';
import ActionsEnum, {IAction} from './type/actions';

export default function setAnimation(payload: IAnimation): IAction {
    return {
        type: ActionsEnum.set,
        payload,
    };
}
