import {render, screen} from '@testing-library/react';
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
});
