import React from 'react';
import {factoryState, findComponent} from '../../__test__/utils/helpers';
import Anchor from './index';

describe('Anchor', () => {
    const defaultProps = {href: '/', children: ''};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryState(Anchor, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-anchor');

        expect(component.exists()).toBe(true);
    });

    it('set `prepared` state', () => {
        const mockSetPrepared = jest.fn();

        React.useState = jest.fn(() => ['', mockSetPrepared]);

        const anchor = factoryState(Anchor, defaultProps);

        anchor.render();

        expect(mockSetPrepared).toHaveBeenCalled();
    });
});
