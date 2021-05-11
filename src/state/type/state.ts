import {IAnimation} from '../animation/type';
import {ICursor} from '../cursor/type';
import {IMenu} from '../menu/type';
import {IMessage} from '../message/type';
import {IProject} from '../project/type';

export type IState = IAnimation & ICursor & IMenu & IMessage & IProject;
