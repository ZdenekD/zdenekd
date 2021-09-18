import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Mobile from '.';

describe('Device/Mobile', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Mobile />);
        const component = findComponent(wrapper, 'component-device-mobile');

        expect(component.exists()).toBe(true);
    });
});
