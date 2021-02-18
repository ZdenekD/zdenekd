import VariantsEnum from '../../../enums/VariantsEnum';
import Input from '.';

export default {title: 'UI/Input'};

export const base: React.FC = () => (
    <>
        <Input name="input" label="Input" />
        <Input name="input" label="Input" placeholder="Enter some data" />
    </>
);

export const variants: React.FC = () => (
    <>
        <Input name="input" label="Input" variant={VariantsEnum.success} />
        <Input name="input" label="Input" variant={VariantsEnum.info} />
        <Input name="input" label="Input" variant={VariantsEnum.warning} />
        <Input name="input" label="Input" variant={VariantsEnum.danger} />
    </>
);

export const disabled: React.FC = () => (
    <Input disabled name="input" label="Input" />
);

export const required: React.FC = () => (
    <Input required name="input" label="Input" />
);

export const error: React.FC = () => (
    <>
        <Input name="input" label="Input" error="has some error" />
        <Input required name="input" label="Input" error="has some error" />
    </>
);

export const maxLength: React.FC = () => (
    <>
        <Input name="input" label="Input" maxLength={32} />
        <Input disabled name="input" label="Input" maxLength={32} />
    </>
);
