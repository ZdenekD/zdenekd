import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import Contact from '.';

const handleSubmit = jest.fn();
const useForm = () => ({
    register: jest.fn(),
    errors: [],
    handleSubmit,
});

jest.mock('react-hook-form', () => ({useForm}));

describe('Form/Contact', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Contact />);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-contact');

        expect(component.exists()).toBe(true);
    });

    it('shows loader if form is in disabled state', () => {
        React.useState = jest.fn(() => [true, jest.fn()]);

        const container = shallow(<Contact />);
        const component = findComponent(container, 'component-contact-loader');

        expect(component.exists()).toBe(true);
    });

    it('runs handleSubmit on form submit', () => {
        const component = findComponent(wrapper, 'component-contact');

        component.find('Button').simulate('click');

        expect(handleSubmit).toHaveBeenCalled();
    });
});
