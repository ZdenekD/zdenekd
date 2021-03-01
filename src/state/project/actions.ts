import IProject from './type';
import ActionsEnum, {IAction} from './type/actions';

export default function setProject(payload: IProject): IAction {
    return {
        type: ActionsEnum.set,
        payload,
    };
}
