import React from 'react';
import {mount} from 'enzyme';
import {findComponent, getStore} from '../../../__test__/utils/helpers';
import Keys from './index';
import State from '../../../state';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Keys', () => {
    const defaultProps = {menu: {isOpen: false}, app: {isAnimated: false}};
    let store;
    let wrapper;

    beforeEach(() => {
        store = getStore(defaultProps);
        wrapper = mount(
            <State.Provider>
                <Keys store={store} />
            </State.Provider>
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
