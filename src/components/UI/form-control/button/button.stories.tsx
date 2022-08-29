import VariantsEnum from '@/enums/VariantsEnum';
import Button from '.';

export default {title: 'UI/Form Control/Button'};

export const component = () => (
    <Button>Button</Button>
);

export const variants = () => (
    <>
        <Button variant={VariantsEnum.success}>Success</Button><br />
        <Button variant={VariantsEnum.info}>Info</Button><br />
        <Button variant={VariantsEnum.warning}>Warning</Button><br />
        <Button variant={VariantsEnum.danger}>Danger</Button>
    </>
);

export const disabled = () => (
    <Button disabled>Disabled</Button>
);
