import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Aside from '.';

describe('Aside', () => {
    it('renders without error', () => {
        render(<Aside />);

        expect(screen.getByTestId('component-aside')).toBeInTheDocument();
    });
});
