import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Mobile from '.';

describe('Mobile device', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Mobile />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-device-mobile');

        expect(component.exists()).toBe(true);
    });
});
