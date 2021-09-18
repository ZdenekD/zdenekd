import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Tablet from '.';

describe('Device/Tablet', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Tablet />);
        const component = findComponent(wrapper, 'component-device-tablet');

        expect(component.exists()).toBe(true);
    });
});
