import React from 'react';
import {mount} from 'enzyme';
import {factory, findComponent} from '../../../__test__/utils/helpers';
import Input from './index';

describe('Input', () => {
    const defaultProps = {
        onChange: jest.fn(),
        onBlur: jest.fn(),
        hasError: false,
        label: '',
    };
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Input, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-input');

        expect(component.exists()).toBe(true);
    });

    it('renders label without error', () => {
        const component = findComponent(wrapper, 'component-label');

        expect(component.exists()).toBe(true);
    });

    it('calls `onBlur` on element blur event', () => {
        const component = findComponent(wrapper, 'component-input');

        component.simulate('blur');

        expect(defaultProps.onBlur).toHaveBeenCalled();
    });

    it('calls `onChange` on element change event', () => {
        const component = findComponent(wrapper, 'component-input');
        const target = {target: {value: 0}};

        component.simulate('change', target);

        expect(defaultProps.onChange).toHaveBeenCalledWith(target);
    });

    it('renders label text from props', () => {
        const label = 'Content text';
        const props = {
            onChange: jest.fn(),
            onBlur: jest.fn(),
            hasError: false,
            label,
        };
        const container = factory(Input, props);
        const component = findComponent(container, 'component-label');

        expect(component.text().includes(label)).toBe(true);
    });

    it('renders error message if some occurs', () => {
        const label = 'Content text';
        const message = 'Error';
        const props = {
            onChange: jest.fn(),
            onBlur: jest.fn(),
            hasError: true,
            label,
            message,
        };
        const container = factory(Input, props);
        const component = findComponent(container, 'component-label');

        expect(component.text().includes(message)).toBe(true);
    });

    it('set characters `length` state on input value', () => {
        const mockSetLength = jest.fn();

        React.useState = jest.fn(() => ['', mockSetLength]);

        const label = 'Content text';
        const value = 'Input';
        const props = {
            onChange: jest.fn(),
            onBlur: jest.fn(),
            hasError: false,
            label,
            value,
        };
        const container = mount(<Input {...props} />);

        container.render();

        expect(mockSetLength).toHaveBeenCalledWith(value.length);
    });
});
