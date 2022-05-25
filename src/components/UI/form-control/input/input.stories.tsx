import React from 'react';
import VariantsEnum from '@/enums/VariantsEnum';
import Input from '.';

export default {title: 'UI/Form Control/Input'};

const props = {
    name: 'input',
    label: 'Input',
};

export const component: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Input
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Input
                placeholder="> Enter some data"
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
        </>
    );
});

export const success: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Input
                variant={VariantsEnum.success}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Input
                placeholder="> Enter some data"
                variant={VariantsEnum.success}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
        </>
    );
});

export const info: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Input
                variant={VariantsEnum.info}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Input
                placeholder="> Enter some data"
                variant={VariantsEnum.info}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
        </>
    );
});

export const warning: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Input
                variant={VariantsEnum.warning}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Input
                placeholder="> Enter some data"
                variant={VariantsEnum.warning}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
        </>
    );
});

export const danger: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Input
                variant={VariantsEnum.danger}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Input
                placeholder="> Enter some data"
                variant={VariantsEnum.danger}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
        </>
    );
});

export const disabled: React.FC = () => (
    <>
        <Input disabled {...props} />
        <Input disabled placeholder="> Enter some data" {...props} />
    </>
);

export const required: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Input
                required
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Input
                required
                placeholder="> Enter some data"
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
        </>
    );
});

export const readonly: React.FC = () => (
    <Input readonly value="Readonly input" {...props} />
);

export const error: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Input
                error="has some error"
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Input
                placeholder="> Enter some data"
                error="has some error"
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Input
                required
                error="has some error"
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
        </>
    );
});

export const maxlength: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Input
                maxlength={32}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Input
                placeholder="> Enter some data"
                maxlength={32}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Input disabled maxlength={32} {...props} />
        </>
    );
});
