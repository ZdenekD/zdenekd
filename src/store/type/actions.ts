import {IActions as IAnimationActions} from '../animation/type/actions';
import {IActions as ICursorActions} from '../cursor/type/actions';
import {IActions as IMenuActions} from '../menu/type/actions';
import {IActions as IMessageActions} from '../message/type/actions';
import {IActions as IProjectActions} from '../project/type/actions';

export type IActions = IAnimationActions | ICursorActions | IMenuActions | IMessageActions | IProjectActions;
