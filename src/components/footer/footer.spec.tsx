import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import Footer from '.';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({pathname: '/'}))}));

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
