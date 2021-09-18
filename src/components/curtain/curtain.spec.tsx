import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Curtain from '.';

describe('Curtain', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Curtain />);
        const component = findComponent(wrapper, 'component-curtain');

        expect(component.exists()).toBe(true);
    });
});
