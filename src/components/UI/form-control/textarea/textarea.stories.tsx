import React from 'react';
import VariantsEnum from '@/enums/VariantsEnum';
import Textarea from '.';

export default {title: 'UI/Form Control/Textarea'};

const defaultProps = {
    name: 'input',
    label: 'Label',
};

export const component: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Textarea
                {...defaultProps}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <Textarea
                {...defaultProps}
                value={value}
                placeholder="Enter some data"
                onChange={event => setValue(event.target.value)}
            />
        </>
    );
});

export const success: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Textarea
                {...defaultProps}
                value={value}
                variant={VariantsEnum.success}
                onChange={event => setValue(event.target.value)}
            />
            <Textarea
                {...defaultProps}
                value={value}
                variant={VariantsEnum.success}
                placeholder="Enter some data"
                onChange={event => setValue(event.target.value)}
            />
        </>
    );
});

export const info: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Textarea
                {...defaultProps}
                value={value}
                variant={VariantsEnum.info}
                onChange={event => setValue(event.target.value)}
            />
            <Textarea
                {...defaultProps}
                value={value}
                variant={VariantsEnum.info}
                placeholder="Enter some data"
                onChange={event => setValue(event.target.value)}
            />
        </>
    );
});

export const warning: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Textarea
                {...defaultProps}
                value={value}
                variant={VariantsEnum.warning}
                onChange={event => setValue(event.target.value)}
            />
            <Textarea
                {...defaultProps}
                value={value}
                variant={VariantsEnum.warning}
                placeholder="Enter some data"
                onChange={event => setValue(event.target.value)}
            />
        </>
    );
});

export const danger: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Textarea
                {...defaultProps}
                value={value}
                variant={VariantsEnum.danger}
                onChange={event => setValue(event.target.value)}
            />
            <Textarea
                {...defaultProps}
                value={value}
                variant={VariantsEnum.danger}
                placeholder="Enter some data"
                onChange={event => setValue(event.target.value)}
            />
        </>
    );
});

export const disabled: React.FC = () => (
    <Textarea
        {...defaultProps}
        disabled
        value="Value"
    />
);

export const required: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <Textarea
                {...defaultProps}
                required
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <Textarea
                {...defaultProps}
                required
                value={value}
                placeholder="Enter some data"
                onChange={event => setValue(event.target.value)}
            />
        </>
    );
});

export const readonly: React.FC = () => (
    <Textarea
        {...defaultProps}
        readonly
        value="Readonly value"
    />
);

export const error: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <Textarea
            {...defaultProps}
            value={value}
            error="has some error"
            onChange={event => setValue(event.target.value)}
        />
    );
});

export const maxlength: React.FC = () => React.createElement(() => {
    const [value, setValue] = React.useState('');

    return (
        <Textarea
            {...defaultProps}
            value={value}
            maxlength={32}
            onChange={event => setValue(event.target.value)}
        />
    );
});
