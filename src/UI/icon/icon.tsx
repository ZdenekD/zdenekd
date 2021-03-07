import {IconBrandGithub, IconMessage} from '@tabler/icons';

export enum IconsEnum {
    message = 'message',
    brandGithub = 'brandGithub'
}

interface IIcon {
    variant: IconsEnum,
    size?: number
}

const Icon: React.FC<IIcon> = ({variant, size = 28}) => (
    <>
        {variant === IconsEnum.brandGithub && (
            <IconBrandGithub
                size={size}
                stroke={1}
            />
        )}

        {variant === IconsEnum.message && (
            <IconMessage
                size={size}
                stroke={1}
            />
        )}
    </>
);

export default Icon;
