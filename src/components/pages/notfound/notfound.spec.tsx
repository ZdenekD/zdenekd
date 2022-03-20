import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import NotFound from '.';

describe('Pages/NotFound', () => {
    it('renders without error', () => {
        const wrapper = shallow(<NotFound />);
        const component = findComponent(wrapper, 'component-notfound');

        expect(component.exists()).toBe(true);
    });
});
