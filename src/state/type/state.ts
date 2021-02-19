import ICursor from '../cursor/type';
import IMenu from '../menu/type';
import IMessage from '../message/type';

type IState = ICursor & IMenu & IMessage;

export default IState;
