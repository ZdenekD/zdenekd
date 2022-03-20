import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import Aside from '.';

describe('Aside', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Aside />);
        const component = findComponent(wrapper, 'component-aside');

        expect(component.exists()).toBe(true);
    });
});
