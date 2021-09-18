import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Heading from '.';

describe('Heading', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Heading />);
        const component = findComponent(wrapper, 'component-heading');

        expect(component.exists()).toBe(true);
    });
});
