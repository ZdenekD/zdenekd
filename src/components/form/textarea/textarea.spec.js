import React from 'react';
import {mount} from 'enzyme';
import {factory, findComponent} from '../../../__test__/utils/helpers';
import Textarea from './index';

describe('Textarea', () => {
    const defaultProps = {
        handleChange: jest.fn(),
        handleBlur: jest.fn(),
        hasError: false,
        label: '',
    };
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Textarea, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-textarea');

        expect(component.exists()).toBe(true);
    });

    it('renders label without error', () => {
        const component = findComponent(wrapper, 'component-label');

        expect(component.exists()).toBe(true);
    });

    it('calls `handleBlur` on element blur event', () => {
        const component = findComponent(wrapper, 'component-textarea');

        component.simulate('blur');

        expect(defaultProps.handleBlur).toHaveBeenCalled();
    });

    it('calls `handleChange` on element change event', () => {
        const component = findComponent(wrapper, 'component-textarea');
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
        const container = factory(Textarea, props);
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
        const container = factory(Textarea, props);
        const component = findComponent(container, 'component-label');

        expect(component.text().includes(message)).toBe(true);
    });

    it('set characters `length` state on input value', () => {
        const mockSetLength = jest.fn();

        React.useState = jest.fn(() => ['', mockSetLength]);

        const label = 'Content text';
        const value = 'Textarea';
        const props = {
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
            hasError: false,
            label,
            value,
        };
        const container = mount(<Textarea {...props} />);

        container.render();

        expect(mockSetLength).toHaveBeenCalledWith(value.length);
    });
});
