import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Addressbar from '.';

describe('Project/Browser/Addressbar', () => {
    it('renders without error', () => {
        render(<Addressbar url="http://url" />);

        expect(screen.getByTestId('component-addressbar')).toBeInTheDocument();
    });

    it('does render link if url not contains `in.progress`', () => {
        render(<Addressbar url="http://project" />);

        expect(screen.getByTestId('component-addressbar-link')).toBeInTheDocument();
    });
});
