import VariantsEnum from '../../../enums/VariantsEnum';

export type IMessage = {
    message: {
        variant: VariantsEnum
        content: string | undefined
    }
}
