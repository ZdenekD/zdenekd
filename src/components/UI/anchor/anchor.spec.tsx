import {render, screen} from '@testing-library/react';
import React from 'react';
import Anchor from '.';

describe('UI/Anchor', () => {
    it('renders without error', () => {
        render(<Anchor href="#">Anchor</Anchor>);

        expect(screen.getByTestId('component-anchor')).toBeInTheDocument();
    });

    it('has rel attribute on target prop set', async () => {
        render(<Anchor href="#" target="_blank">Anchor</Anchor>);

        await expect(screen.getByTestId('component-anchor')).toHaveAttribute('rel');
    });
});
