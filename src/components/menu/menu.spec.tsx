import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Menu from '.';

describe('Menu', () => {
    it('renders without error', async () => {
        render(<Menu />);

        expect(screen.getByTestId('component-menu')).toBeInTheDocument();
    });
});
