import {render, screen} from '@testing-library/react';
import Computer from '.';

describe('Device/Computer', () => {
    it('renders without error', () => {
        render(<Computer />);

        expect(screen.getByTestId('component-device-computer')).toBeInTheDocument();
    });
});
