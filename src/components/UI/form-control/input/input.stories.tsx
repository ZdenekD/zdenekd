
import {createElement, useState} from 'react';
import {VariantsEnum} from '@/enums';
import Input from '.';

export default {title: 'UI/Form Control/Input'};

const props = {
    name: 'input',
    label: 'Input',
};

export const component = () => createElement(() => {
    const [value, setValue] = useState('');

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

export const success = () => createElement(() => {
    const [value, setValue] = useState('');

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

export const info = () => createElement(() => {
    const [value, setValue] = useState('');

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

export const warning = () => createElement(() => {
    const [value, setValue] = useState('');

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

export const danger = () => createElement(() => {
    const [value, setValue] = useState('');

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

export const disabled = () => (
    <>
        <Input disabled {...props} />
        <Input disabled placeholder="> Enter some data" {...props} />
    </>
);

export const required = () => createElement(() => {
    const [value, setValue] = useState('');

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

export const readonly = () => (
    <Input readonly value="Readonly input" {...props} />
);

export const error = () => createElement(() => {
    const [value, setValue] = useState('');

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

export const maxlength = () => createElement(() => {
    const [value, setValue] = useState('');

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
