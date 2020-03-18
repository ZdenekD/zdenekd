import React from 'react';
import {mount} from 'enzyme';
import {findComponent} from '../../__test__/utils/helpers';
import Form from './index';
import State from '../../state';

describe('Form', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <State.StateProvider>
                <Form />
            </State.StateProvider>
        );
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-form');

        expect(component.exists()).toBe(true);
    });
});
