import React from 'react';
import {mount} from 'enzyme';
import {findComponent, getStore} from '../../__test__/utils/helpers';
import Menu from './index';
import State from '../../state';

describe('Menu', () => {
    const store = getStore({
        menu: {
            isOpen: false,
            isAnimated: false,
            handleMenu: jest.fn(),
            handleMenuAnimation: jest.fn(),
        },
    });
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <State.StateProvider>
                <Menu store={store} />
            </State.StateProvider>
        );
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-menu');

        expect(component.exists()).toBe(true);
    });
});
