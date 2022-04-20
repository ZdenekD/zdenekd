import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Textarea from '.';

const props = {
    name: 'textarea',
    label: 'Textarea',
};

describe('UI/Form Control/Textarea', () => {
    it('renders without error', () => {
        render(<Textarea {...props} />);

        expect(screen.getByTestId('component-textarea')).toBeInTheDocument();
    });

    it('renders message component on error', () => {
        render(<Textarea error="Error message"{...props} />);

        expect(screen.getByTestId('component-textarea-error')).toBeInTheDocument();
    });

    it('renders maxlength component', () => {
        render(<Textarea maxlength={10} {...props} />);

        expect(screen.getByTestId('component-textarea-maxlength')).toBeInTheDocument();
    });

    it('set length on change', async () => {
        const user = userEvent.setup();

        render(<Textarea maxlength={10} {...props} />);

        await user.type(screen.getByTestId('component-textarea'), 'value');

        expect(screen.getByTestId('component-textarea-maxlength')).toHaveTextContent('5 / 10');
    });
});
