import ICursor from '../cursor/type';
import IMenu from '../menu/type';
import IMessage from '../message/type';
import IProject from '../project/type';

type IState = ICursor & IMenu & IMessage & IProject;

export default IState;
