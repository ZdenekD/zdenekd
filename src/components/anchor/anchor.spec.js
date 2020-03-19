import React from 'react';
import {mount} from 'enzyme';
import {findComponent} from '../../__test__/utils/helpers';
import Anchor from './index';
import State from '../../state';

describe('Anchor', () => {
    const defaultProps = {href: '/', children: ''};

    it('renders without error', () => {
        const wrapper = mount(
            <State.StateProvider>
                <Anchor {...defaultProps} />
            </State.StateProvider>
        );
        const component = findComponent(wrapper, 'component-anchor');

        expect(component.exists()).toBe(true);
    });

    it('set `prepared` state', () => {
        const mockSetPrepared = jest.fn();

        React.useState = jest.fn(() => ['', mockSetPrepared]);

        const wrapper = mount(
            <State.StateProvider>
                <Anchor {...defaultProps} />
            </State.StateProvider>
        );

        wrapper.render();

        expect(mockSetPrepared).toHaveBeenCalled();
    });
});
