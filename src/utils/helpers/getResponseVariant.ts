import VariantsEnum from '@/enums/VariantsEnum';

const getResponseVariant = (code: number): VariantsEnum => {
    switch (Math.floor(code / 100)) {
        case 2: {
            return VariantsEnum.success;
        }
        case 4: {
            return VariantsEnum.danger;
        }
        case 5: {
            return VariantsEnum.danger;
        }
        default: {
            return VariantsEnum.info;
        }
    }
};

export default getResponseVariant;
