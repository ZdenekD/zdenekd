import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import Header from '.';

describe('Layout/Header', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Header />);
        const component = findComponent(wrapper, 'component-header');

        expect(component.exists()).toBe(true);
    });
});
