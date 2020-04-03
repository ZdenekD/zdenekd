import React from 'react';
import {mount} from 'enzyme';
import {getStore, findComponent} from '../../__test__/utils/helpers';
import Aside from './index';
import data from '../../data/pages';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Aside', () => {
    const store = getStore({menu: {isOpen: false, isAnimated: false}});
    let wrapper;

    beforeEach(() => {
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
        const aside = mount(<Aside store={store} />);
        const {length} = Object.keys(data);
        const component = findComponent(aside, 'component-item');

        expect(component.length).toBe(length);
    });

    it('set `links` state', () => {
        const mockSetLinks = jest.fn();

        React.useState = jest.fn(() => ['', mockSetLinks]);

        const aside = mount(<Aside store={store} />);

        aside.render();

        expect(mockSetLinks).toHaveBeenCalled();
    });
});
