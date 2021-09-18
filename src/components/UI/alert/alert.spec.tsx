import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import Alert from '.';

describe('UI/Alert', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Alert isOpen>message</Alert>);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-alert');

        expect(component.exists()).toBe(true);
    });

    it('remove component on click remove button', () => {
        const mockSetState = jest.fn();

        React.useState = jest.fn(() => [true, mockSetState]);

        const container = shallow(<Alert>message</Alert>);
        const button = findComponent(container, 'component-alert-button');

        button.simulate('click');

        expect(mockSetState).toHaveBeenCalledTimes(1);
    });
});
