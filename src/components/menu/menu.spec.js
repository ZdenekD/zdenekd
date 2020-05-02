import React from 'react';
import {mount} from 'enzyme';
import {findComponent, getStore} from '../../__test__/utils/helpers';
import Menu from './index';
import State from '../../state';

describe('Menu', () => {
    const defaultProps = {
        menu: {
            isOpen: false,
            isAnimated: false,
            handleMenu: jest.fn(),
            handleMenuAnimation: jest.fn(),
        },
    };
    let store;
    let wrapper;

    beforeEach(() => {
        store = getStore(defaultProps);
        wrapper = mount(
            <State.Provider>
                <Menu store={store} />
            </State.Provider>
        );
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-menu');

        expect(component.exists()).toBe(true);
    });

    it('test', () => {
        const component = findComponent(wrapper, 'component-menu');
        const state = {
            ...defaultProps.menu,
            isOpen: true,
            isAnimated: true,
        };

        component.simulate('click');

        const {menu} = store.getState();

        expect(menu).toEqual(state);
    });
});
