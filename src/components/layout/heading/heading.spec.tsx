import {render, screen} from '@testing-library/react';
import Heading from '.';

describe('Layout/Heading', () => {
    it('renders without error', () => {
        render(<Heading />);

        expect(screen.getByTestId('component-heading')).toBeInTheDocument();
    });
});
