import {render, screen} from '@testing-library/react';
import {DirectionsEnum} from '@/enums';
import Key from '.';

describe('Keys/Key', () => {
    it('renders without error', () => {
        render(
            <Key
                direction={DirectionsEnum.down}
                label="Down"
            />
        );

        expect(screen.getByTestId('component-key')).toBeInTheDocument();
    });
});
