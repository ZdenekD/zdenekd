import {render, screen} from '@testing-library/react';
import Button from '.';

describe('UI/Form Control/Button', () => {
    it('renders without error', () => {
        render(<Button>Button</Button>);

        expect(screen.getByTestId('component-button')).toBeInTheDocument();
    });
});
