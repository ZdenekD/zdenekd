import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Button from '.';

describe('UI/Form Control/Button', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Button>Button</Button>);
        const component = findComponent(wrapper, 'component-button');

        expect(component.exists()).toBe(true);
    });
});
