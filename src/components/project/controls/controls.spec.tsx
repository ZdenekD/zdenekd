import {
    act,
    render,
    screen,
    waitFor
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@/test/mocks/nextRouterMock';
import Controls from '.';

describe('Project/Controls', () => {
    it('renders without error', () => {
        render(
            <Controls
                isFirst={false}
                isLast={false}
            />
        );

        expect(screen.getByTestId('component-controls')).toBeInTheDocument();
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

        await act(async () => {user.click(screen.getByTestId('component-controls-prev'));});
        await waitFor(() => expect(mockFunction).toHaveBeenCalled());
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

        await act(async () => {user.click(screen.getByTestId('component-controls-next'));});
        await waitFor(() => {expect(mockFunction).toHaveBeenCalled();});
    });
});
