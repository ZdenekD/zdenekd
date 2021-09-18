import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Section from '.';

describe('Layout/Section', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Section>Section content</Section>);
        const component = findComponent(wrapper, 'component-section');

        expect(component.exists()).toBe(true);
    });
});
