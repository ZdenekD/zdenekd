import VariantsEnum from '../../../enums/VariantsEnum';

type IMessage = {
    message: {
        variant: VariantsEnum
        content: string | undefined
    }
}

export default IMessage;
