import VariantsEnum from '../../enums/VariantsEnum';

export interface IData {
    [key: string]: string
}

export interface IResponse {
    variant: VariantsEnum
    message: string
}
