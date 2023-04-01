
import {createElement, useState} from 'react';
import {VariantsEnum} from '@/enums';
import Textarea from '.';

export default {title: 'UI/Form Control/Textarea'};

const props = {
    name: 'textarea',
    label: 'Textarea',
};

export const component = () => createElement(() => {
    const [value, setValue] = useState('');

    return (
        <>
            <Textarea
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Textarea
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
            <Textarea
                variant={VariantsEnum.success}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Textarea
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
            <Textarea
                variant={VariantsEnum.info}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Textarea
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
            <Textarea
                variant={VariantsEnum.warning}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Textarea
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
            <Textarea
                variant={VariantsEnum.danger}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Textarea
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
        <Textarea disabled {...props} />
        <Textarea disabled placeholder="> Enter some data" {...props} />
    </>
);

export const required = () => createElement(() => {
    const [value, setValue] = useState('');

    return (
        <>
            <Textarea
                required
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Textarea
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
    <Textarea readonly value="Readonly textarea" {...props} />
);

export const error = () => createElement(() => {
    const [value, setValue] = useState('');

    return (
        <>
            <Textarea
                error="has some error"
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Textarea
                placeholder="> Enter some data"
                error="has some error"
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Textarea
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
            <Textarea
                maxlength={255}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Textarea
                placeholder="> Enter some data"
                maxlength={255}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
            <Textarea
                disabled
                maxlength={255}
                value={value}
                onChange={event => setValue(event.target.value)}
                {...props}
            />
        </>
    );
});
