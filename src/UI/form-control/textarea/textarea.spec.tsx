import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../__test__/utils/helpers';
import Textarea from '.';

describe('Textarea', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Textarea name="textarea" label="Textarea" />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-textarea');

        expect(component.exists()).toBe(true);
    });

    it('set length on change', () => {
        const mockSetState = jest.fn();
        const value = 'value';
        const mockEvent = {target: {value}};

        React.useState = jest.fn(() => [0, mockSetState]);

        const container = shallow(<Textarea name="textarea" label="textarea" />);
        const component = findComponent(container, 'component-textarea');

        component.simulate('change', mockEvent);

        expect(mockSetState).toHaveBeenCalledWith(value.length);
    });
});
