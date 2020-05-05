import React from 'react';
import {mount} from 'enzyme';
import {getStore, findComponent} from '../../__test__/utils/helpers';
import Aside from './index';
import data from '../../data/pages';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Aside', () => {
    const defaultProps = {
        menu: {
            isOpen: false,
            isAnimated: false,
            handleMenu: jest.fn(),
            handleMenuAnimation: jest.fn(),
        },
    };
    let wrapper;
    let store;

    beforeEach(() => {
        store = getStore(defaultProps);
        wrapper = mount(<Aside store={store} />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-aside');

        expect(component.exists()).toBe(true);
    });

    it('renders navigation without error', () => {
        const component = findComponent(wrapper, 'component-navigation');

        expect(component.exists()).toBe(true);
    });

    it('renders all pages links', () => {
        const {length} = Object.keys(data);
        const component = findComponent(wrapper, 'component-item');

        expect(component.length).toBe(length);
    });

    it('calls get attribute on link click event', () => {
        const component = findComponent(wrapper, 'component-link');
        const mockEvent = {target: {getAttribute: jest.fn()}};

        component.first().simulate('click', mockEvent);

        expect(mockEvent.target.getAttribute).toHaveBeenCalled();
    });

    it('change menu state on link click', () => {
        const component = findComponent(wrapper, 'component-link');
        const state = {
            ...defaultProps.menu,
            isAnimated: true,
        };

        component.first().simulate('click');

        const {menu} = store.getState();

        expect(menu).toEqual(state);
    });

    it('set `links` state', () => {
        const mockSetLinks = jest.fn();

        React.useState = jest.fn(() => ['', mockSetLinks]);

        const aside = mount(<Aside store={store} />);

        aside.render();

        expect(mockSetLinks).toHaveBeenCalled();
    });
});
