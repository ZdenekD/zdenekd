import {render, screen} from '@testing-library/react';
import React from 'react';
import Anchor from '.';

describe('UI/Anchor', () => {
    it('renders without error', () => {
        render(<Anchor href="#">Anchor</Anchor>);

        expect(screen.getByTestId('component-anchor')).toBeInTheDocument();
    });

    it('has rel attribute on target prop set', () => {
        render(<Anchor href="#" target="_blank">Anchor</Anchor>);

        expect(screen.getByTestId('component-anchor')).toHaveAttribute('rel');
    });
});
