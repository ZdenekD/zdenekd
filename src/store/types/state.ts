import {IAnimation} from '../animation/types';
import {ICursor} from '../cursor/types';
import {IMenu} from '../menu/types';
import {IMessage} from '../message/types';
import {IProject} from '../project/types';

export type IState = IAnimation | ICursor | IMenu | IMessage | IProject;
