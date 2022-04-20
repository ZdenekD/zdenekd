import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Target from '.';

describe('Project/Browser/Target', () => {
    it('renders without error', () => {
        render(<Target url="http://url" />);

        expect(screen.getByTestId('component-target')).toBeInTheDocument();
    });
});
