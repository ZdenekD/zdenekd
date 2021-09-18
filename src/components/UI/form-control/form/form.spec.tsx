import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Form from '.';

describe('UI/Form Control/Form', () => {
    it('renders wihout error', () => {
        const wrapper = shallow(<Form>Content</Form>);
        const component = findComponent(wrapper, 'component-form');

        expect(component.exists()).toBe(true);
    });
});
