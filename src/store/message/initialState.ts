import {IMessage} from './type';
import VariantsEnum from '../../utils/enums/VariantsEnum';

const initialState: IMessage = {message: {variant: VariantsEnum.info, content: undefined}};

export default initialState;
