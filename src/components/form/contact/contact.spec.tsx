import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import Contact from '.';

describe('Form/Contact', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Contact />);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-contact');

        expect(component.exists()).toBe(true);
    });
});
