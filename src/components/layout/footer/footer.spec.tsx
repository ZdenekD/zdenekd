import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Footer from '.';

describe('Layout/Footer', () => {
    it('renders without error', () => {
        render(<Footer />);

        expect(screen.getByTestId('component-footer')).toBeInTheDocument();
    });
});
