import Icon, {IconsEnum} from '.';

export default {title: 'UI/Icons'};

export const component = () => (
    <>
        <Icon variant={IconsEnum.brandGithub} />
        <Icon variant={IconsEnum.message} />
    </>
);

export const size = () => (
    <>
        <Icon variant={IconsEnum.brandGithub} size={64} />
        <Icon variant={IconsEnum.message} size={64} />
    </>
);
