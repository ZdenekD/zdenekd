import React from 'react';
import {mount} from 'enzyme';
import {factory, findComponent} from '../../__test__/utils/helpers';
import Content from './index';

describe('Content', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Content);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-content');

        expect(component.exists()).toBe(true);
    });

    it('renders content in component', () => {
        const text = 'Content';
        const content = () => (<p>{text}</p>);
        const element = mount(<Content content={content()} />);

        expect(element.html().includes(text)).toBe(true);
    });
});
