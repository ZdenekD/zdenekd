import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import Tools from '.';

const items = ['string1', 'string2'];

describe('Project/Tools', () => {
    it('renders without error', () => {
        render(<Tools items={items} />);

        expect(screen.getByTestId('component-tools')).toBeInTheDocument();
    });
});
