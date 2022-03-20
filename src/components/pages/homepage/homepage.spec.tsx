import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import Contact from '.';

describe('Pages/Contact', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Contact />);
        const component = findComponent(wrapper, 'component-homepage');

        expect(component.exists()).toBe(true);
    });
});
