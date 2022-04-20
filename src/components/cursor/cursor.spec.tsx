import {render, screen} from '@testing-library/react';
import Cursor from './index';

describe('Cursor', () => {
    it('renders inner cursor without error', () => {
        render(<Cursor />);

        expect(screen.getByTestId('component-inner-cursor')).toBeInTheDocument();
    });

    it('renders outer cursor without error', () => {
        render(<Cursor />);

        expect(screen.getByTestId('component-outer-cursor')).toBeInTheDocument();
    });
});
