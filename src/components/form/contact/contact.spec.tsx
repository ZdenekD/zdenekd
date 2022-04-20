import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Contact from '.';

describe('Form/Contact', () => {
    it('renders without error', () => {
        render(<Contact />);

        expect(screen.getByTestId('component-form')).toBeInTheDocument();
    });
});
