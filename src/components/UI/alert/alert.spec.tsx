import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import findComponent, {stateFactory} from '../../../__test__/utils/helpers';
import Alert from '.';

describe('Alert', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Alert isOpen>message</Alert>);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-alert');

        expect(component.exists()).toBe(true);
    });

    it('remove component on click remove button', () => {
        const mockSetState = jest.fn();

        React.useState = jest.fn(() => [true, mockSetState]);

        const container = stateFactory(<Alert>message</Alert>);
        const component = findComponent(container, 'component-alert');

        component.find('button').simulate('click');

        expect(mockSetState).toHaveBeenCalledTimes(1);
    });
});