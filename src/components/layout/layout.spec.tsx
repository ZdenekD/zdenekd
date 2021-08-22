import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import '../../__test__/mocks/nextRouterMock';
import Layout from '.';

describe('Layout', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Layout>Layout content</Layout>);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-layout');

        expect(component.exists()).toBe(true);
    });
});
