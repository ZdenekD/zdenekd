import {render, screen} from '@testing-library/react';
import Loader from '.';

describe('UI/Loader', () => {
    it('renders without error', () => {
        render(<Loader />);

        expect(screen.getByTestId('component-loader')).toBeInTheDocument();
    });
});
