import React from 'react';
import {mount} from 'enzyme';
import {findComponent, getStore} from '../../__test__/utils/helpers';
import Heading from './index';
import State from '../../state';
import data from '../../data/pages';
import {getPage} from '../../helpers/getPage';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Heading', () => {
    const store = getStore({menu: {isOpen: false, isAnimated: false}});
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <State.StateProvider>
                <Heading store={store} />
            </State.StateProvider>
        );
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-heading');

        expect(component.exists()).toBe(true);
    });

    it('renders appropriate heading title', () => {
        const component = findComponent(wrapper, 'component-title');
        const page = getPage('/');
        const heading = data[page].title;

        expect(component.text().includes(heading)).toBe(true);
    });
});
