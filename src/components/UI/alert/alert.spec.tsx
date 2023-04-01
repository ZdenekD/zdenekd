import {
    act,
    render,
    screen,
    waitFor
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@/test/mocks/nextRouterMock';
import Alert from '.';

describe('UI/Alert', () => {
    it('renders without error', () => {
        render(<Alert isVisible>Alert</Alert>);

        expect(screen.getByTestId('component-alert')).toBeInTheDocument();
        expect(screen.getByTestId('component-alert-backdrop')).toBeInTheDocument();
    });

    it('contains passed title', () => {
        render(<Alert isVisible title="Title">Alert</Alert>);

        expect(screen.getByText('Title')).toBeInTheDocument();
    });

    it('contains passed timeout element', () => {
        render(<Alert isVisible timeout={3}>Alert</Alert>);

        expect(screen.getByTestId('component-alert-timeout')).toBeInTheDocument();
    });

    it('remove component on remove button click', async () => {
        const user = userEvent.setup();

        render(<Alert isVisible>Alert</Alert>);

        await act(async () => user.click(screen.getByTestId('component-alert-button')));
        await waitFor(() => {
            expect(screen.queryByTestId('component-alert')).not.toBeInTheDocument();
        });
    });

    it('remove component after timeout is passed', async () => {
        render(<Alert isVisible timeout={2}>Alert</Alert>);

        await waitFor(() => {
            expect(screen.queryByTestId('component-alert')).not.toBeInTheDocument();
        }, {timeout: 3000});
    });
});
