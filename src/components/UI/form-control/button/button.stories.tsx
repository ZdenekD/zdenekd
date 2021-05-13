import Button from '.';
import VariantsEnum from '../../../../enums/VariantsEnum';

export default {title: 'UI/Form Control/Button'};

export const base: React.FC = () => (
    <Button>Button</Button>
);

export const variants: React.FC = () => (
    <>
        <Button variant={VariantsEnum.success}>Success</Button><br />
        <Button variant={VariantsEnum.info}>Info</Button><br />
        <Button variant={VariantsEnum.warning}>Warning</Button><br />
        <Button variant={VariantsEnum.danger}>Danger</Button>
    </>
);

export const disabled: React.FC = () => (
    <Button disabled>Disabled</Button>
);
