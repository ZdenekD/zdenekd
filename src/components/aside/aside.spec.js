import React from 'react';
import {mount} from 'enzyme';
import {getStore, factoryStore, findComponent} from '../../__test__/utils/helpers';
import Aside from './index';
import data from '../../data/pages';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Aside', () => {
    const defaultProps = {menu: {isOpen: false, isAnimated: false}};
    const store = getStore({});
    let wrapper;

    beforeEach(() => {
        wrapper = factoryStore(Aside, defaultProps);
    });

    it('match snapshot', () => {
        const aside = mount(<Aside store={store} />);

        expect(aside.html()).toMatchSnapshot();
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
