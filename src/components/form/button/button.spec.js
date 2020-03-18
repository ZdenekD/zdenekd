import React from 'react';
import {mount} from 'enzyme';
import {findComponent} from '../../../__test__/utils/helpers';
import Button from './index';
import State from '../../../state';

describe('Button', () => {
    const defaultProps = {children: ''};

    it('renders without error', () => {
        const wrapper = mount(
            <State.StateProvider>
                <Button {...defaultProps} />
            </State.StateProvider>
        );
        const component = findComponent(wrapper, 'component-button');

        expect(component.exists()).toBe(true);
    });
});
