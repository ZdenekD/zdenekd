import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Logo from '.';

describe('Logo', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Logo />);
        const component = findComponent(wrapper, 'component-logo');

        expect(component.exists()).toBe(true);
    });
});
