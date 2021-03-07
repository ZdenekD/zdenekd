import IAnimation from '../animation/type';
import ICursor from '../cursor/type';
import IMenu from '../menu/type';
import IMessage from '../message/type';
import IProject from '../project/type';

type IState = IAnimation
    & ICursor
    & IMenu
    & IMessage
    & IProject;

export default IState;
