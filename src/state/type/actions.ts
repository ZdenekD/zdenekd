import {IAction as ICursorAction} from '../cursor/type/actions';
import {IAction as IMenuAction} from '../menu/type/actions';
import {IAction as IMessageAction} from '../message/type/actions';
import {IAction as IProjectAction} from '../project/type/actions';

type IAction = ICursorAction | IMenuAction | IMessageAction | IProjectAction;

export default IAction;
