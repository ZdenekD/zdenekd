import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Computer from '.';

describe('Device/Computer', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Computer />);
        const component = findComponent(wrapper, 'component-device-computer');

        expect(component.exists()).toBe(true);
    });
});
