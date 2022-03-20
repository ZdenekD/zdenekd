import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import Footer from '.';

describe('Layout/Footer', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Footer />);
        const component = findComponent(wrapper, 'component-footer');

        expect(component.exists()).toBe(true);
    });
});
