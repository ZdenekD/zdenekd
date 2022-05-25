import React from 'react';
import VariantsEnum from '@/enums/VariantsEnum';
import Textarea from '.';

export default {title: 'UI/Form Control/Textarea'};

const props = {
    name: 'textarea',
    label: 'Textarea',
};

export const component: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

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

export const success: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

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

export const info: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

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

export const warning: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

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

export const danger: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

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

export const disabled: React.FC = () => (
    <>
        <Textarea disabled {...props} />
        <Textarea disabled placeholder="> Enter some data" {...props} />
    </>
);

export const required: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

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

export const readonly: React.FC = () => (
    <Textarea readonly value="Readonly textarea" {...props} />
);

export const error: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

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

export const maxlength: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

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
