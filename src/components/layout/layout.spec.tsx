import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import Layout from '.';

describe('Layout', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Layout>Layout content</Layout>);
        const component = findComponent(wrapper, 'component-layout');

        expect(component.exists()).toBe(true);
    });
});
