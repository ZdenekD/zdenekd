import {IAction as ICursorAction} from '../cursor/type/actions';
import {IAction as IMenuAction} from '../menu/type/actions';
import {IAction as IMessageAction} from '../message/type/actions';

type IAction = ICursorAction | IMenuAction | IMessageAction;

export default IAction;
