import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Projects from '.';

describe('Pages/Projects', () => {
    it('renders without error', () => {
        render(<Projects />);

        expect(screen.getByTestId('component-layout')).toBeInTheDocument();
    });
});
