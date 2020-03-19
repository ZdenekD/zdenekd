import React from 'react';
import {mount} from 'enzyme';
import {findComponent, getStore} from '../../../__test__/utils/helpers';
import Keys from './index';
import State from '../../../state';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Keys', () => {
    const store = getStore({});
    const defaultProps = {menu: {isOpen: false}, app: {isAnimated: false}};
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <State.StateProvider>
                <Keys store={store} {...defaultProps} />
            </State.StateProvider>
        );
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-keys');

        expect(component.exists()).toBe(true);
    });
});
