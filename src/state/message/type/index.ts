import VariantsEnum from '../../../enums/VariantsEnum';

type IMessage = {
    message: {
        variant: VariantsEnum
        content: string | undefined
    }
}

export const initialState: IMessage = {message: {variant: VariantsEnum.info, content: undefined}};

export default IMessage;
