import React from 'react';
import {mount} from 'enzyme';
import {getStore, factoryStore, findComponent} from '../../__test__/utils/helpers';
import Aside from './index';
import data from '../../data/pages';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Aside', () => {
    const defaultProps = {menu: {isOpen: false, isAnimated: false}};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryStore(Aside, defaultProps);
    });

    it('match snapshot', () => {
        const store = getStore({});
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
        const store = getStore({});
        const element = mount(<Aside store={store} />);
        const {length} = Object.keys(data);
        const component = findComponent(element, 'component-link');

        expect(component.length).toBe(length);
    });
});
