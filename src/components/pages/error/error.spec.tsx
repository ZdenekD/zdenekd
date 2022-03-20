import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import Error from '.';

describe('Pages/Error', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Error />);
        const component = findComponent(wrapper, 'component-error');

        expect(component.exists()).toBe(true);
    });
});
