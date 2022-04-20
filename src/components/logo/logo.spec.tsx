import {render, screen} from '@testing-library/react';
import Logo from '.';

describe('Logo', () => {
    it('renders without error', async () => {
        render(<Logo />);

        expect(screen.getByTestId('component-logo')).toBeInTheDocument();
    });
});
