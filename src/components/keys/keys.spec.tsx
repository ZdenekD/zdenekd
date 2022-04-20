import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Keys from '.';

describe('Form/Keys', () => {
    it('renders without error', () => {
        render(<Keys />);

        expect(screen.getByTestId('component-keys')).toBeInTheDocument();
    });
});
