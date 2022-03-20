import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import Menu from '.';

describe('Menu', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Menu />);
        const component = findComponent(wrapper, 'component-menu');

        expect(component.exists()).toBe(true);
    });
});
