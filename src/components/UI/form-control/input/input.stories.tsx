import VariantsEnum from '../../../../enums/VariantsEnum';
import Input from '.';

export default {title: 'UI/Form Control/Input'};

export const base: React.FC = () => (
    <>
        <Input name="input" label="Input" />
        <Input name="input" label="Input" placeholder="Enter some data" />
    </>
);

export const success: React.FC = () => (
    <>
        <Input name="input" label="Input" variant={VariantsEnum.success} />
        <Input name="input" label="Input" placeholder="Enter some data" variant={VariantsEnum.success} />
    </>
);

export const info: React.FC = () => (
    <>
        <Input name="input" label="Input" variant={VariantsEnum.info} />
        <Input name="input" label="Input" placeholder="Enter some data" variant={VariantsEnum.info} />
    </>
);

export const warning: React.FC = () => (
    <>
        <Input name="input" label="Input" variant={VariantsEnum.warning} />
        <Input name="input" label="Input" placeholder="Enter some data" variant={VariantsEnum.warning} />
    </>
);

export const danger: React.FC = () => (
    <>
        <Input name="input" label="Input" variant={VariantsEnum.danger} />
        <Input name="input" label="Input" placeholder="Enter some data" variant={VariantsEnum.danger} />
    </>
);

export const disabled: React.FC = () => (
    <>
        <Input disabled name="input" label="Input" />
        <Input disabled name="input" label="Input" placeholder="Enter some data" />
    </>
);

export const required: React.FC = () => (
    <>
        <Input required name="input" label="Input" />
        <Input required name="input" label="Input" placeholder="Enter some data" />
    </>
);

export const readonly: React.FC = () => (
    <>
        <Input readonly name="input" label="Input" value="Readonly input" />
    </>
);

export const error: React.FC = () => (
    <>
        <Input name="input" label="Input" error="has some error" />
        <Input name="input" label="Input" placeholder="Enter some data" error="has some error" />
        <Input required name="input" label="Input" error="has some error" />
    </>
);

export const maxlength: React.FC = () => (
    <>
        <Input name="input" label="Input" maxlength={32} />
        <Input name="input" label="Input" placeholder="Enter some data" maxlength={32} />
        <Input disabled name="input" label="Input" maxlength={32} />
    </>
);
