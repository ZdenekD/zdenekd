import {IAction as ICursorAction} from '../cursor/type/actions';
import {IAction as IMessageAction} from '../message/type/actions';

type IAction = ICursorAction | IMessageAction;

export default IAction;
