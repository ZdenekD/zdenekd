import React from 'react';
import {shallow} from 'enzyme';
import {findComponent} from '../../../__tests__/utils/helpers';
import Heading from './index';

/**
 * Factory function to create a shallow wrapper for App component
 * @function setup
 * @param {Object} props - Component props specific to this setup
 * @param {Object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const factory = (props = {}, state = null) => {
    const wrapper = shallow(<Heading {...props} />);

    if (state) {
        wrapper.setState(state);
    }

    return wrapper;
};

describe('Heading', () => {
    it('renders wihout error', () => {
        const title = 'Title';
        const wrapper = factory({title});
        const component = findComponent(wrapper, 'component-heading');

        expect(component.length).toBe(1);
    });
});
