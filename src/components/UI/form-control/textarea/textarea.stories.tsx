import VariantsEnum from '../../../../enums/VariantsEnum';
import Textarea from '.';

export default {title: 'UI/Textarea'};

export const base: React.FC = () => (
    <>
        <Textarea name="textarea" label="Textarea" />
        <Textarea name="textarea" label="Textarea" placeholder="Enter some data" />
    </>
);

export const success: React.FC = () => (
    <>
        <Textarea name="textarea" label="Textarea" variant={VariantsEnum.success} />
        <Textarea name="textarea" label="Textarea" placeholder="Enter some data" variant={VariantsEnum.success} />
    </>
);

export const info: React.FC = () => (
    <>
        <Textarea name="textarea" label="Textarea" variant={VariantsEnum.info} />
        <Textarea name="textarea" label="Textarea" placeholder="Enter some data" variant={VariantsEnum.info} />
    </>
);

export const warning: React.FC = () => (
    <>
        <Textarea name="textarea" label="Textarea" variant={VariantsEnum.warning} />
        <Textarea name="textarea" label="Textarea" placeholder="Enter some data" variant={VariantsEnum.warning} />
    </>
);

export const danger: React.FC = () => (
    <>
        <Textarea name="textarea" label="Textarea" variant={VariantsEnum.danger} />
        <Textarea name="textarea" label="Textarea" placeholder="Enter some data" variant={VariantsEnum.danger} />
    </>
);

export const disabled: React.FC = () => (
    <>
        <Textarea disabled name="textarea" label="Textarea" />
        <Textarea disabled name="textarea" label="Textarea" placeholder="Enter some data" />
    </>
);

export const required: React.FC = () => (
    <>
        <Textarea required name="textarea" label="Textarea" />
        <Textarea required name="textarea" label="Textarea" placeholder="Enter some data" />
    </>
);

export const error: React.FC = () => (
    <>
        <Textarea name="textarea" label="Textarea" error="has some error" />
        <Textarea name="textarea" label="Textarea" error="has some error" placeholder="Enter some data" />
        <Textarea required name="textarea" label="Textarea" error="has some error" />
    </>
);

export const maxlength: React.FC = () => (
    <>
        <Textarea name="textarea" label="Textarea" maxlength={255} />
        <Textarea name="textarea" label="Textarea" maxlength={255} placeholder="Enter some data" />
        <Textarea disabled name="textarea" label="Textarea" maxlength={255} />
    </>
);
