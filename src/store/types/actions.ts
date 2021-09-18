import {IActions as IAnimationActions} from '../animation/types/actions';
import {IActions as ICursorActions} from '../cursor/types/actions';
import {IActions as IMenuActions} from '../menu/types/actions';
import {IActions as IMessageActions} from '../message/types/actions';
import {IActions as IProjectActions} from '../project/types/actions';

export type IActions = IAnimationActions | ICursorActions | IMenuActions | IMessageActions | IProjectActions;
