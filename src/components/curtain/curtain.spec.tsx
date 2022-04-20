import {render, screen} from '@testing-library/react';
import Curtain from '.';

describe('Curtain', () => {
    it('renders without error', () => {
        render(<Curtain />);

        expect(screen.getByTestId('component-curtain')).toBeInTheDocument();
    });
});
