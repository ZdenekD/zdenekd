import React from 'react';
import {shallow} from 'enzyme';
import {getStore, findComponent} from '../../__test__/utils/helpers';
import Footer from './index';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Footer', () => {
    const store = getStore({menu: {isOpen: false, isAnimated: false}});
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer store={store} />).dive().dive();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-footer');

        expect(component.exists()).toBe(true);
    });
});
