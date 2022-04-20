import {render, screen} from '@testing-library/react';
import Tabler from '.';

describe('Device/Tabler', () => {
    it('renders without error', () => {
        render(<Tabler />);

        expect(screen.getByTestId('component-device-tablet')).toBeInTheDocument();
    });
});
