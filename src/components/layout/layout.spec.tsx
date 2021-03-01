import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import Layout from '.';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({pathname: '/'}))}));

describe('Layout', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Layout>Content</Layout>);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-layout');

        expect(component.exists()).toBe(true);
    });
});
