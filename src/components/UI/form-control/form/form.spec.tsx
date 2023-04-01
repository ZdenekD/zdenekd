import {render, screen} from '@testing-library/react';
import Form from '.';

describe('UI/Form Control/Form', () => {
    it('renders without error', () => {
        render(<Form>Form</Form>);

        expect(screen.getByTestId('component-form')).toBeInTheDocument();
    });
});
