import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Error from '.';

describe('Pages/Error', () => {
    it('renders without error', () => {
        render(<Error />);

        expect(screen.getByTestId('component-layout')).toBeInTheDocument();
    });
});
