import React from 'react';
import {mount} from 'enzyme';
import {factory, findComponent} from '../../../__test__/utils/helpers';
import Input from './index';

describe('Input', () => {
    const defaultProps = {
        handleChange: jest.fn(),
        handleBlur: jest.fn(),
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

    it('calls `handleBlur` on element blur event', () => {
        const component = findComponent(wrapper, 'component-input');

        component.simulate('blur');

        expect(defaultProps.handleBlur).toHaveBeenCalled();
    });

    it('calls `handleChange` on element change event', () => {
        const component = findComponent(wrapper, 'component-input');
        const target = {target: {value: 0}};

        component.simulate('change', target);

        expect(defaultProps.handleChange).toHaveBeenCalledWith(target);
    });

    it('renders label text from props', () => {
        const label = 'Content text';
        const props = {
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
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
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
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
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
            hasError: false,
            label,
            value,
        };
        const container = mount(<Input {...props} />);

        container.render();

        expect(mockSetLength).toHaveBeenCalledWith(value.length);
    });
});
