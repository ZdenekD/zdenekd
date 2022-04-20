import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Header from '.';

describe('Layout/Header', () => {
    it('renders without error', () => {
        render(<Header />);

        expect(screen.getByTestId('component-header')).toBeInTheDocument();
    });
});
