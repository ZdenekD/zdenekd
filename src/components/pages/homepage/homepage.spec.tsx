import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Homepage from '.';

describe('Pages/Homepage', () => {
    it('renders without error', () => {
        render(<Homepage />);

        expect(screen.getByTestId('component-layout')).toBeInTheDocument();
    });
});
