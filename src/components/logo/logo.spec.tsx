import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import Logo from '.';

describe('Logo', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Logo />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-logo');

        expect(component.exists()).toBe(true);
    });
});
