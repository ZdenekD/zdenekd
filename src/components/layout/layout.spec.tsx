import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Layout from '.';

describe('Layout', () => {
    it('renders without error', async () => {
        render(<Layout />);

        expect(screen.getByTestId('component-layout')).toBeInTheDocument();
    });
});
