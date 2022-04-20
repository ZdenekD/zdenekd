import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import NotFound from '.';

describe('Pages/NotFound', () => {
    it('renders without error', () => {
        render(<NotFound />);

        expect(screen.getByTestId('component-layout')).toBeInTheDocument();
    });
});
