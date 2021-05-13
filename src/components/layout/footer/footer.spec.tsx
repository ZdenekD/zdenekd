import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../__test__/utils/helpers';
import '../../../__test__/mocks/routerMock';
import Footer from '.';

describe('Footer', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-footer');

        expect(component.exists()).toBe(true);
    });
});
