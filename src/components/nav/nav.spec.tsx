import {render, screen} from '@testing-library/react';
import pages from '@/data/pages';
import '@/test/mocks/nextRouterMock';
import Nav from '.';

describe('Nav', () => {
    it('renders without error', () => {
        render(<Nav />);

        expect(screen.getByTestId('component-nav')).toBeInTheDocument();
    });

    it('renders all pages links', () => {
        render(<Nav />);

        const {length} = Object.keys(pages);

        expect(screen.getAllByTestId('component-item').length).toBe(length);
    });
});
