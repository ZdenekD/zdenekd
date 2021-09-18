import {IAction as IAnimationAction} from '../animation/types/actions';
import {IAction as ICursorAction} from '../cursor/types/actions';
import {IAction as IMenuAction} from '../menu/types/actions';
import {IAction as IMessageAction} from '../message/types/actions';
import {IAction as IProjectAction} from '../project/types/actions';

export type IAction = IAnimationAction | ICursorAction | IMenuAction | IMessageAction | IProjectAction;
