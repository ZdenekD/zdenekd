import VariantsEnum from '@/utils/enums/VariantsEnum';

export type IMessage = {
    message: {
        variant: VariantsEnum
        content: string | undefined
    }
}
