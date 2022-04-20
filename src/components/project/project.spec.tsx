import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Project from '.';

describe('Project', () => {
    it('renders without error', () => {
        render(<Project />);

        expect(screen.getByTestId('component-project')).toBeInTheDocument();
    });
});
