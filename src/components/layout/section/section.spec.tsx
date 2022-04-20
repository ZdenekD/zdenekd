import {render, screen} from '@testing-library/react';
import Section from '.';

describe('Layout/Section', () => {
    it('renders without error', () => {
        render(<Section />);

        expect(screen.getByTestId('component-section')).toBeInTheDocument();
    });
});
