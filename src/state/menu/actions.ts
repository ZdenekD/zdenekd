import IMenu from './type';
import ActionsEnum, {IAction} from './type/actions';

export default function setMenu(payload: IMenu): IAction {
    return {
        type: ActionsEnum.set,
        payload,
    };
}
