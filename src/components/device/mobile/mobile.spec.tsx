import {render, screen} from '@testing-library/react';
import Mobile from '.';

describe('Device/Mobile', () => {
    it('renders without error', () => {
        render(<Mobile />);

        expect(screen.getByTestId('component-device-mobile')).toBeInTheDocument();
    });
});
