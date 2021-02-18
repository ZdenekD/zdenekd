import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../__test__/utils/helpers';
import Input from '.';

describe('Input', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Input name="input" label="Input" />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-input');

        expect(component.exists()).toBe(true);
    });

    it('renders error', () => {
        const container = shallow(<Input name="input" label="Input" error="Error message" />);
        const component = findComponent(container, 'component-input-error');

        expect(component.exists()).toBe(true);
    });

    it('set length on change', () => {
        const mockSetState = jest.fn();
        const value = 'value';
        const mockEvent = {target: {value}};

        React.useState = jest.fn(() => [0, mockSetState]);

        const container = shallow(<Input name="input" label="Input" />);
        const component = findComponent(container, 'component-input');

        component.simulate('change', mockEvent);

        expect(mockSetState).toHaveBeenCalledWith(value.length);
    });
});
