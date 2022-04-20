import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@/test/mocks/nextRouterMock';
import Controls from '.';

describe('Project/Browser/Controls', () => {
    it('renders without error', () => {
        render(
            <Controls
                isFirst={false}
                isLast={false}
            />
        );

        expect(screen.getByTestId('component-controls-prev')).toBeInTheDocument();
        expect(screen.getByTestId('component-controls-next')).toBeInTheDocument();
    });

    it('triggers handlePrev function on prev button click', async () => {
        const user = userEvent.setup();
        const mockFunction = jest.fn();

        render(
            <Controls
                isFirst={false}
                isLast={false}
                handlePrev={mockFunction}
            />
        );
        await user.click(screen.getByTestId('component-controls-prev'));

        expect(mockFunction).toHaveBeenCalled();
    });

    it('triggers handleNext function on next button click', async () => {
        const user = userEvent.setup();
        const mockFunction = jest.fn();

        render(
            <Controls
                isFirst={false}
                isLast={false}
                handleNext={mockFunction}
            />
        );
        await user.click(screen.getByTestId('component-controls-next'));

        expect(mockFunction).toHaveBeenCalled();
    });
});
