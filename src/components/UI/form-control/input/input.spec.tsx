import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Input from '.';

const props = {
    name: 'input',
    label: 'Input',
};

describe('UI/Form Control/Input', () => {
    it('renders without error', () => {
        render(<Input {...props} />);

        expect(screen.getByTestId('component-input')).toBeInTheDocument();
    });

    it('renders message component on error', () => {
        render(<Input error="Error message" {...props} />);

        expect(screen.getByTestId('component-input-error')).toBeInTheDocument();
    });

    it('renders maxlength component', () => {
        render(<Input maxlength={10} {...props} />);

        expect(screen.getByTestId('component-input-maxlength')).toBeInTheDocument();
    });

    it('set length on change', async () => {
        const user = userEvent.setup();

        render(<Input maxlength={10} {...props} />);

        await user.type(screen.getByTestId('component-input'), 'value');

        expect(screen.getByTestId('component-input-maxlength')).toHaveTextContent('5 / 10');
    });
});
