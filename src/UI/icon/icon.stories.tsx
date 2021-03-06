import Icon, {IconsEnum} from '.';

export default {title: 'UI/Icons'};

export const base: React.FC = () => (
    <>
        <Icon variant={IconsEnum.brandGithub} />
        <Icon variant={IconsEnum.message} />
    </>
);

export const size: React.FC = () => (
    <>
        <Icon variant={IconsEnum.brandGithub} size={64} />
        <Icon variant={IconsEnum.message} size={64} />
    </>
);
