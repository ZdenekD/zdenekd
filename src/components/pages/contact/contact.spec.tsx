import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import Homepage from '.';

describe('Pages/Homepage', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Homepage />);
        const component = findComponent(wrapper, 'component-contact');

        expect(component.exists()).toBe(true);
    });
});
